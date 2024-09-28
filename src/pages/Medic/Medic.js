import { Link, Outlet } from "react-router-dom";

export function Medic() {
    return (
      <>
        <div className="App">
          <nav>
            <Link to="/medic">Home</Link> |
            <Link to="/medic/ver-consultas">Ver Consultas</Link> |
            <Link to="/medic/ver-exames">Ver Exames</Link>
          </nav>
        </div>
        <Outlet />
      </>
    );
  }