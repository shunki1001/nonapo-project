import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./views/FormPage";
import IframePage from "./views/IframePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* iframeページ */}
        <Route path="/iframe/:domain" element={<IframePage />} />
        {/* iframeから遷移したページ */}
        <Route path="/:domain" element={<FormPage />} />
        {/* 個人リンクから遷移したページ */}
        <Route path="/:domain/ls/:index" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
