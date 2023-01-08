import React from 'react';

const Checkbox = ({ options, value, setValue }) => {
  function handleChecked({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((item) => item !== target.value));
    }
  }

  return (
    <>
      {options.map((option) => (
        <label key={option}>
          <input
            type="checkbox"
            value={option}
            checked={value.includes(option)}
            onChange={handleChecked}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default Checkbox;
