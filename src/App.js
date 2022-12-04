import React from 'react';
//import Produto from './Produto';

const App = () => {
  //
  //const [state, setState] = React.useState(false);
  //   const [data, setData] = React.useState(null);
  //   React.useEffect(() => {
  //     fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then(
  //       (response) => response.json().then((json) => setData(json)),
  //     );
  //   }, []);
  //   return (
  //     <>
  //       <button onClick={() => setState(!state)}>
  //         {state ? 'Abra' : 'Feche'}
  //       </button>
  //       <div>
  //         {data && (
  //           <div>
  //             <h1>{data.nome}</h1>
  //             <p>{data.preco}</p>
  //           </div>
  //         )}
  //       </div>
  //     </>
  //   );

  const [data, setData] = React.useState(null);
  const [notebook, setNotebook] = React.useState(false);
  const [smartphone, setSmartphone] = React.useState(false);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook').then(
      (response) => response.json().then((json) => setData(json)),
    );
  }, [notebook]);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/smartphone').then(
      (response) => response.json().then((json) => setData(json)),
    );
  }, [smartphone]);

  window.localStorage.setItem('produto', `${data && data.nome}`);

  console.log();
  return (
    <>
      <h2>Preferência:{data && data.nome}</h2>
      <div style={{ display: 'flex', gap: '24px' }}>
        <button onClick={() => setNotebook(!notebook)}>Notebook</button>
        <button onClick={() => setSmartphone(!smartphone)}>Smartphone</button>
      </div>
      <h1>{data && data.nome}</h1>
      <p>R$ {data && data.preco}</p>
    </>
  );
};
export default App;
