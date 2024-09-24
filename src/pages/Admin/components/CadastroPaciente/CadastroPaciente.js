import { useAppContext } from "AppContext";
import { useState } from "react";
import "./CadastroPaciente.css";

export function CadastroPaciente() {
  const { pacientes, setPacientes } = useAppContext();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setPacientes([...pacientes, { nome, email, senha }]);
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <div className="container">
      <h2>Cadastrar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome do paciente"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail do paciente"
          required
        />
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Senha do paciente"
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}
