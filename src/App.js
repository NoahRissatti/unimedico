// src/App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pacient } from "./pages/Pacient/Pacient";
import Admin from "./pages/Admin/Admin";
import { Home } from "./pages/Admin/components/Home";
import { HomePacient } from "./pages/Pacient/components/Home";
import MarcarConsulta from "./pages/Pacient/components/MarcarConsulta";
import CadastroMedico from "pages/Admin/components/CadastroMedico/CadastroMedico";
import { CadastroPaciente } from "pages/Admin/components/CadastroPaciente/CadastroPaciente";
import { VerMedicos } from "pages/Admin/components/VerMedicos/VerMedicos";
import { VerPacientes } from "pages/Admin/components/VerPacientes/VerPacientes";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<Home />} />
          <Route path="cadastro-medico" element={<CadastroMedico />} />
          <Route path="ver-medicos" element={<VerMedicos />} />
          <Route path="cadastro-paciente" element={<CadastroPaciente />} />
          <Route path="ver-pacientes" element={<VerPacientes/>} />
        </Route>
        
        <Route path="/pacient" element={<Pacient />}>
          <Route index element={<HomePacient />} />
          <Route path="marcar-consulta" element={<MarcarConsulta />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
