import React, { useState } from 'react';
import './ColorsForm.css';

const ColorsForm = ( { onNewBox } ) => {
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNewBox({
      color: color,
      size: size
    });
    //  Clear Input
    setColor('');
    setSize('');
  };

  return (
    <form className="container mx-auto" onSubmit={ handleSubmit }>
      <div className="row align-items-center justify-content-center">
        <div className="col-4">
          <label className="form-label">Color</label>
          <input type="text" name="color" placeholder="rebeccapurple by default" className="form-control" onChange={ (e) => setColor(e.target.value) } value={color}/>
        </div>
        <div className="col-4">
          <label className="form-label">Size</label>
          <input type="text" name="size" placeholder="40 by default" className="form-control" onChange={ (e) => setSize(e.target.value) } value={size}/>
        </div>
        <div className="col-2 align-self-end">
          <button className="btn btn-primary" type="submit">Add</button>
        </div>
      </div>
    </form>
  )
}

export default ColorsForm;
