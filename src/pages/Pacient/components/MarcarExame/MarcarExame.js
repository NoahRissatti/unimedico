import { useAppContext } from 'AppContext';
import React, { useState } from 'react';
import '../../Pacient.css';

function MarcarExame() {
  const { setExames } = useAppContext();
  const [procedimento, setProcedimento] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [nomePaciente, setNomePaciente] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (procedimento && dataHora && nomePaciente) {
      setExames(prevExames => [
        ...prevExames,
        { nomePaciente, procedimento, dataHora }
      ]);
      setProcedimento('');
      setDataHora('');
      setNomePaciente('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      <h2>Marcar Exame</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            id="nome"
            value={nomePaciente}
            onChange={(e) => setNomePaciente(e.target.value)}
            placeholder="Seu nome"
            required
          />
        </div>
        <div>
          <label htmlFor="medico">Informe o Procedimento:</label>
          <input
            type="text"
            id="procedimento"
            value={procedimento}
            onChange={(e) => setProcedimento(e.target.value)}
            placeholder="Procedimento"
            required
          />
        </div>
        <div>
          <label htmlFor="dataHora">Selecione a Data e Horário:</label>
          <input
            type="datetime-local"
            id="dataHora"
            value={dataHora}
            onChange={(e) => setDataHora(e.target.value)}
            required
          />
        </div>
        <button type="submit">Marcar Exame</button>
      </form>
    </div>
  );
}

export default MarcarExame;
