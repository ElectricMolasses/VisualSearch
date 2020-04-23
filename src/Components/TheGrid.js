import React from 'react';
import './TheGrid.css';
import GridItem from './GridItem';

function TheGrid({ dimensions, mode }) {
  function placeStart() {

  }

  function placeEnd() {

  }

  function placeObstacle() {

  }

  const clickFunc = {
    0: placeObstacle,
    1: placeStart,
    2: placeEnd
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