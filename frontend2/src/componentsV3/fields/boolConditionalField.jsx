import { useEffect } from "react";
import { InstancesRouter } from "./InstanceRouter";
import { useState } from "react";

export const BoolConditionalField = ({
  state,
  stateFn,
  field,
  display_name,
  field_depends,
  condition,
  instances,
}) => {

  const template = {}
  instances.forEach((instance) => {
    template[instance] = ''
  })

  const initialState = state[field] ? state[field] : template

  const [element, setElement] = useState(initialState);

  useEffect(() => {

    const result = { ...state, [field]: element };
    
    stateFn(result);
  }, [element]);

  return (
    <div>
      {state[field_depends] === condition &&
        instances.map((instance) => (
          <InstancesRouter
            instance={instance}
            state={element}
            stateFn={setElement}
          />
        ))}
    </div>
  );
};
