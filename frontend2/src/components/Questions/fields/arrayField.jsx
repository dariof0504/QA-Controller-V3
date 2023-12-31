import { useState } from "react";
import { v4 as uuid } from "uuid";
import { InstancesRouter } from "../../../componentsV2/fields/InstanceRouter";

export const ArrayFieldV2 = ({ state, stateFn, field, display, instances }) => {
  const template = {};
  const listItems = state[field] ? state[field] : [];

  instances.forEach((instance) => {
    template[instance.field_name] = "";
  });

  const [arrayElement, setArrayElement] = useState(template);

  const handleAdd = (e) => {
    e.preventDefault();

    const result = {
      ...state,
      [field]: [...listItems, { ...arrayElement, id: uuid() }],
    };

    stateFn(result);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const newList = listItems.filter((item) => item.id !== id);
    stateFn({ ...state, [field]: newList });
  };

  const instanceValues = (item, instance) => {
    const display_name = instance.display_name;
    const field_name = instance.field_name;

    return (
      <>
        <p>{display_name}</p>
        <p>{item[field_name]}</p>
      </>
    );
  };

  return (
    <div>
      <p>{display}</p>
      {instances.map((instance) => (
        <InstancesRouter
          instance={instance}
          state={arrayElement}
          stateFn={setArrayElement}
        />
      ))}
      <button onClick={(e) => handleAdd(e)}>Añadir</button>
      <div>
        {listItems.map((item) => (
          <div>
            {instances.map((instance) => instanceValues(item, instance))}
            <button onClick={(e) => handleDelete(e, item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
};
