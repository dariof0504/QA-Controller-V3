import React from "react";

export const BoolField = ({ state, stateFn, field, display_name }) => {
  const handleResponse = (e) => {
    const response = { ...state, [field]: !e.target.value };
    stateFn(response);
  };

  return (
    <div>
      <p>{display_name}</p>
      <input
        type="checkbox"
        value={state[field]}
        onClick={(e) => handleResponse(e)}
      />
    </div>
  );
};
