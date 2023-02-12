import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/News";

function App() {
  return (
    <>
      <Home />
      <News/>
    </>  
  );
}

export default App;
