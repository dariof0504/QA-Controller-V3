import { useEffect, useState } from "react";
import { generalApi, listElements } from "../../api/axiosApi";
import { v4 as uuid } from "uuid";
import { report_info } from "../../data/schemaInfo";
import { InstancesRouter } from "../../componentsV3/fields/InstanceRouter";
export const CreateReportPage = () => {
  const [modules, setModules] = useState([]);
  const [element, setElement] = useState(report_info.initialState);

  const getModules = async () => {
    const result = await listElements("module");
    setModules(result.data);
  };

  useEffect(() => {
    getModules();
  }, []);

  useEffect(() => {
    if (modules.length > 0) {
      const initialState = {
        ...element,
        fk_report_module: modules[0].pk_id_module,
      };
      setElement(initialState);
    }
  }, [modules]);

  const handleFk = (value) => {
    const result = { ...element, fk_report_module: value };
    setElement(result);
  };

  const saveReport = async () => {
    const result = await generalApi(report_info, element, 'POST')
    console.log(result)
  }

  return (
    <div>
      <h1>Selecciona el modulo al que pertenece</h1>
      <select onChange={(e) => handleFk(e.target.value)}>
        {modules.map((mod) => (
          <option value={mod.pk_id_module} key={uuid()}>
            {mod.module_title}
          </option>
        ))}
      </select>

      {report_info.instances.map((instance) => (
        <InstancesRouter
          instance={instance}
          state={element}
          stateFn={setElement}
        />
      ))}

      <button onClick={() => saveReport()}>Crear reporte</button>
    </div>
  );
};
