import { useAppContext } from 'AppContext';
import React, { useState } from 'react';
import '../Pacient.css';

function MarcarConsulta() {
  const { medicos, setConsultas } = useAppContext();
  const [medicoSelecionado, setMedicoSelecionado] = useState('');
  const [dataHora, setDataHora] = useState('');
  const [nomePaciente, setNomePaciente] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (medicoSelecionado && dataHora && nomePaciente) {
      setConsultas(prevConsultas => [
        ...prevConsultas,
        { nomePaciente, medico: medicoSelecionado, dataHora }
      ]);
      setMedicoSelecionado('');
      setDataHora('');
      setNomePaciente('');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="container">
      <h2>Marcar Consulta</h2>
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
          <label htmlFor="medico">Selecione o Médico:</label>
          <select
            id="medico"
            value={medicoSelecionado}
            onChange={(e) => setMedicoSelecionado(e.target.value)}
            required
          >
            <option value="">Selecione um médico</option>
            {medicos.length > 0 ? medicos.map((medico, index) => (
              <option key={index} value={medico.nome}>
                {medico.nome}
              </option>
            )) : null}
          </select>
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
        <button type="submit">Marcar Consulta</button>
      </form>
    </div>
  );
}

export default MarcarConsulta;
