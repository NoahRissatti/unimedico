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
            <div className="teste">
              <img src={paciente.foto} alt="Foto Perfil">
              </img>
            </div>
            <div>
              <strong>Nome:</strong> {paciente.nome}
            </div>
            <div>
              <strong>Email:</strong> {paciente.email}
            </div>
            <div>
              <strong>Endereço:</strong> {paciente.endereco}, {paciente.numero} {paciente.complemento && `- ${paciente.complemento}`}
            </div>
            <div>
              <strong>Cidade:</strong> {paciente.cidade}
            </div>
            <div>
              <strong>Estado:</strong> {paciente.estado}
            </div>
            <div>
              <strong>CEP:</strong> {paciente.cep}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
