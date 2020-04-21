import React, { useState } from 'react';
import './GridContainer.css';
import TheGrid from './TheGrid.js';
import GridForm from './GridForm.js';

function GridContainer() {
  const [getDimensions, setDimensions] = useState(5);
  const [getMode, setMode] = useState("AHH");

  function updateDimensions(newDimension) {
    setDimensions(newDimension);
  }

  return (
    <div id="GridContainer">
      <p>{getMode}</p>
      <GridForm 
        getDimensions={getDimensions}
        updateDimensions={updateDimensions}
        getMode={getMode}
        setMode={setMode}
      />
      <TheGrid
        dimensions={getDimensions}
      />
    </div>
  );
}

export default GridContainer;