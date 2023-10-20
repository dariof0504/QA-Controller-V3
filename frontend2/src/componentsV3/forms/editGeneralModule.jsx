import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getElement } from "../../api/axiosApi"
import { EditGeneralForm } from "./editGeneralForm"

export const EditModule = ({info, apiFn}) => {

  const { pk } = useParams()
  const [element, setElement] = useState(false)

  const { path } = info

 const setState = async () => {
  const result = await getElement(path, pk)
  setElement(result.data)
 }

  useEffect(() => {
    setState()
  }, [])


  return (
    <div>
      {element && <EditGeneralForm apiFn={apiFn} editElement={element} info={info} />}
    </div>
  )
}
