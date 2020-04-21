import React from 'react';
import './RadioButton.css';

function RadioButton(props) {

  if (props.default) {
    return (
      <label>
        <input type="radio" 
          id={props.name}
          name={props.category}
          value={props.name}
          defaultChecked // Need to find a better way to handle this
        ></input>
        {props.name}
      </label>
    );
  }
  return (
    <label>
      <input type="radio" 
        id={props.name}
        name={props.category}
        value={props.name}
      ></input>
      {props.name}
    </label>
  );
}

export default RadioButton;