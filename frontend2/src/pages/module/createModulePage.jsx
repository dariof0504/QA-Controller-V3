import { moduleForm } from '../../components/Questions/form/forms'
import { ElementForm } from '../../components/generalComponents/elementForm'

export const CreateModulePage = () => {

  const info = moduleForm

  return (
    <ElementForm info={info} initialState={info.initialState} method={'POST'} />
  )
}
