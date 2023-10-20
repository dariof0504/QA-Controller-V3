import { useParams } from "react-router-dom";
import { elementsByFK } from "../../api/axiosApi";
import { component_info } from "../../data/schemaInfo";
import { getDisplayNames, getFields } from "../../functions/generalFn";
import { useEffect, useState } from "react";
import { TableComponent } from "../../components/tables/table_component";

export const ListComponentPage = () => {
  const { fk } = useParams();
  const [data, setData] = useState([]);

  const columns = getDisplayNames(component_info);
  const columnsFields = getFields(component_info);

  const getInfo = async () => {
    const result = await elementsByFK("component", "window", fk);
    setData(result.data);
  };

  useEffect(() => {
    getInfo();
  }, []);

  console.log(data)

  return (
    <div>
      <TableComponent
        columns={columns}
        columnsFields={columnsFields}
        data={data}
      />
    </div>
  );
};
