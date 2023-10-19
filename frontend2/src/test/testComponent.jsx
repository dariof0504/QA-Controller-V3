import { useState } from "react";
import { InstancesRouter } from "../componentsV3/fields/InstanceRouter";
import { component } from "../data/schemaInfo";

export const TestComponent = () => {

  const { initialState } = component

  const [dataComponent, setDataComponent] = useState(initialState)

  const seeComponent = () => {
    console.log(dataComponent)
  }

  return (
    <div>
      {component.instances.map((instance) => <InstancesRouter instance={instance} state={dataComponent} stateFn={setDataComponent} />)}
      <button onClick={() => seeComponent()} >Ver objeto</button>
    </div>
  );
};
