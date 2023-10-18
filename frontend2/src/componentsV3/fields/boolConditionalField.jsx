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
  const [element, setElement] = useState('');

  useEffect(() => {
    // console.log(field)
    const result = { ...state, [field]: element };
    
    stateFn(result);
  }, [element]);

  return (
    <div>
      <p>{display_name}</p>
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
