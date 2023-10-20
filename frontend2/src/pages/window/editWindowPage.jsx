import { generalApi } from "../../api/axiosApi"
import { EditModule } from "../../componentsV3/forms/editGeneralModule"
import { window_info } from "../../data/schemaInfo"

export const EditWindowPage = () => {

  const saveWindow = async (element) => {
    const result = await generalApi(window_info, element, 'PUT')
    return result.data
  }

  return (
    <EditModule apiFn={saveWindow} info={window_info} />
  )
}
