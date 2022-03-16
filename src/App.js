import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Constructor from "./components/Constructor";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <header className="header">
        <h1>Конструктор объявлений Яндекс.Директ</h1>
      </header>
      <Routes>
        <Route path="/" element={<Constructor />}>
          <Route path=":link" element={<Constructor />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
