import React from 'react';

const App = () => {
  const [cores, setCores] = React.useState([]);
  const coresArray = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

  function handleChange({ target }) {
    const { checked, value } = target;
    if (checked) {
      setCores([...cores, value]);
    } else {
      setCores(cores.filter((item) => item !== value));
    }
  }
  function handleChecked(cor) {
    return cores.includes(cor);
  }

  return (
    <>
      {coresArray.map((item) => (
        <label
          key={item}
          style={{
            display: 'block',
            textTransform: 'capitalize',
            textAlign: 'center',
          }}
        >
          {item}
          <input
            type="checkbox"
            name={item}
            value={item}
            checked={handleChecked(item)}
            onChange={handleChange}
          />
        </label>
      ))}
    </>
  );
};

export default App;
