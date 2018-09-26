import React from 'react';

// fixing error parts
export default ({ input, label, error }) => {
  return (
    <div>
      <label> {label} </label>
      <input {...input} style={{marginBottom: '5px'}} />
      <div className="red-text" style={{marginBottom: '5px'}}>
      {error}
      </div>
    </div>
  );
};
