import { useEffect, useState } from "react"
import { report_info } from "../../data/schemaInfo"
import { listElements } from "../../api/axiosApi"
import { TableComponent } from "../../components/tables/table_component"
import { getPk } from "../../functions/generalFn"
import { Link } from "react-router-dom"

export const ListReportPage = () => {

  const [data, setdata] = useState([])

  const columns = report_info.instances.map((e) => e.display_name)
  const columnsFields = report_info.instances.map((e) => e.field_name)

  const getInfo = async () => {
    const result = await listElements('report')
    setdata(result.data)
  }

  useEffect(() => {
    getInfo()
  }, [])

  const createIncient = (element) => {
    const pk = getPk(element)
    return <Link to={`/create/indident/${pk}`} >Crear incidente</Link>
  }

  const buttons = [createIncient]

  return (
    <TableComponent columns={columns} columnsFields={columnsFields} data={data} buttons={buttons} />
  )
}
