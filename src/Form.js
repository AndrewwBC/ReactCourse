import React from 'react';

const formFields = [
  {
    id: 'nome',
    label: 'Nome',
    type: 'Text',
  },
  {
    id: 'email',
    label: 'Email',
    type: 'Text',
  },
  {
    id: 'senha',
    label: 'Senha',
    type: 'password',
  },

  {
    id: 'cep',
    label: 'Cep',
    type: 'text',
  },

  {
    id: 'numero',
    label: 'Numero',
    type: 'text',
  },

  {
    id: 'rua',
    label: 'Rua',
    type: 'text',
  },

  {
    id: 'bairro',
    label: 'Bairro',
    type: 'text',
  },

  {
    id: 'cidade',
    label: 'Cidade',
    type: 'text',
  },

  {
    id: 'estado',
    label: 'Estado',
    type: 'text',
  },
];

const Form = () => {
  const [mensagem, setMensagem] = React.useState('');
  const [form, setForm] = React.useState(
    formFields.reduce((acc, field) => {
      return {
        ...acc,
        [field.id]: '',
      };
    }, {}),
  );
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    }).then((response) => setResponse(response));
  }

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map(({ id, label, type }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input id={id} type={type} value={form[id]} onChange={handleChange} />
        </div>
      ))}
      {response && response.ok && <p>Formulário enviado</p>}
      <br />
      <textarea
        id="mensagem"
        value={mensagem}
        rows="5"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <p>{mensagem}</p>
      <button>Enviar</button>
    </form>
  );
};

export default Form;
