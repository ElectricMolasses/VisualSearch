import React from 'react';
import './GridItem.css';

function GridItem({ id, onClick, state }) {

  const stateClass = {
    0: "obstacle",
    1: "start",
    2: "finish"
  };

  return (
    <div className={"grid-item " + stateClass[state]}
      onClick={() => {
          onClick()
        }
      }
      id={id}>
    </div>
  );
}

export default GridItem;