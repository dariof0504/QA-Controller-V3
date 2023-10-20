import { generalApi } from "../../api/axiosApi";
import { FkGeneralForm } from "../../componentsV3/forms/fkGeneralForm";
import { window_info } from "../../data/schemaInfo";

export const CreateWindowPage = () => {
  const fk_instance = "fk_window_module";

  const saveWindow = async (element) => {
    const result = await generalApi(window_info, element, "POST");
    return result.data;
  };

  return (
    <FkGeneralForm
      apiFn={saveWindow}
      info={window_info}
      fkInstance={fk_instance}
    />
  );
};
