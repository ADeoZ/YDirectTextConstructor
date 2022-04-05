import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdsConstructor from "./components/AdsConstructor";
import "./App.css";
import AdsPreview from "./components/AdsPreview";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<AdsConstructor />} />
        <Route path="/preview" element={<AdsPreview />}>
          <Route path=":link" element={<AdsPreview />} />
        </Route>
        <Route path="*" element={<AdsConstructor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
