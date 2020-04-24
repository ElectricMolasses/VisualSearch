import React, { useState, useEffect } from 'react';
import './TheGrid.css';
import GridItem from './GridItem';

function TheGrid({ dimensions, mode }) {
  const [theGrid, changeTheGrid] = useState(
    () => {
      // Just for fun.  Probably better to just use
      //  a for loop.
      let arr = [];
      arr.length = (dimensions * dimensions);
      arr.fill(0);
      return arr;
    }
  );

  useEffect(() => {
    const newGrid = theGrid.slice();
    newGrid.length = dimensions * dimensions;
    for (let i = 0; i < dimensions * dimensions; i++) {
      // Comparing strict equals to undefined or
      //  null was not working, so comparing typeof
      //  instead.
      if (typeof newGrid[i] === 'undefined') {
        newGrid[i] = 0;
      }
    }
    // Still need to maintain location of obstacles
    //  and such when resizing.
    // Find the row everything is on, find the offset
    //  from the left, and move it back to that row with
    //  that offset.
    // For now, if the cell is removed due to shrinking,
    //  just forget that obstacle.
    changeTheGrid(newGrid);
  }, [dimensions]);

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