import React from 'react';
import Input from './Input';

const App = () => {
  const [cep, setCep] = React.useState('');

  function handleBlur({ target }) {
    const regex = /^\d{5}-?\d{3}$/;
    const validacao = regex.test(target.value);
    console.log(validacao);
  }

  return (
    <>
      <form action="">
        <Input
          label="CEP"
          id="cep"
          type="text"
          placeholder="00000-000"
          value={cep}
          setValue={setCep}
          onBlur={handleBlur}
        />
      </form>
      <h1>{cep}</h1>
    </>
  );
};
export default App;
