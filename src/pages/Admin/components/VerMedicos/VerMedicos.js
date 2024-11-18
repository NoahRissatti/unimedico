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
              <div className="teste">
                <img src={medico.foto} alt="Foto Perfil">
                </img>
              </div>
              <div>
                <strong>Nome:</strong> {medico.nome}
              </div>
              <div>
                <strong>Email:</strong> {medico.email}
              </div>
              <div>
                <strong>Endereço:</strong> {medico.endereco}, {medico.numero}
              </div>
              {medico.complemento && (
                <div>
                  <strong>Complemento:</strong> {medico.complemento}
                </div>
              )}
              <div>
                <strong>Cidade:</strong> {medico.cidade}
              </div>
              <div>
                <strong>Estado:</strong> {medico.estado}
              </div>
              <div>
                <strong>CEP:</strong> {medico.cep}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
