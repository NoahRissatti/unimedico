import { useAppContext } from "AppContext";

function VerExames() {
    const { exames } = useAppContext(); 

    return (
        <div className="container">
          <h2>Ver Exames</h2>
          <ul>
            {exames.map((exame, index) => (
              <li key={index}>
                <div>
                  <strong>Nome do Paciente:</strong> {exame.nomePaciente}
                </div>
                <div>
                  <strong>Procedimento:</strong> {exame.procedimento}
                </div>
                <div>
                  <strong>Data e hora:</strong> {exame.dataHora}
                </div>
              </li>
            ))}
          </ul>
        </div>
      );
}

export default VerExames;