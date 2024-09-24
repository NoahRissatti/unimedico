import { useAppContext } from "AppContext";
import "./VerMedicos.css";

export function VerMedicos() {
  const { medicos } = useAppContext();

  return (
    <div className="container">
      <h2>Ver Médicos</h2>
      <ul>
        {medicos.map((medico, index) => (
          <li key={index}>
            <div>
              <strong>Nome:</strong> {medico.nome}
            </div>
            <div>
              <strong>Email:</strong> {medico.email}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
