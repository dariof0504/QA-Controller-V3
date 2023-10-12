import { useState } from "react"
import { v4 as uuid } from 'uuid'

export const ArrayField = ({ state, stateFn, field, display, keys }) => {

  const template = {}

  keys.forEach((v) => {
    template[v] = ''
  })


  const [element, setElement] = useState(template)
  const listItems = state[field]

  const handleElement = (e) => {
    const instance = e.className
    const result = { ...element, [instance]: e.target.value }
    setElement(result)
  }

  const handleAdd = (e) => {
    e.preventDefault()

    const result = { ...state, [field]: [...listItems, {...element, id: uuid()}] }
    console.log(result)
    stateFn(result)
  }

  const handleDelete = (e,id) => {
    e.preventDefault()
    const newList = listItems.filter(item => item.id !== id)
    stateFn({...state, [field] : newList})

  }

  return (
    <div>
      <p>{display}</p>
      <div>
        {keys.map((e) => {
          return (<input className={e} onChange={e => handleElement(e)} />)
        })}
        <button onClick={(e) => handleAdd(e)} >Añadir</button>
      </div>
      <div>
        {listItems.map((e) => {

          const itemKeys = Object.keys(e)

          return (<>
            {itemKeys.map(k => k !== 'id' && <p>{e[k]}</p>)}
            <button onClick={(d) => handleDelete(d, e.id)} >Eliminar</button>
          </>)
        })}
      </div>
    </div>
  )
}
