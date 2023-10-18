export const BoolField = ({ state, stateFn, field, display_name }) => {
  const handleResponse = () => {
    
    const response = {...state, [field] : !state[field]}

    stateFn(response);
  };

  return (
    <div>
      <p>{display_name}</p>
      <input
        type="checkbox"
        value={state[field]}
        onClick={() => handleResponse()}
      />
    </div>
  );
};
