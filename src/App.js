import React from "react";
import Principal from "./components/principal";
import Articulo from "./components/articulo";
import "./css/principal.css";
import "./css/footer.css";
import './css/articulo.css';
import "../src/css/busos.css";
import "../src/css/articulo2.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import Busos from "./components/secundario";
import Articulo2 from "./components/articulo2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/articulo" element={<Articulo />} />  
        <Route path="/busos" element={<Busos />} />  
        <Route path="/articulo2" element={<Articulo2 />} />  

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;