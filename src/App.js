import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./components/inicio/Inicio";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="inicio/dashboards" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
