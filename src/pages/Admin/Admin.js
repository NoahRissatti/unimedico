// Admin.js
import { React } from "react";
import {  Link, Outlet } from "react-router-dom";
import "./Admin.css";

function Admin() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/admin">Home</Link> |
          <Link to="/admin/cadastro-medico">Cadastrar Médico</Link> |
          <Link to="/admin/ver-medicos">Ver Médicos</Link> |
          <Link to="/admin/cadastro-paciente">Cadastrar Paciente</Link> |
          <Link to="/admin/ver-pacientes">Ver Pacientes</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}

export default Admin;
