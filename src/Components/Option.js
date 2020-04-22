import React from 'react';
import './Option.css';

export default function Option({ 
  name, onClick, selected }) {
  let className = "option";
  if (selected) {
    className += " green";
  }

  return (
    <label className={className}
      onClick={onClick}>
      {name}
    </label>
  );
}