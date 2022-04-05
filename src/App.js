import React, { useEffect } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Arbetstagare from "./pages/Arbetstagare/Arbetstagare";
import Arbetsgivare from "./pages/Arbetsgivare/Arbetsgivare";
import { addJobs } from "./redux-toolkit/jobs/jobsSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
function App() {
  const dispatch = useDispatch();

  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Host": "indeed11.p.rapidapi.com",
      "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    },
    body: '{"location":"New York, NY","page":"1","search_terms":"developer"}',
  };

  const fetchJobs = async () => {
    try {
      fetch("https://indeed11.p.rapidapi.com/", options)
        .then((response) => response.json())
        .then((response) => dispatch(addJobs(response.result)))
        .catch((err) => console.error(err));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchJobs();
  }, []);
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
