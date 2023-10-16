import { useParams } from 'react-router-dom'
import { ElementForm } from '../../components/generalComponents/elementForm'
import { windowForm } from '../../components/Questions/form/forms'

export const CreateWindowPage = () => {

  const {fk} = useParams()
  const fk_instance = 'fk_window_module'
  const info = windowForm
  
  const initialState = {...windowForm, [fk_instance] : fk}

  return (
    <ElementForm info={info} initialState={initialState} method={'POST'} />
  )
}
