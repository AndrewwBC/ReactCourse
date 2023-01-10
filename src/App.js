import React from 'react';
import Input from './Input';
import useForm from './Hooks/useForm';

// const perguntas = [
//   {
//     pergunta: 'Qual método é utilizado para criar componentes?',
//     options: [
//       'React.makeComponent()',
//       'React.createComponent()',
//       'React.createElement()',
//     ],
//     resposta: 'React.createElement()',
//     id: 'p1',
//   },
//   {
//     pergunta: 'Como importamos um componente externo?',
//     options: [
//       'import Component from "./Component"',
//       'require("./Component")',
//       'import "./Component"',
//     ],
//     resposta: 'import Component from "./Component"',
//     id: 'p2',
//   },
//   {
//     pergunta: 'Qual hook não é nativo?',
//     options: ['useEffect()', 'useFetch()', 'useCallback()'],
//     resposta: 'useFetch()',
//     id: 'p3',
//   },
//   {
//     pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
//     options: ['set', 'get', 'use'],
//     resposta: 'use',
//     id: 'p4',
//   },
// ];

// const App = () => {
//   const [check, setCheck] = React.useState('');
//   return (
//     <>
//       <form>
//         {perguntas.map(({ pergunta, options, id }) => (
//           <>
//             <Title value={pergunta} />
//             <Radio
//               options={options}
//               id={id}
//               value={check}
//               setValue={setCheck}
//             />
//           </>
//         ))}
//       </form>
//     </>
//   );
// };

const App = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm('');

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="nome"
        id="nome"
        type="text"
        placeholder="Seu nome"
        {...nome}
      />
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <Input
        label="email"
        id="email"
        type="text"
        placeholder="E-mail"
        {...email}
      />
      <button>Enviar</button>
    </form>
  );
};
export default App;
