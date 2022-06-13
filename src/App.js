//react imports
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//component imports
import All from "./components/All";
import Card from "./components/Card";
import Missing from "./components/Missing";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/pokemon/:name" element={<Card />} />

      <Route path="/404" element={<Missing />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Routes>
  );
};

export default App;
