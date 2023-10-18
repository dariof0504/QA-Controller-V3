import { useState } from "react";
import { InstancesRouter } from "../componentsV3/fields/InstanceRouter";
import { rutina } from "../data/schemaInfo";

export const TestComponent = () => {

  const [element, setElement] = useState({
    actions: []
  });

  return (
    <div>
      {rutina.instances.map((instance) => (
        <InstancesRouter
          instance={instance}
          state={element}
          stateFn={setElement}
        />
      ))}
    </div>
  );
};
