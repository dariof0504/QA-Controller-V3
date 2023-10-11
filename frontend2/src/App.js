import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModulePage } from "./pages/modulePage";
import { IndexPage } from "./pages/indexPage";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/module" element={<ModulePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App