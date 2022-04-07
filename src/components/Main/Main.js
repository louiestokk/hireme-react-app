import React from "react";
import "./Main.css";
import MainLottie from "../../lottie/MainLottie";
import hire from "../../utils/animation/hiring.json";
const Main = ({ title, desc, btn }) => {
  return (
    <main className="main">
      <section className="main-info">
        <h1>{title}</h1>
        <p>{desc}</p>
        <button className="main-register">{btn}</button>
      </section>
      <section className="main-lottie">
        <MainLottie lotti={hire} height={450} width={450} />
      </section>
    </main>
  );
};

export default Main;
