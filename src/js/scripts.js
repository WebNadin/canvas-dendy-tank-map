//= partials/helper.js

function drawArea() {
  var example = document.getElementById("map"),
    ctx = example.getContext('2d'),
    cellSize = 32,
    map = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 2, 2, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1],
      [2, 2, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 2, 2],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];
  example.height = 15 * cellSize;
  example.width = 16 * cellSize;
  ctx.fillStyle = '#ccc';
  ctx.fillRect(0, 0, example.width, example.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(cellSize, cellSize, 13 * cellSize, 13 * cellSize);
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < 26; j++) {
      switch (map[i][j]) {

        case 1:
          drawBrick(j * cellSize / 2 + cellSize, i * cellSize / 2 + cellSize);
          break;

        case 2:
          drawHardBrick(j * cellSize / 2 + cellSize, i * cellSize / 2 + cellSize);
          break;

        case 3:
          drawHardBrick(j * cellSize / 2 + cellSize, i * cellSize / 2 + cellSize);
          break;

      }

    }
  }
  function drawBrick(x, y) {
    ctx.fillStyle = '#d23f07';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 2);

    ctx.fillStyle = '#88300e';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 16);
    ctx.fillRect(x, y + cellSize / 4, cellSize / 2, cellSize / 16);
    ctx.fillRect(x + cellSize / 4, y, cellSize / 16, cellSize / 4);
    ctx.fillRect(x + cellSize / 16, y + cellSize / 4, cellSize / 16, cellSize / 4);

    ctx.fillStyle = '#D3D3D3';
    ctx.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 2, cellSize / 16);
    ctx.fillRect(x, y + cellSize / 2 - cellSize / 16, cellSize / 2, cellSize / 16);
    ctx.fillRect(x, y + cellSize / 4 - cellSize / 16, cellSize / 16, cellSize / 4);
    ctx.fillRect(x + cellSize / 4 - cellSize / 16, y, cellSize / 16, cellSize / 4);
  }

  function drawHardBrick(x, y) {
    ctx.fillStyle = '#cccccc';
    ctx.fillRect(x, y, cellSize / 2, cellSize / 2);

    ctx.fillStyle = '#909090';
    ctx.beginPath();
    ctx.moveTo(x + cellSize / 2, y);
    ctx.lineTo(x + cellSize / 2, y + cellSize / 2);
    ctx.lineTo(x, y + cellSize / 2);
    ctx.fill();

    ctx.fillStyle = '#eeeeee';
    ctx.fillRect(x + cellSize / 8, y + cellSize / 8, cellSize / 4, cellSize / 4)
  }
}

function drawTank() {
  let canvas = document.getElementById('tank');
  let cellSize = 10;
  canvas.height = 28 * cellSize;
  canvas.width = 28 * cellSize;
  let ctx = canvas.getContext('2d');
  let tank = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 0, 0, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 0, 0, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0]
  ];
  //ctx.save();

  //ctx.translate(cellSize * 5, cellSize * 4);

  for (let j = 0; j < 32; j++) {
    for (let i = 0; i < 32; i++) {
      switch (tank[j][i]) {

        case 1:
          drawElem(i * cellSize, j * cellSize + cellSize, '#fde6a0');
          break;

        case 2:
          drawElem(i * cellSize, j * cellSize + cellSize, '#ff9f31');
          break;

        case 3:
          drawElem(i * cellSize, j * cellSize + cellSize, '#906e02');
          break;

      }

    }
  }

  function drawElem(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cellSize, cellSize);

  }

  //function drawBase(x, y) {
  //  ctx.fillStyle = '#ff9b2b';
  //  ctx.fillRect(x, y, cellSize, cellSize);
  //}
  //
  //function drawDark(x, y) {
  //  ctx.fillStyle = '#906e00';
  //  ctx.fillRect(x, y, cellSize, cellSize);
  //}

  //context.beginPath();
  //context.moveTo(0, 0);
  //context.lineTo(cellSize, 0);
  //context.lineTo(cellSize, cellSize);
  //context.lineTo(0, cellSize);
  //context.closePath();

  context.fillStyle = '#fd9b30';
  //context.fill();

  context.lineWidth = 5;
  //context.strokeStyle = 'red';
  //context.stroke();

  //context.restore();
}

function drawTankBig() {
  let canvas = document.getElementById('tankBig');
  let cellSize = 5;
  canvas.height = 28 * cellSize;
  canvas.width = 28 * cellSize;
  let ctx = canvas.getContext('2d');
  let tank = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 0, 0, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 0, 0, 3, 3, 3, 3, 1, 1, 3, 3, 3, 3, 0, 0, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0]
  ];
  //ctx.save();

  //ctx.translate(cellSize * 5, cellSize * 4);

  for (let j = 0; j < 32; j++) {
    for (let i = 0; i < 32; i++) {
      switch (tank[j][i]) {

        case 1:
          drawElem(i * cellSize, j * cellSize + cellSize, '#fde6a0');
          break;

        case 2:
          drawElem(i * cellSize, j * cellSize + cellSize, '#ff9f31');
          break;

        case 3:
          drawElem(i * cellSize, j * cellSize + cellSize, '#906e02');
          break;

      }

    }
  }

  function drawElem(x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, cellSize, cellSize);

  }

  //function drawBase(x, y) {
  //  ctx.fillStyle = '#ff9b2b';
  //  ctx.fillRect(x, y, cellSize, cellSize);
  //}
  //
  //function drawDark(x, y) {
  //  ctx.fillStyle = '#906e00';
  //  ctx.fillRect(x, y, cellSize, cellSize);
  //}

  //context.beginPath();
  //context.moveTo(0, 0);
  //context.lineTo(cellSize, 0);
  //context.lineTo(cellSize, cellSize);
  //context.lineTo(0, cellSize);
  //context.closePath();

  context.fillStyle = '#fd9b30';
  //context.fill();

  context.lineWidth = 5;
  //context.strokeStyle = 'red';
  //context.stroke();

  //context.restore();
}

document.addEventListener("DOMContentLoaded", function () {
  drawArea();
  drawTank();
});





