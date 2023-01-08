import React from 'react';
import Input from './Input';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './Checkbox';
import Validar from './Validar';

const App = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('Vermelho');
  const [check, setCheck] = React.useState([]);
  const [termos, setTermos] = React.useState('');

  if (termos.length > 0) alert('Aceito');
  return (
    <>
      <form action="">
        <Radio options={['Azul', 'Vermelho']} value={cor} setValue={setCor} />
        <Checkbox
          options={['Li e aceito os termos']}
          value={termos}
          setValue={setTermos}
        />
        <Checkbox
          options={['HTML', 'CSS', 'JavaScript']}
          value={check}
          setValue={setCheck}
        />
        <Select
          options={['smartphone', 'tablet']}
          value={produto}
          setValue={setProduto}
        />
        <Input
          id="nome"
          label="Nome"
          value={nome}
          setValue={setNome}
          required
        />
        <Input
          id="email"
          label="Email"
          value={email}
          setValue={setEmail}
          required
        />
        <Validar />
        <button>Enviar</button>
      </form>
    </>
  );
};

export default App;
