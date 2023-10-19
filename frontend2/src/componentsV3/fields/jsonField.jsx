import { useEffect, useState } from "react"
import { InstancesRouter } from "./InstanceRouter"

export const JsonField = ({ state, stateFn, field, display, instances }) => {

  const template = {}
  instances.forEach((instance) => {
    template[instance.field_name] = ''
  })

  const initialState = state[field] ? state[field] : template

  const [element, setElement] = useState(initialState)

  useEffect(() => {

    const result = {...state, [field] : element}
    stateFn(result)

  }, [element])

  return (
    <>
      <p>{display}</p>
      {instances.map(instance => <InstancesRouter instance={instance} state={element} stateFn={setElement} />)}
    </>
  )
}
