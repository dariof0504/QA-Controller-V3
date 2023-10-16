import { GeneralForm } from "../Questions/form/generalForm";
import { useState } from "react";
import { generalApi } from "../../api/axiosApi";
import { useNavigate } from "react-router-dom";

export const ElementForm = ({ method, initialState, info }) => {

  const navigate = useNavigate()

  const [element, setElement] = useState(initialState);

  const handleSave = async (e) => {
    e.preventDefault();
    const result = await generalApi(info, element, method);
    console.log(result)
    navigate('/')
  };

  return (
    <div>
      <form onSubmit={(e) => handleSave(e)}>
        <GeneralForm state={element} stateFn={setElement} info={info} />
        <button type="submit">Enviar </button>
      </form>
    </div>
  );
};
