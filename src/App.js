import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
