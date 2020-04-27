/*
  A* search allowing diagonal movement.
*/

function AStar(gridSize, objects) {
  const record = [];

  const pendingQueue = new Set();
  const closedQueue = new Set();
  const goal = findEnd(objects);
  const start = findStart(objects);

  // Start is added straight to the closed queue for
  //  the sole purpose of not adding it to record.
  //  The colour should not change on the visual
  //  grid, and record is effectively used as animation
  //  frames.  This could be handled in the Grid class
  //  as well, and probably should be.  Noted for potential
  //  change.
  closedQueue.add(start);
  pendingQueue.add(...getSurroundingCells(
    start, gridSize, objects
  ))
  
  while (true) {
    for (let cell of pendingQueue) {
      cell.d = calculateDistance(cell, goal);
      if (cell.d === 0) {
        return record;
      }
    }
  }
}

function getSurroundingCells(cell, gridSize, objects) {
  const surroundingCells = new Set();

  for (let x = cell.x - 1; x <= cell.x + 1; x++) {
    for (let y = cell.y - 1; y <= cell.y + 1; y++) {
      if (
        (x !== cell.x || y !== cell.y) &&
        (x >= 0 && y >= 0) &&
        (x < gridSize && y < gridSize) &&
        objects[x][y]
      ) {
        surroundingCells.add(generateCell(
          x, y, objects[x][y], cell
        ));
      }
    }
  }

  return surroundingCells;
}

function findStart(objects) {
  for (let x in objects) {
    for (let y in objects) {
      if (objects[x][y] === 1) {
        let start = generateCell(x, y, 1);
        calculateDistance(start, start);
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

function generateCell(x, y, t, parent, distance) {
  return {
    x: x,
    y: y,
    t: t,
    d: (distance || null),
    parent: (parent || null)
  }
}

function calculateDistance(cell, goal) {
  return (
    Math.max(
      Math.abs(cell.x - goal.x),
      Math.abs(cell.y - goal.y)
    )
  );
}