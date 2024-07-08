import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Macaroons from "./pages/Macaroons";
import Cakes from "./pages/Cakes";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="macaroons" element={<Macaroons />}/>
          <Route path="cakes" element={<Cakes />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
