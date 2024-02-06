import { BrowserRouter, Route, Routes } from "react-router-dom";
import DepilacaoProfissional from "./pages/DepilacaoProfissional";
import SobrancelhaPerfeita from "./pages/SobrancelhaPerfeita";
import ViverCilios from "./pages/ViverCilios";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import TermsOfUse from "./features/TermsOfUse";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route
          path="depilacao-profissional"
          element={<DepilacaoProfissional />}
        />
        <Route path="termos-de-uso" element={<TermsOfUse />} />

        <Route path="sobrancelha-perfeita" element={<SobrancelhaPerfeita />} />
        <Route path="viver-cilios" element={<ViverCilios />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
