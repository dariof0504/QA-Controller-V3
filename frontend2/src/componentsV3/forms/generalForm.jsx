import { useState } from "react";
import { InstancesRouter } from "../fields/InstanceRouter";
import { useNavigate } from "react-router-dom";

export const GeneralForm = ({ info, apiFn }) => {
  const { display_name, initialState, instances } = info;

  const [element, setElement] = useState(initialState);

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
