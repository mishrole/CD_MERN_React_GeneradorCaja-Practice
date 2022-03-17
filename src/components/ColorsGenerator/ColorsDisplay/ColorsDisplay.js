import React from 'react';
import ColorsItem from '../ColorsItems/ColorsItem';
import './ColorsDisplay.css';

const ColorsDisplay = ( { boxList, removeBox } ) => {
  return (
    <div className="d-flex flex-wrap">
      {
        boxList.map((box, index) => {
          return (
            <ColorsItem key={index} box={box} removeBox={removeBox} index={index} />
          )
        })
      }
    </div>
  );
}

export default ColorsDisplay;