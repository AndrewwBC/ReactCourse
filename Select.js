import React from 'react';

const select = ({ options, value, setValue, ...rest }) => {
  return (
    <select
      value={value}
      onChange={({ target }) => setValue(target.value)}
      {...rest}
    >
      <option value="" disabled>
        Selecione
      </option>
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default select;
