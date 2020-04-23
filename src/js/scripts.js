//= partials/helper.js
let cellSizeBase = 32;

let yPos = cellSizeBase * 13 +  cellSizeBase / 2;
let xPos = cellSizeBase * 5;
let step = 1;
let minYPos = cellSizeBase;

let interval = 20;
let intervalID = setInterval(drawTank, interval);

function drawArea() {
  var example = document.getElementById("map"),
    ctx = example.getContext('2d'),
    cellSize = cellSizeBase,
    map = [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
  example.height = 16 * cellSize;
  example.width = 16 * cellSize;
  ctx.fillStyle = '#ccc';
  ctx.fillRect(0, 0, example.width, example.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(cellSize, cellSize, 13 * cellSize, 432);
  for (let i = 0; i < 27; i++) {
    for (let j = 0; j < 28; j++) {
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
  let cellSizeTank = cellSizeBase / 32;
  canvas.height = 32 * 16 * cellSizeTank;
  canvas.width = 32 * 16 * cellSizeTank;
  let tankContext = canvas.getContext('2d');

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
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0]
  ];

  for (let j = 0; j < 26; j++) {
    for (let i = 0; i < 28; i++) {
      switch (tank[j][i]) {

        case 1:
          drawElem(i * cellSizeTank + xPos + 2, j * cellSizeTank + cellSizeTank + yPos, '#fde6a0');
          break;

        case 2:
          drawElem(i * cellSizeTank + xPos + 2, j * cellSizeTank + cellSizeTank + yPos, '#ff9f31');
          break;

        case 3:
          drawElem(i * cellSizeTank + xPos + 2, j * cellSizeTank + cellSizeTank + yPos, '#906e02');
          break;

      }

    }
  }

  yPos -= step;
  if (yPos < minYPos) {
    clearInterval(intervalID);
  }


  function drawElem(x, y, color) {
    tankContext.fillStyle = color;
    tankContext.fillRect(x, y, cellSizeTank, cellSizeTank);

  }

  tankContext.fillStyle = '#fd9b30';

}

function drawTankBig() {
  let canvasBig = document.getElementById('tankBig');
  let cellSizeBigTank = cellSizeBase / 4;
  canvasBig.height = 28 * cellSizeBigTank;
  canvasBig.width = 28 * cellSizeBigTank;
  let bigTankContext = canvasBig.getContext('2d');
  let tankBig = [
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
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 1, 1, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 3, 3, 3, 3, 3, 3, 0, 0, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 3, 3, 3, 3, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0],
    [0, 2, 2, 2, 2, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 1, 1, 0]
  ];

  for (let j = 0; j < 26; j++) {
    for (let i = 0; i < 28; i++) {

      switch (tankBig[j][i]) {

        case 1:
          drawElem(i * cellSizeBigTank, j * cellSizeBigTank + cellSizeBigTank, '#fde6a0');
          break;

        case 2:
          drawElem(i * cellSizeBigTank, j * cellSizeBigTank + cellSizeBigTank, '#ff9f31');
          break;

        case 3:
          drawElem(i * cellSizeBigTank, j * cellSizeBigTank + cellSizeBigTank, '#906e02');
          break;

      }

    }
  }

  function drawElem(x, y, color) {
    bigTankContext.fillStyle = color;
    bigTankContext.fillRect(x, y, cellSizeBigTank, cellSizeBigTank);

  }

}

document.addEventListener("DOMContentLoaded", function () {
  drawArea();
  //drawTank();
  drawTankBig();
});





