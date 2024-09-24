import { useAppContext } from "AppContext";
import { useState } from "react";
import "./CadastroMedico.css";

function CadastroMedico() {
  const { medicos, setMedicos } = useAppContext();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setMedicos([...medicos, { nome, email, senha }]);
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className="container">
      <h2>Cadastrar Médico</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do médico"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail do médico"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha do médico"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastroMedico;
