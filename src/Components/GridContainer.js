import React, { useState } from 'react';
import './GridContainer.css';
import TheGrid from './TheGrid.js';
import GridForm from './GridForm.js';

function GridContainer() {
  const [getDimensions, setDimensions] = useState(5);
  const [getMode, setMode] = useState(0);
  const [isRunning, setRunning] = useState(false);

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
        startSearch={() => setRunning(true)}
        isRunning={isRunning}
      />
      <TheGrid
        dimensions={getDimensions}
        mode={getMode}
        isRunning={isRunning}
        searchComplete={() => setRunning(false)}
      />
    </div>
  );
}

export default GridContainer;