import { useEffect, useState } from "react";
import { listElements } from "../../api/axiosApi";
import { TableComponent } from "../../components/tables/table_component";
import { Link } from "react-router-dom";
import { getPk } from "../../functions/generalFn";
import { module_info } from "../../data/schemaInfo";

export const ListModulePage = () => {
  const [data, setdata] = useState([]);

  const columns = module_info.instances.map((e) => e.display_name).slice(0, 2);
  const columnsFields = module_info.instances
    .map((e) => e.field_name)
    .slice(0, 2);

  const getInfo = async () => {
    const result = await listElements("module");
    setdata(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  
  const verBoton = (element) => {
    const pk = getPk(element);

    return <Link to={`/edit/module/${pk}`}>Editar</Link>;
  };

  const createWindow = (element) => {

    const pk = getPk(element)

    return <Link to={`/create/window/${pk}`}>Crear ventana</Link>
  }

  const listWindows = (element) => {
  	const pk = getPk(element)

  	return <Link to={`/list/window/${pk}`}>Ver ventanas</Link>
  }

  const butons = [verBoton, createWindow, listWindows];

  return (
    <TableComponent
      columns={columns}
      data={data}
      columnsFields={columnsFields}
      buttons={butons}
    />
  );
};
