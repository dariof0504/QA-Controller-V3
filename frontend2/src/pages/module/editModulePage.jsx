import { module_info } from "../../data/schemaInfo"
import { generalApi } from "../../api/axiosApi"
import { EditModule } from "../../componentsV3/forms/editGeneralModule"

export const EditModulePage = () => {

  const saveModule = async (element) => {
    const result = await generalApi(module_info, element, 'PUT')
    return result.data
  }

  return (
    <div>
      <EditModule apiFn={saveModule} info={module_info} />
    </div>
  )
}
