import React from "react";
import Principal from "./components/principal";
import Articulo from "./components/articulo";
import "./css/principal.css";
import "./css/footer.css";
import './css/articulo.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/articulo" element={<Articulo />} />  
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;