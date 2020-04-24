import React, { useState } from 'react';
import './GridItem.css';

function GridItem({ id, onClick, state }) {
  const [cellState, setCellState] = useState("EMPTY");

  const stateClass = {
    0: "OBSTACLE",
    1: "START",
    2: "END"
  };

  function toggleState() {
    const targElem = document.getElementById(id);
    switch (cellState) {
      case 'EMPTY':
        targElem.classList.add("selected");
        setCellState("OBSTACLE");
        break;
      case 'OBSTACLE':
        targElem.classList.remove("selected");
        setCellState("EMPTY");
        break;
      default:
    }
  }

  return (
    <div className="grid-item"
      onClick={() => {
          onClick()
          toggleState()
        }
      }
      id={id}>
    </div>
  );
}

export default GridItem;