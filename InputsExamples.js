import './App.css';
import React from 'react';

function App() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const Inputs = [
    { input: 'nome', tipo: 'text', label: 'Nome' },
    { input: 'email', tipo: 'email', label: 'Email' },
    { input: 'senha', tipo: 'password', label: 'Senha' },
    { input: 'cep', tipo: 'text', label: 'CEP' },
    { input: 'rua', tipo: 'text', label: 'Rua' },
    { input: 'numero', tipo: 'text', label: 'Número' },
    { input: 'bairro', tipo: 'text', label: 'Bairro' },
    { input: 'cidade', tipo: 'text', label: 'Cidade' },
    { input: 'estado', tipo: 'text', label: 'Estado' },
  ];

  function handleSubmit(event) {
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },

      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }

  const [response, setResponse] = React.useState('');
  const [textArea, setTextArea] = React.useState('');
  const [select, setSelect] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [termos, setTermos] = React.useState(false);
  const [cores, setCores] = React.useState([]);

  function handleMultiplos({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  function radioChange({ target }) {
    setProduto(target.value);
  }

  return (
    <>
      <form method="POST" onSubmit={handleSubmit}>
        {Inputs.map(({ input, tipo, label }) => (
          <div>
            <label htmlFor={input}>{label}</label>
            <input
              type={tipo}
              id={input}
              value={form[input]}
              onChange={handleChange}
            />
          </div>
        ))}

        <textarea
          name=""
          id=""
          value={textArea}
          onChange={({ target }) => setTextArea(target.value)}
          rows="5"
        />

        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          id="produtos"
        >
          <option disabled>Selecione</option>
          <option value="notebook">Notebook</option>
          <option value="smartphone">Smartphone</option>
          <option value="tablet">Tablet</option>
        </select>

        <label>
          <input
            type="radio"
            onChange={radioChange}
            name="produto"
            value="smartphone"
          />
          Smartphone
        </label>
        <label>
          <input
            type="radio"
            onChange={radioChange}
            name="produto"
            value="notebook"
          />
          Notebook
        </label>
        <label>
          <input
            type="radio"
            onChange={radioChange}
            name="produto"
            value="tablet"
          />
          Tablet
        </label>
        {produto}
        <label>
          <input
            type="checkbox"
            value="Termos"
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceito os termos.
        </label>

        <label>
          <input
            type="checkbox"
            value="azul"
            checked={cores.includes('azul')}
            onChange={handleMultiplos}
          />
          Azul
        </label>
        <label>
          <input
            type="checkbox"
            value="vermelho"
            checked={cores.includes('vermelho')}
            onChange={handleMultiplos}
          />
          Vermelho
        </label>

        {response && response.ok && <p>Formulário Enviado</p>}
        <button>Enviar</button>
      </form>
    </>
  );
}

export default App;
