import { useAppContext } from "AppContext";
import "./VerPacientes.css";

export function VerPacientes() {
  const { pacientes } = useAppContext();

  return (
    <div className="container">
      <h2>Ver Pacientes</h2>
      <ul>
        {pacientes.map((paciente, index) => (
          <li key={index}>
            <div>
              <strong>Nome:</strong> {paciente.nome}
            </div>
            <div>
              <strong>Email:</strong> {paciente.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
