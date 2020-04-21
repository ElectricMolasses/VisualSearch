import React, { useState } from 'react';
import './GridContainer.css';
import TheGrid from './TheGrid.js';
import GridForm from './GridForm.js';

function GridContainer() {
  const [getDimensions, setDimensions] = useState(5);

  function updateDimensions(newDimension) {
    setDimensions(newDimension);
  }

  return (
    <div id="GridContainer">
      <GridForm 
        getDimensions={getDimensions}
        updateDimensions={updateDimensions}
      />
      <TheGrid
        dimensions={getDimensions}
      />
    </div>
  );
}

export default GridContainer;