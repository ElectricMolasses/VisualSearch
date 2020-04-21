import React from 'react';
import './Submit.css';

function Submit(props) {

  return (
    <input type="submit"
      onClick={(e) => {
          e.preventDefault()
          props.run();
        }
      }
    >{props.text}</input>
  );
}

export default Submit;