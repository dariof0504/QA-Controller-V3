import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import { InstancesRouter } from "./InstanceRouter";

export const ArrayField = ({
  state,
  stateFn,
  field,
  display_name,
  instances,
}) => {
  const template = {};
  const listItems = state[field] ? state[field] : [];

  instances.forEach((instance) => {
    template[instance.field_name] = instance.type === "bool" ? false : "";
  });

  const [arrayElement, setArrayElement] = useState(template);

  const handleAdd = () => {
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
    const field = instance.field_name
    const type = typeof item[field];

    return (
      <>
        {type !== typeof {} | type !== typeof [] && (
          <>
            <p>{instance.display_name}</p>
            <p>{JSON.stringify(item[field])}</p>
          </>
        )}
      </>
    );
  };

  return (
    <div>
      <p>{display_name}</p>
      {instances.map((instance) => (
        <InstancesRouter
          instance={instance}
          state={arrayElement}
          stateFn={setArrayElement}
        />
      ))}
      <button onClick={() => handleAdd()}>Añadir</button>
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
