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
  const [medicos, setMedicos] = useState(getFromLocalStorage('medicos'));
  const [pacientes, setPacientes] = useState(getFromLocalStorage('pacientes'));
  const [horarios, setHorarios] = useState(getFromLocalStorage('horarios'));
  const [consultas, setConsultas] = useState(getFromLocalStorage('consultas'));

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

  return (
    <AppContext.Provider value={{ medicos, setMedicos, pacientes, setPacientes, horarios, setHorarios, consultas, setConsultas }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
