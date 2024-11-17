// src/AppContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';

const AppContext = createContext();

const getFromLocalStorage = (key) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
};

const saveToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export function AppProvider({ children }) {

  const [pexelsApiKey, setPexelsApiKey] = useState('iNPFCGgXqqQfEzpVT8dEchhPp4bItmLl1c9TLNSoL9oGEQtPmhJDwIzn');

  const [medicos, setMedicos] = useState(getFromLocalStorage('medicos'));
  const [pacientes, setPacientes] = useState(getFromLocalStorage('pacientes'));
  const [horarios, setHorarios] = useState(getFromLocalStorage('horarios'));
  const [consultas, setConsultas] = useState(getFromLocalStorage('consultas'));
  const [exames, setExames] = useState(getFromLocalStorage('exames'));

  useEffect(() => {
    saveToLocalStorage('medicos', medicos);
  }, [medicos]);

  useEffect(() => {
    saveToLocalStorage('pacientes', pacientes);
  }, [pacientes]);

  useEffect(() => {
    saveToLocalStorage('horarios', horarios);
  }, [horarios]);

  useEffect(() => {
    saveToLocalStorage('consultas', consultas);
  }, [consultas]);

  useEffect(() => {
    saveToLocalStorage('exames', exames);
  }, [exames]);

  const clearLocalStorage = () => {
    localStorage.removeItem('medicos');
    localStorage.removeItem('pacientes');
    localStorage.removeItem('horarios');
    localStorage.removeItem('consultas');
    localStorage.removeItem('exames');
  };

  const verificarUsuario = (email, senha) => {
    let medicoEncontrado = medicos.find(medico => medico.email === email && medico.senha === senha);
    let pacienteEncontrado = pacientes.find(paciente => paciente.email === email && paciente.senha === senha);

    if(medicoEncontrado)
      return 'medico';
    if(pacienteEncontrado)
      return 'paciente';
    if(email === 'admin' && senha === 'admin')
      return 'admin';
    else return 'invalido';
};

  return (
    <AppContext.Provider value={{ medicos, setMedicos, pacientes, setPacientes, horarios, setHorarios, consultas, setConsultas, clearLocalStorage, verificarUsuario, exames, setExames, pexelsApiKey, setPexelsApiKey }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
