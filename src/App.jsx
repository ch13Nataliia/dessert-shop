import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Macaroons from "./pages/Macaroons";
import Cakes from "./pages/Cakes";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import ChocoCake from "./pages/ChocoCake";
import FruitCake from "./pages/FruitCake";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={ <About />}/>
          <Route path="macaroons" element={<Macaroons />}/>
          <Route path="cakes" element={<Cakes />}/>
          <Route path="chococake" element={<ChocoCake />}/>
          <Route path="fruitcake" element={<FruitCake />}/>
          <Route path="*" element={<NotFound />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
