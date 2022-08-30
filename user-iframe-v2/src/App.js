import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./views/FormPage";
import IframePage from "./views/IframePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:domain/ls" element={<FormPage />} />
        <Route path="/:domain" element={<IframePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
