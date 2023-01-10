import React from 'react';

const Input = ({
  id,
  label,
  value,
  type,
  onChange,
  error,
  onBlur,
  placeholder,
}) => {
  return (
    <>
      <label>
        {label}
        <input
          type={type}
          id={id}
          name={id}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          placeholder={placeholder}
        />
      </label>
      {error && <p>{error}</p>}
    </>
  );
};

export default Input;
