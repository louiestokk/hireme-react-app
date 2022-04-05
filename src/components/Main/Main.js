import React from "react";
import "./Main.css";
import MainLottie from "../../lottie/MainLottie";
import hire from "../../utils/animation/hiring.json";
const Main = () => {
  return (
    <main className="main">
      <section className="main-info">
        <h1>Hitta nya karriärmöjligheter</h1>
        <p>
          Trött på att ge dig in i långa processer utan att veta vad
          arbetsgivare erbjuder? På HireMe anger du vad du vill jobba med, dina
          krav på arbetsgivaren och önskad lön. Sen låter du hundratals vård,
          transport och tech bolag ta kontakt med dig. Många söker efter just
          dina kunskaper. Kom igång snabbt med jobb på Hireme.
        </p>
        <button className="main-register">Registrera dig</button>
      </section>
      <section className="main-lottie">
        <MainLottie lotti={hire} height={450} width={450} />
      </section>
    </main>
  );
};

export default Main;
