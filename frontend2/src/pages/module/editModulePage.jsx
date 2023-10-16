import { EditElementForm } from '../../components/generalComponents/editElementForm'
import { moduleForm } from '../../components/Questions/form/forms'

export const EditModulePage = () => {

  const info = moduleForm

  return (
    <EditElementForm info={info} />
  )
}
