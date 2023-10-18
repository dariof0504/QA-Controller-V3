import { BrowserRouter, Route, Routes } from "react-router-dom";
import { IndexPage } from "./pages/indexPage";
// import { EditModulePage } from "./pages/module/editModulePage";
// import { CreateModulePage } from "./pages/module/createModulePage";
// import { CreateWindowPage } from "./pages/window/createWindowPage";
// import { ListModulePage } from "./pages/module/listModulePage";
// import { ListWindowPage } from "./pages/window/listWindowPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        
        {/* <Route path="/module" element={<ListModulePage />} />
        <Route path="/module/:pk" element={<EditModulePage />} />
        <Route path="/module/create" element={<CreateModulePage />} />

        <Route path="/module/window/:fk" element={<CreateWindowPage />} />
        <Route path="/listWindow/:fk" element={<ListWindowPage />} /> */}

      </Routes>
    </BrowserRouter>
  )
}

export default App