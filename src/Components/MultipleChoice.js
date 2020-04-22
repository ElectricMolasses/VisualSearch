import React, { useState } from 'react';
import './MultipleChoice.css';
import Option from './Option.js';

export default function MultipleChoice({
  options, onClick}) {
  let [getCurrent, setCurrent] = useState(0);

  return (
    <div className="MultipleChoice">
      {options.map( (option, i) => {
        return <Option 
          name={option.name} 
          onClick={() => {
            setCurrent(i);
            onClick(i);
          }}
          id={i}
          selected={getCurrent === i}
        />
      })}
    </div>
  )
}