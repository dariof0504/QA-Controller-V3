import { generalApi } from "../../api/axiosApi";
import { FkGeneralForm } from "../../componentsV3/forms/fkGeneralForm";
import { component_info } from "../../data/schemaInfo";

export const CreateComponentPage = () => {
  const fk_instance = "fk_component_window";

  const saveComponent = async (element) => {
    const result = await generalApi(component_info, element, "POST");
    return result.data;
  };

  return (
    <div>
      <FkGeneralForm
        apiFn={saveComponent}
        fkInstance={fk_instance}
        info={component_info}
      />
    </div>
  );
};
