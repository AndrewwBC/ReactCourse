import React from 'react';

const Input = ({ id, label, value, onChange, ...rest }) => {
  return (
    <>
      {/*setValue está enviando as setagens dos estados.*/}
      <label>
        {label}
        <input
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          {...rest}
        />
      </label>
    </>
  );
};

export default Input;
