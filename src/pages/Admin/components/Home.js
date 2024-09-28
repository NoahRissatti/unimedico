import { useAppContext } from "AppContext";
import "../Admin.css";

export function Home() {
    const { medicos, pacientes, clearLocalStorage } = useAppContext();

    const handleClearData = () => {
        clearLocalStorage();
        window.location.reload();
    };
  
    return (
      <div className="home">
        <h1>Bem-vindo ao sistema de cadastro médico</h1>
        <div className="stats">
          <div className="stat-card">
            <h2>Médicos Cadastrados</h2>
            <p>{medicos.length}</p>
          </div>
          <div className="stat-card">
            <h2>Pacientes Cadastrados</h2>
            <p>{pacientes.length}</p>
          </div>
          <div>
            <button onClick={handleClearData}>Limpar Dados</button>
          </div>
        </div>
      </div>
    );
  }