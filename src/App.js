import React from 'react';
import Produto from './Produto';

// Need to fix render of Produto

const App = () => {
  const [active, setActive] = React.useState(false);
  const getStorage = localStorage.getItem('produto');

  React.useEffect(() => {
    if (getStorage !== null) {
      setActive(getStorage);
    }
  }, []);

  React.useEffect(() => {
    if (active !== false) localStorage.setItem('produto', active);
  }, [active]);

  function handleClick({ target }) {
    setActive(target.innerText);
  }

  return (
    <>
      <h1>Preferencias: {active}</h1>
      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>
      <Produto produto={active} />
    </>
  );
};
export default App;
