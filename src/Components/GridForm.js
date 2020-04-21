import React from 'react';
import './GridForm.css';
import Slider from './Slider.js';
import Submit from './Submit.js';

function GridForm(props) {
  return (
    <form>
      <Slider 
        min="2"
        max="20"
        value={props.getDimensions}
        onChange={props.updateDimensions}
      />
      <Submit
        name="Run"
      />
    </form>
  );
}

export default GridForm;