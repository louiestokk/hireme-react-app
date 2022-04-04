import React from "react";
import "./Main.css";
import MainLottie from "../../lottie/MainLottie";
import hire from "../../utils/animation/hiring.json";
const Main = () => {
  return (
    <main className="main">
      <section className="main-info">text här</section>
      <section className="main-lottie">
        <MainLottie lotti={hire} height={400} width={400} />
      </section>
    </main>
  );
};

export default Main;
