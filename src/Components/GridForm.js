import React from 'react';
import './GridForm.css';
import Slider from './Slider.js';

function GridForm(props) {
  return (
    <form>
      <Slider 
        min="2"
        max="20"
        value={props.getDimensions}
        onChange={props.updateDimensions}
      />
    </form>
  );
}

export default GridForm;