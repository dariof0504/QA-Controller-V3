import { useEffect, useState } from "react";
import { InstancesRouter } from "../../../componentsV2/fields/InstanceRouter";

export const JsonField = ({ state, stateFn, field, display, instances }) => {
  const template = {};

  instances.forEach((instance) => {
    template[instance.field_name] = "";
  });

  const initialState = state[field] ? state[field] : template;

  const [jsonElement, setJsonElement] = useState(initialState);

  useEffect(() => {
    const result = {
      ...state,
      [field]: jsonElement,
    };
    stateFn(result);
  }, [jsonElement]);

  return (
    <div>
      <p>{display}</p>
      {instances.map((instance) => (
        <InstancesRouter
          instance={instance}
          state={jsonElement}
          stateFn={setJsonElement}
        />
      ))}
    </div>
  );
};
