import "./App.css";
import React from "react";
import Home from "./components/Home/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Verify from "./components/Verify/Verify";
import Dashboard from "./components/Dashboard/Dashboard";
import IdVerify from "./components/IdVerify/IdVerify";
import Email from "./components/Dashboard/Email";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/IdVerify" element={<IdVerify />} />
          <Route path="/rubel" element={<Dashboard />} />
          <Route path="/id" element={<Email />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
