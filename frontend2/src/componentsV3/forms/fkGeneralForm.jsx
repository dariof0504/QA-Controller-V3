import { useNavigate, useParams } from "react-router-dom";
import { InstancesRouter } from "../fields/InstanceRouter";
import { useState } from "react";

export const FkGeneralForm = ({ info, apiFn, fkInstance }) => {
  const { display_name, initialState, instances } = info;

  const { fk } = useParams()

  const [element, setElement] = useState({
    ...initialState,
    [fkInstance] : fk
  });

  const navigator = useNavigate()
  
  const handleSave = async (e) => {

    const result = await apiFn(element)

    result && navigator('/')


  }

  return (
    <div>
      <h1>{display_name}</h1>
      {instances.map((instance) => (
        <InstancesRouter
          instance={instance}
          state={element}
          stateFn={setElement}
        />
      ))}
      <button onClick={(e) => handleSave(e)}>Guardar</button>
    </div>
  );
};
