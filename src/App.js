import React from 'react';
import useLocalStorage from './useLocalStorage';
import useFecth from './useFecth';

const App = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');
  const { request, data, loading, error } = useFecth();

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/',
      );
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <div>Carregando...</div>;
  if (data)
    return (
      <>
        <p>Produto preferido: {produto}</p>
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>

        {data.map((item) => (
          <div key={item.id}>
            <h1>{item.nome}</h1>
          </div>
        ))}
      </>
    );
  else return null;
};
export default App;
