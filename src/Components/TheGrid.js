import React from 'react';
import './TheGrid.css';
import GridItem from './GridItem';

function TheGrid(props) {
  
  function generateGrid() {
    const gridItems = [];
    const root = document.documentElement;
    
    root.style.setProperty('--rowNum', props.dimensions);
    root.style.setProperty('--colNum', props.dimensions);
    for (let i = 0; i < props.dimensions * props.dimensions; i++) {
      gridItems.push(<GridItem id={i} key={i}/>);
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