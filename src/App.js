import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./styles/App.scss";

import Home from "./components/pages/Home";
import Header from "./components/navigation/Header";
import Pokemon from "./components/pages/Pokemon";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pokemon/:id" element={<Pokemon />} />
      </Routes>
    </div>
  );
}

export default App;
