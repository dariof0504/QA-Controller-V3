import React, { useEffect, useState } from 'react'
import { windowForm } from '../../components/Questions/form/forms'
import { getDisplayNames, getFields } from '../../functions/generalFn'
import { useParams } from 'react-router-dom'
import { elementsByFK, listElementByField } from '../../api/axiosApi'
import { TableComponent } from '../../components/tables/table_component'

export const ListWindowPage = () => {

  const {fk} = useParams()
  const [data, setData] = useState([])

  const columns = getDisplayNames(windowForm)
  const columnsFields = getFields(windowForm)

  const getInfo = async () => {
    const result = await elementsByFK('window', 'module', fk)
    setData(result.data)
  }

  useEffect(() => {
    getInfo()
  },[])

  return (
    <div>
      <TableComponent columns={columns} data={data} columnsFields={columnsFields} />
    </div>
  )
}
