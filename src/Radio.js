import React from 'react';

const Radio = ({ options, id, value, setValue, ...rest }) => {
  function handleChecked({ target }) {
    if (target.checked) {
      setValue(target.value);
    }
  }

  return (
    <>
      {options.map((item) => (
        <label>
          {item}
          <input type="radio" name={id} value={item} onChange={handleChecked} />
        </label>
      ))}
    </>
  );
};

export default Radio;
