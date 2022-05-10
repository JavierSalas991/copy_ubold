import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calendario from "./components/calendar/Calendario";
import Dashboard1 from "./components/dashboards/Dashboard1";
import Inicio from "./components/inicio/Inicio";


function App(history) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="inicio/dashboards/dashboard1" element={
          <Inicio>
            <Dashboard1></Dashboard1>
          </Inicio>
        } />
        <Route path="inicio/calendar" element={
          <Inicio>
            <Calendario></Calendario>
          </Inicio>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
