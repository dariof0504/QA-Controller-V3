import { useState } from "react";
import { v4 as uuid } from "uuid";

export const ArrayField = ({ state, stateFn, field, display, items }) => {
  const template = {};

  items.forEach((v) => {
    template[v.key] = "";
  });

  const [element, setElement] = useState(template);
  const listItems = state[field] ? state[field] : [];

  const handleElement = (e) => {
    const instance = e.target.className;
    const result = { ...element, [instance]: e.target.value };
    setElement(result);
  };

  const handleAdd = (e) => {
    e.preventDefault();

    const result = {
      ...state,
      [field]: [...listItems, { ...element, id: uuid() }],
    };

    stateFn(result);
  };

  const handleDelete = (e, id) => {
    e.preventDefault();
    const newList = listItems.filter((item) => item.id !== id);
    stateFn({ ...state, [field]: newList });
  };

  const FieldItems = ({ item }) => {
    const fields = items.map((i) => {
      const display_name = i.display_name;
      const key = i.key;

      return {
        display_name,
        value: item[key],
      };
    });

    return (
      <>
        {fields.map((f) => (
          <>
            <p>{f.display_name}</p>
            <p>{f.value}</p>
          </>
        ))}
      </>
    );
  };

  return (
    <div>
      <p>{display}</p>

      {/* Preguntas */}
      <div>
        {items.map((item) => (
          <>
            <p>{item.display_name}</p>
            <input type={item.type} className={item.key} onChange={(e) => handleElement(e)} />
          </>
        ))}

        <button onClick={(e) => handleAdd(e)}>Añadir</button>
      </div>

      {/* Lista de los items */}
      <div>
        {listItems.map((e) => (
          <>
            <FieldItems item={e} />
            <button onClick={(d) => handleDelete(d, e.id)}>Eliminar</button>
          </>
        ))}
      </div>
    </div>
  );
};
