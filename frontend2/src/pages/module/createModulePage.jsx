import { module_info } from '../../data/schemaInfo'
import { GeneralForm } from '../../componentsV3/forms/generalForm'
import { generalApi } from '../../api/axiosApi'

export const CreateModulePage = () => {

  const saveModule = async (element) => {
    const result = await generalApi(module_info, element, 'POST')
    return result.data
  } 
  
  return (
    <div>
      <GeneralForm apiFn={saveModule} info={module_info} />
    </div>
    )
}
