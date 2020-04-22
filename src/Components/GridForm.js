import React from 'react';
import './GridForm.css';
import Slider from './Slider.js';
import Submit from './Submit.js';
import MultipleChoice from './MultipleChoice';

function GridForm(props) {
  return (
    <form>
      <Slider 
        min="2"
        max="20"
        value={props.getDimensions}
        onChange={props.updateDimensions}
      />
      <MultipleChoice
        options={[{
          name: "option1",
          onClick: () => alert("HEY"),
        }, {
          name: "option2",
          onClick: () => 1
        }]}
      />
      <Submit
        name="Run"
        run={() => undefined}  //Run search
      />
    </form>
  );
}

export default GridForm;