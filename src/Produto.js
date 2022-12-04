import React from 'react';

const Produto = ({ produto }) => {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [produto]);

  if (data === null) return null;

  return (
    <>
      <h1>{data && data.nome}</h1>
      <p>R$ {data && data.preco}</p>
    </>
  );
};

export default Produto;
