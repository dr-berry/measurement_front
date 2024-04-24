import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/register";
import Measurement from "./components/measurement";

export const BASE_URL = "http://api.greenberry.site:3000";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="/measurement" element={<Measurement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
