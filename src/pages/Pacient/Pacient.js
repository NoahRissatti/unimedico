import { Link, Outlet } from "react-router-dom";

export function Pacient() {
  return (
    <>
      <div className="App">
        <nav>
          <Link to="/pacient">Home</Link> |
          <Link to="/pacient/marcar-consulta">Marcar Consulta</Link> |
          <Link to="/pacient/marcar-exame">Marcar Exame</Link>
        </nav>
      </div>
      <Outlet />
    </>
  );
}
