import React, { useState } from 'react';
import './GridItem.css';

function GridItem(props) {
  const {id} = props;
  const [cellState, setCellState] = useState("EMPTY");

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
      onClick={toggleState}
      id={id}>
    </div>
  );
}

export default GridItem; 