import React from 'react';

const Produto = ({ data }) => {
  return (
    <>
      <h1>{data && data.nome}</h1>
      <p>R$ {data && data.preco}</p>
    </>
  );
};

export default Produto;
