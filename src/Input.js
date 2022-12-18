import React from 'react';

const Input = ({ label, cep, setCep, ...props }) => {
  return <input value={cep} {...props} />;
};

export default Input;
