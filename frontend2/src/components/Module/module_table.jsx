import { useEffect, useState } from "react";
import { listElements } from "../../api/axiosApi";
import { moduleForm } from "../Questions/form/forms";

import { TableComponent } from "../tables/table_component";
import { Link } from "react-router-dom";
import { getPk } from "../../functions/generalFn";

export const ModuleTable = () => {

  const [data, setdata] = useState([]);

  const columns = moduleForm.questions.map((e) => e.display_name).slice(0,2)
  const columnsFields = moduleForm.questions.map((e) => e.field_name).slice(0,2);

  const getInfo = async () => {
    const result = await listElements("module");
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  const verBoton = (element) => {
    
    const pk = getPk(element)

    return <Link to={`/module/${pk}`} >Editar</Link>;
  };

  const createWindow = (element) => {

    const pk = getPk(element)

    return <Link to={`/module/window/${pk}`}>Crear ventana</Link>
  }

  const butons = [verBoton, createWindow];

  return (
    <TableComponent
      columns={columns}
      data={data}
      columnsFields={columnsFields}
      buttons={butons}
    />
  );
};
