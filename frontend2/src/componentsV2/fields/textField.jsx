import React from "react";

export const TextFieldV2 = ({ state, stateFn, field, type, display_name }) => {
  const handleResponse = (e) => {
    const response = { ...state, [field]: e.target.value };
    stateFn(response);
  };

  return (
    <div>
      <p>{display_name}</p>
      <p>Valor actual {state[field]}</p>
      <input type={type} onChange={(e) => handleResponse(e)} />
    </div>
  );
};
