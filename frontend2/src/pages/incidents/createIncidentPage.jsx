import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { elementsByFK, getElement, listElements } from "../../api/axiosApi";

export const CreateIncidentPage = () => {
  const { fk } = useParams();

  const [windows, setWindows] = useState([]);
  const [components, setComponents] = useState([]);
  const [chargeComponent, setChargeComponent] = useState(false);

  const getWindowInfo = async () => {
    const reportInfo = await getElement("report", fk);
    const windowInfo = await elementsByFK(
      "window",
      "module",
      reportInfo.data.fk_report_module
    );
    setWindows(windowInfo.data);
    setChargeComponent(true);
    getComponents()
  };

  const getComponents = async () => {
    const reqComponents = await listElements('component')
    // const windowsPk = windows.map(w => w.pk_id_window_module)
    // const filterComp = reqComponents.data.filter((comp) => windowsPk.includes(comp.fk_component_window))
    // console.log(filterComp)

    // console.log(filterComp)
 
  }

  useEffect(() => {
    getWindowInfo()
  }, [])

  return (
    <div>
      <div>
        <p>Establecer opciones</p>
        <p>Elegir ventana</p>
        <select>
          {windows.length > 0 &&
            windows.map((window) => (
              <option value={window.pk_id_window_module}>
                {window.window_title}
              </option>
            ))}
        </select>
        {windows.length > 0 && (
          <>
            <p>Selecciona el component</p>
            <select></select>
          </>
        )}
      </div>
    </div>
  );
};
