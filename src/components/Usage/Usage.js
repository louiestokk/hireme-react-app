import React from "react";
import "./Usage.css";
import Step from "./Steps/Step";
const Usage = () => {
  return (
    <div className="usage">
      <h2>Så funkar HireMe</h2>
      <div className="container">
        <Step />
        <Step />
        <Step />
        <Step />
      </div>
    </div>
  );
};

export default Usage;
