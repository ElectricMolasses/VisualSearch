import React, { useState } from 'react';
import './Slider.css';

function Slider(props) {
  const [value, setValue] = useState(props.value);

  return (
    <input type="range" 
      min={props.min} 
      max={props.max}
      defaultValue={value}
      onChange={(e) => {
          props.onChange(e.target.value);
          setValue(e.target.value);
        }
      }
    >
    </input>
  );
}

export default Slider;