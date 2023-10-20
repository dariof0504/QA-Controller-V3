import { Link } from "react-router-dom";

export const IndexPage = () => {
  return (
    <div>
      <h1>Controlador QA V3</h1>
      <div>
        <h1>Modulos</h1>
        <Link to={'/list/module'} >Ver modulos</Link>
        <Link to={'/create/module'} >Crear modulo</Link>
      </div>
      <div>
        <p>Reportes</p>
        <Link to={"/list/report"}>Ver reportes</Link>
        <Link to={"/create/report"}>Crear reportes</Link>
      </div>
      <div>
        <p>Tests</p>
        <Link>Tests Selenium</Link>
        <Link>Tests con Appium</Link>
        <Link>Crear tests</Link>
      </div>
    </div>
  );
};
