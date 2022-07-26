import React from 'react';
import { useField } from 'formik';

const CustInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='col'>
      <label htmlFor={props.name} className='form-label mt-3'>
        {label}
      </label>
      <div className='input-group mb-3'>
        <input
          id={props.name}
          className={`form-control rounded ${
            meta.touched && meta.error && 'is-invalid'
          }`}
          {...field}
          {...props}
        />
        <div className='invalid-feedback'>{meta.touched && meta.error}</div>
      </div>
    </div>
  );
};

export default CustInput;
