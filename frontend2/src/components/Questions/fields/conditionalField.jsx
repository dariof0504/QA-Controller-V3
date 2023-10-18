import { useEffect, useState } from 'react'

export const ConditionalField = ({state, stateFn, field}) => {

  const [element, setElement] = useState({})

  useEffect(() => {
    const result = {
      ...state,
      [field] : element
    }

    stateFn(result)
  }, [])

  const handleElement = (e) => {
    const instance = e.target.className
    const result = {...element, [instance] : e.target.value}

  }

  return (
    <div>ConditionalField</div>
  )
}
