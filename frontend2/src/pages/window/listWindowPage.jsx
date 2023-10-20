import React, { useEffect, useState } from 'react'
import { getDisplayNames, getFields, getPk } from '../../functions/generalFn'
import { Link, useParams } from 'react-router-dom'
import { elementsByFK } from '../../api/axiosApi'
import { TableComponent } from '../../components/tables/table_component'
import { window_info } from '../../data/schemaInfo'

export const ListWindowPage = () => {

  const {fk} = useParams()
  const [data, setData] = useState([])

  const columns = getDisplayNames(window_info)
  const columnsFields = getFields(window_info)

  const getInfo = async () => {
    const result = await elementsByFK('window', 'module', fk)
    setData(result.data)
  }

  useEffect(() => {
    getInfo()
  },[])

  const verBoton = (element) => {
    const pk = getPk(element)

    return <Link to={`/edit/window/${pk}`}>Editar</Link>
  }

  const createComponents = (element) => {

    const pk = getPk(element)

    return <Link to={`/create/component/${pk}`}>Crear componente</Link>

  }

  const listComponents = (element) => {

    const pk = getPk(element)

    return <Link to={`/list/component/${pk}`}>Ver componentes</Link>

  }

  const Buttons = [verBoton, createComponents, listComponents]


  return (
    <div>
      <TableComponent columns={columns} data={data} columnsFields={columnsFields} buttons={Buttons} />
    </div>
  )
}
