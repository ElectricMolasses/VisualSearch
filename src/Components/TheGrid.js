import React, { useState } from 'react';
import './TheGrid.css';
import GridItem from './GridItem';

function TheGrid({ dimensions, mode }) {
  const [theGrid, changeTheGrid] = useState(
    []
  );

  // Still need to maintain location of obstacles
  //  and such when resizing.
  // Find the row everything is on, find the offset
  //  from the left, and move it back to that row with
  //  that offset.
  // For now, if the cell is removed due to shrinking,
  //  just forget that obstacle.

  // Here's an idea.  Why even store it in an array that
  //  represents the grid.
  // Why not just have an array containing arrays for every
  //  row, and that rows array contains all the index's
  //  at which something exists.  Probably key value
  //  pairs.  We'll probably have to track the
  //  start and end location in meta, since we're not
  //  allowed to duplicate those.

  function modifyGrid(x, y, type) {
    let newGrid = theGrid.slice();
    if (newGrid[x] === undefined) {
      newGrid[x] = {};
    }
    if (newGrid[x][y] === type) {
      newGrid[x][y] = null;
    } else {
      newGrid[x][y] = type;
    }
    changeTheGrid(newGrid);
  }
  
  function generateGrid() {
    const gridItems = [];
    const root = document.documentElement;

    root.style.setProperty('--rowNum', dimensions);
    root.style.setProperty('--colNum', dimensions);

    for (let i = 0; i < dimensions * dimensions; i++) {
      //  Need to check to see whether or not the cell
      //  has a state aside from null here.
      let gridState = null;
      let currentX = i % dimensions;
      let currentY = Math.floor(i / dimensions);
      console.log(theGrid[currentX]);
      if (theGrid[currentX] && 
          Number.isInteger(theGrid[currentX][currentY])) {
        gridState = theGrid[currentX][currentY];
      }
      gridItems.push(
        <GridItem 
          id={i} 
          key={i}
          onClick={() => {
            modifyGrid(currentX, currentY, mode)
          }}
          state={gridState}
        />
      );
    }
    return gridItems;
  }

  /*
    Need a function that ties to the run button, that'll process current grid state,
      pass it to the search algorithm being used, and respond to that algorithms output
      on a tick rate to show the algorithm solving the maze.
  */
  
  const gridItems = generateGrid();

  return (
    <div className="theGrid">
      {gridItems}
    </div>
  );
}

export default TheGrid;