function AStar(gridSize, objects) {
  const pendingQueue = new Set();
  const closedQueue = new Set();


}

function getSurroundingCells(x, y, gridSize, objects) {
  const surroundingCells = new Set();

  for (let i = x - 1; i <= x + 1; i++) {
    for (let j = y - 1; j <= y + 1; j++) {
      if (
        (i !== x || j !== y) &&
        (i >= 0 && j >= 0) &&
        (i < gridSize && j < gridSize) &&
        objects[i][j]
      ) {
        surroundingCells.add(generateCell(i, j, objects[i][j]));
      }
    }
  }

  return surroundingCells;
}

function findStart(objects) {
  for (let x in objects) {
    for (let y in objects) {
      if (objects[x][y] === 1) {
        return generateCell(x, y, 1);
      }
    }
  }
}

function findEnd(objects) {
  for (let x in objects) {
    for (let y in objects) {
      if (objects[x][y] === 2) {
        return generateCell(x, y, 2);
      }
    }
  }
}

function generateCell(x, y, t) {

}