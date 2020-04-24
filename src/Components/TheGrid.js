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

  const clickFunc = {
    0: mode => {
      // We could use function currying.
      changeTheGrid(theGrid)
      return "obstacle";
    },
    1: mode => {
      return "start";
    },
    2: mode => {
      return "end";
    }
  }
  
  function generateGrid() {
    const gridItems = [];
    const root = document.documentElement;

    root.style.setProperty('--rowNum', dimensions);
    root.style.setProperty('--colNum', dimensions);
    for (let i = 0; i < dimensions * dimensions; i++) {
      
      gridItems.push(
        <GridItem 
          id={i} 
          key={i}
          onClick={clickFunc[mode]}
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