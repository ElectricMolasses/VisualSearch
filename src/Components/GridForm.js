import React from 'react';
import './GridForm.css';
import Slider from './Slider.js';
import Submit from './Submit.js';
import RadioButton from './RadioButton.js';

function GridForm(props) {
  return (
    <form>
      <Slider 
        min="2"
        max="20"
        value={props.getDimensions}
        onChange={props.updateDimensions}
      />
      <RadioButton 
        name="Obstacle"
        category="GridClick"
        value="OBSTACLE"
        default={true}
        onClick={() => props.setMode("OBSTACLE")}
      />
      <RadioButton 
        name="Start"
        category="GridClick"
        value="START"
        onClick={() => props.setMode("START")}
      />
      <Submit
        name="Run"
        run={() => undefined}  //Run search
      />
    </form>
  );
}

export default GridForm;