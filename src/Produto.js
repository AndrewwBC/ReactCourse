import React from 'react';
import { GlobalContext } from './GlobalContext';

const Produto = () => {
  const global = React.useContext(GlobalContext);

  if (global.dados === null) return null;

  return (
    <div>
      Produto:
      {global.dados.map((item) => (
        <li key={item.id}>{item.nome}</li>
      ))}
    </div>
  );
};

export default Produto;
