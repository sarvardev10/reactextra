import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "./components/login/Login";
import { Cars } from "./components/cars/Cars";

function App() {
  return (
    <>
      <h1 className="text-center">React-router-dom</h1>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
    </>
  );
}

export default App;
