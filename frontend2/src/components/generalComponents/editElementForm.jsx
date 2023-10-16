import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getElement } from "../../api/axiosApi";
import { ElementForm } from "./elementForm";

export const EditElementForm = ({info}) => {
  const { pk } = useParams();
  const { path } = info

  const [initialState, setInitialState] = useState(false);


  const handleInitialState = async () => {
    const result = await getElement(path, pk);
    setInitialState(result.data)
  };

  useEffect(() => {
    handleInitialState();
  }, []);

  return (
    <div>
      {initialState ? (
        <ElementForm info={info} initialState={initialState} method={"PUT"} />
      ) : (
        <p>aun</p>
      )}
    </div>
  );
};
