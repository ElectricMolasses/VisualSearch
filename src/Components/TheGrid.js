import React, { useState } from 'react';
import './TheGrid.css';
import GridItem from './GridItem';

function TheGrid({ dimensions, mode,
  isRunning, searchComplete }) {
  // theGrid isn't actually a grid.
  //  It's an array containing objects on indexes
  //  that represent the rows, with key-value pairs
  //  for y-coord/cellState.
  const [theGrid, changeTheGrid] = useState(
    []
  );
  // Track start/end to avoid duplicates when placing.
  // We do not need to send these to the search alg,
  //  they already exist in theGrid.
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  function startSearch() {
    // someSearchAlg(theGrid);
  }
  // These functions are reinstantiated each "Frame"
  //  I think.  Should I move them outside?
  function modifyGrid(x, y, type) {
    // Do not allow changes while search is running.
    if (isRunning) return;
    
    let newGrid = theGrid.slice();
    if (newGrid[x] === undefined) {
      newGrid[x] = {};
    }
    if (newGrid[x][y] === type) {
      newGrid[x][y] = null;
      if (type === 1) {
        setStart(null);
      }
      if (type === 2) {
        setEnd(null);
      }
    } else {
      newGrid[x][y] = type;
      if (type === 1) {
        // Remove old start location and
        //  set new one.
        if (start) {
          newGrid[start.x][start.y] = null;
        }
        setStart({x: x, y: y});
      }
      if (type === 2) {
        // Remove old end location and
        //  set new one.
        if (end) {
          newGrid[end.x][end.y] = null;
        }
        setEnd({x: x, y: y});
      }
    }
    changeTheGrid(newGrid);
  }
  
  // This function could really be split apart
  //  a little and tidied up.
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
    Need a function that ties to the run button, that'll 
      process current grid state,
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