import { useAppContext } from "AppContext";

function VerConsultas() {
    const { consultas } = useAppContext(); 

    return (
        <div className="container">
          <h2>Ver Consultas</h2>
          <ul>
            {consultas.map((consulta, index) => (
              <li key={index}>
                <div>
                  <strong>Nome do Paciente:</strong> {consulta.nomePaciente}
                </div>
                <div>
                  <strong>Médico responsável:</strong> {consulta.medico}
                </div>
                <div>
                  <strong>Data e hora:</strong> {consulta.dataHora}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default VerConsultas;