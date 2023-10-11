import { GeneralForm } from '../Questions/form/generalForm'

export const FormModule = () => {

    return (
        <div>
            <GeneralForm method={'POST'} instance={'module'} />
        </div>
    )
}
