import React from 'react';

// export input field
export default ({ input, label, meta: {touched, error} }) => {
  return (
    <div>
      <label> {label} </label>
      <input {...input} style={{marginBottom: '5px'}} />
      <div>
      {touched && error}
      </div>
    </div>
  );
};
