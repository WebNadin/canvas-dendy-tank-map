'use strict';

var gulp = require('gulp'),
  prefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  rigger = require('gulp-rigger'),
  cleanCSS = require('gulp-clean-css'),
  rimraf = require('rimraf'),
  browserSync = require("browser-sync").create(),
  plumber = require('gulp-plumber'),
  imagemin = require('gulp-imagemin'),
  rename = require("gulp-rename"),
  log = require('fancy-log'),
  version = require('gulp-version-number');

var path = {
  build: {
    html: 'build/',
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/images/',
    fonts: 'build/fonts/'
  },
  prod: {
    html: 'theme/',
    js: 'theme/js/',
    css: 'theme/css/',
    img: 'theme/images/',
    fonts: 'theme/fonts/',
    partials: 'theme/partials/'
  },
  src: {
    html: 'src/*.html',
    js: 'src/js//*.*',
    style: 'src/style/*.*',
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*',
    partials: 'src/template/**/*.html'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: ['src/style/*.scss', 'src/style/partials/*.scss'],
    img: 'src/images/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build',
  cleanprod: './prod'
};

var config = {
  server: {
    baseDir: "./build"
  },
  tunnel: "xlusive",
  online: false,
  host: 'localhost',
  port: 9000,
  logPrefix: "project"
};

var versionConfig = {
  'value': '%MDS%',
  'append': {
    'key': 'v',
    'to': ['css', 'js']
  }
};

function reload(done) {
  browserSync.reload();
  done();
}


gulp.task('webserver', function (cb) {
  browserSync.init(config);
  cb();
});

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});


gulp.task('html:build', function (cb) {
  gulp.src(path.src.html)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(path.build.html))
    .on('end', cb)
});

gulp.task('js:build', function (cb) {
  gulp.src(path.src.js)
    .pipe(plumber())
    .pipe(rigger())
    .pipe(gulp.dest(path.build.js))
    .on('end', cb)
});

gulp.task('style:build', function (cb) {
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['src/style/'],
      outputStyle: 'expanded',
      sourceMap: false,
      errLogToConsole: true
    }))
    .pipe(cleanCSS({compatibility: 'ie9', level: 0}))
    .pipe(prefixer({browsers: ['> 0.5%', 'iOS >= 7', 'ie >= 9']}))
    .pipe(gulp.dest(path.build.css))
    .on('end', cb)
    .pipe(browserSync.stream())
});

gulp.task('image:build', function (cb) {
  gulp.src(path.src.img)
    .pipe(gulp.dest(path.build.img))
    .on('end', cb)
});

gulp.task('fonts:build', function (cb) {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
    .on('end', cb)
});

gulp.task('clean:prod', function (cb) {
  rimraf(path.cleanprod, cb);
});

gulp.task('html:prod', function (cb) {
  gulp.src(path.src.html)
    .pipe(rigger())
    .pipe(version(versionConfig))
    .pipe(gulp.dest(path.prod.html))
    .on('end', cb)
});

gulp.task('js:prod', function (cb) {
  gulp.src(path.src.js)
    .pipe(rigger())
    .pipe(gulp.dest(path.prod.js))
    .on('end', cb)
});

gulp.task('style:prod', function (cb) {
  gulp.src(path.src.style)
    .pipe(sass({
      includePaths: ['src/style/'],
      outputStyle: 'expanded',
      sourceMap: false,
      errLogToConsole: true
    }))
    .pipe(cleanCSS({compatibility: 'ie9', level: 1}))
    .pipe(prefixer({browsers: ['> 0.5%', 'iOS >= 7', 'ie >= 9']}))
    .pipe(gulp.dest(path.prod.css))
    .on('end', cb)
});

gulp.task('image:prod', function (cb) {
  gulp.src(path.src.img)
    .pipe(imagemin())
    .pipe(gulp.dest(path.prod.img))
    .on('end', cb)
});

gulp.task('fonts:prod', function (cb) {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.prod.fonts))
    .on('end', cb)
});

gulp.task('partials:prod', function (cb) {
  gulp.src(path.src.partials)
    .pipe(rename(function (path) {
      path.extname = ".blade.php";
    }))
    .pipe(gulp.dest(path.prod.partials))
    .on('end', cb);
});




gulp.task('build',
  gulp.series(
    'clean',
    gulp.parallel(
      'html:build',
      'js:build',
      'style:build',
      'fonts:build',
      'image:build'
    )
  )
);

gulp.task('prod',
  gulp.series(
    'clean:prod',
    gulp.parallel(
      'html:prod',
      'js:prod',
      'style:prod',
      'fonts:prod',
      'image:prod',
      'partials:prod'
    )
  )
);


gulp.task('watch', function (cb) {
  gulp.watch(path.watch.style, gulp.series('style:build'));
  gulp.watch(path.watch.img, gulp.series('image:build', reload));
  gulp.watch(path.watch.js, gulp.series('js:build', reload));
  gulp.watch(path.watch.fonts, gulp.series('fonts:build', reload));
  gulp.watch(path.watch.html, gulp.series('html:build', reload));
  cb();
});


gulp.task('default',
  gulp.series(
    gulp.parallel(
      'build',
      'watch'
    ),
    'webserver'
  )
);