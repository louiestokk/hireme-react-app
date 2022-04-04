import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Arbetstagare from "./pages/Arbetstagare/Arbetstagare";
import Arbetsgivare from "./pages/Arbetsgivare/Arbetsgivare";
function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arbetsgivare" element={<Arbetsgivare />} />
        <Route path="/arbetstagare" element={<Arbetstagare />} />
      </Routes>
    </Router>
  );
}

export default App;
