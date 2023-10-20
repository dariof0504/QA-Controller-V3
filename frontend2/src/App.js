import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/index/indexPage";
import { CreateModulePage } from "./pages/module/createModulePage";
import { ListModulePage } from "./pages/module/listModulePage";
import { EditModulePage } from "./pages/module/editModulePage";
import { CreateWindowPage } from "./pages/window/createWindowPage";
import { EditWindowPage } from "./pages/window/editWindowPage";
import { ListWindowPage } from "./pages/window/listWindowPage";
import { CreateComponentPage } from "./pages/component/createComponentPage";
import { ListComponentPage } from "./pages/component/listComponentPage";
import { CreateReportPage } from "./pages/report/createReportPage";
import { CreateIncidentPage } from "./pages/incidents/createIncidentPage";
import { ListReportPage } from "./pages/report/listReportPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/list/module" element={<ListModulePage />} />
        <Route path="/create/module" element={<CreateModulePage />} />
        <Route path="/edit/module/:pk" element={<EditModulePage />} />

        <Route path="/list/window/:fk" element={<ListWindowPage />} />
        <Route path="/create/window/:fk" element={<CreateWindowPage />} />
        <Route path="/edit/window/:pk" element={<EditWindowPage />} />

        <Route path='/create/component/:fk' element={<CreateComponentPage />} />
        <Route path="/list/component/:fk" element={<ListComponentPage />} />

        <Route path="/create/report" element={<CreateReportPage />} />
        <Route path="/list/report" element={<ListReportPage />} />
        <Route path="/list/report/:fk" />

        <Route path="/create/indident/:fk" element={<CreateIncidentPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
