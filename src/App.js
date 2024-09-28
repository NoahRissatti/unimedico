// src/App.js
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Pacient } from "./pages/Pacient/Pacient";
import Admin from "./pages/Admin/Admin";
import { Home } from "./pages/Admin/components/Home";
import { HomePacient } from "./pages/Pacient/components/Home";
import MarcarConsulta from "./pages/Pacient/components/MarcarConsulta/MarcarConsulta";
import CadastroMedico from "pages/Admin/components/CadastroMedico/CadastroMedico";
import { CadastroPaciente } from "pages/Admin/components/CadastroPaciente/CadastroPaciente";
import { VerMedicos } from "pages/Admin/components/VerMedicos/VerMedicos";
import { VerPacientes } from "pages/Admin/components/VerPacientes/VerPacientes";
import { Medic } from "pages/Medic/Medic";
import { HomeMedic } from "pages/Medic/components/Home";
import { Login } from "pages/Login/Login";
import VerConsultas from "pages/Medic/components/VerConsulta/VerConsulta";
import MarcarExame from "pages/Pacient/components/MarcarExame/MarcarExame";
import VerExames from "pages/Medic/components/VerExame/VerExame";

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
          <Route path="marcar-exame" element={<MarcarExame />} />
        </Route>

        <Route path='/medic' element={<Medic />}>
          <Route index element={<HomeMedic />}/>
          <Route path="ver-consultas" element={<VerConsultas />} />
          <Route path="ver-exames" element={<VerExames />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
