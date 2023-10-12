import { DefaultField } from "../fields/defaultField";
import { api } from "../../../api/axiosApi";
import { useEffect, useState } from "react";
import "./style.css";
import { ArrayField } from "../fields/arrayField";

export const GeneralForm = ({ method, instance, initialState }) => {
  const [element, setElement] = useState(initialState);
  const [info, setInfo] = useState({});
  const [importState, setImportState] = useState(false);

  const nameImport = `${instance}Form`;

  //Funcion para importar la informacion del formulario
  const importFormData = async () => {

    const result = await import("../form/forms");

    setInfo(result[nameImport]);
    !initialState && setElement(result[nameImport].initialState);

    setImportState(true);
  };

  //Montamos la informacion del formulario
  useEffect(() => {
    importFormData();
  }, [nameImport]);

  //Para cada pregunta
  const handleQuestions = (e) => {
    const { field_name, type, display_name } = e;

    if (e.type === "text" || e.type === "number") {
      return (
        <DefaultField
          display={display_name}
          field={field_name}
          state={element}
          stateFn={setElement}
          type={type}
        />
      );
    } 
    else if (e.type === 'array') {
      return (
        <ArrayField display={display_name} field={field_name} state={element} stateFn={setElement} keys={e.keys} />
      )
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    const { path } = info;

    const pkInstance = Object.keys(element)
      .map((e) => (e.includes("pk_id_") ? e : false))
      .filter((e) => e)[0];

    const config = {
      method,
      data: element,
      url: method === "POST" ? `${path}/` : `${path}/${element[pkInstance]}/`,
    };

    // const result = await api.request(config);

    console.log('aca se ejecuta');
  };

  const formTitle =
    method === "POST"
      ? `Registrar ${info?.display_name}`
      : `Actualizar ${info?.display_name}`;

  return (
    <form onSubmit={(e) => handleSave(e)}>
      {importState && (
        <>
          <h1>{formTitle}</h1>
          {info?.questions.map((e) => handleQuestions(e))}
          <button type="submit">Guardar</button>
        </>
      )}
    </form>
  );
};
