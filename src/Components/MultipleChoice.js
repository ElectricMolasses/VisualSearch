import React, { useState } from 'react';
import './MultipleChoice.css';
import Option from './Option.js';

export default function MultipleChoice({options}) {
  let [current, setCurrent] = useState(0);


  
  return (
    <div className="MultipleChoice">
      {options.map( (option, i) => {
        return <Option 
          name={option.name} 
          onClick={() => {
            option.onClick();
            setCurrent(i);
          }}
          id={i}
          selected={current === i}
        />
      })}
    </div>
  )
}