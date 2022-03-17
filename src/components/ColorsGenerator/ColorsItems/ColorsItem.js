import React from 'react';
import './ColorsItem.css';

const ColorsItem = ( { box: { color, size }, removeBox, index } ) => {

  const remove = () => {
    removeBox(index);
  };

  return (
    <div className="box" style={{background: `${color}`, width: `${size}px`, height: `${size}px`}}>
      <button className="delete" type="button" onClick={remove}> X </button>
    </div>
  );
}

export default ColorsItem;