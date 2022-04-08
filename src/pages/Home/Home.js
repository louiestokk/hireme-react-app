import React from "react";
import "./Home.css";
import Main from "../../components/Main/Main";
import Banner from "../../components/Banner/Banner";
import Ratings from "../../components/Ratings/Ratings";
import Usage from "../../components/Usage/Usage";
const Home = () => {
  return (
    <div className="home">
      <Main
        title={"Hitta nya karriärmöjligheter"}
        desc={
          "Trött på att ge dig in i långa processer utan att veta vad arbetsgivare erbjuder? På HireMe anger du vad du vill jobba med, dina krav på arbetsgivaren och önskad lön. Sen låter du hundratals vård, transport och tech bolag ta kontakt med dig. Många söker efter just dina kunskaper. Kom igång snabbt med jobb på Hireme."
        }
        btn={"Registrera dig"}
      />
      <Banner />
      <Usage />
      <Ratings />
    </div>
  );
};

export default Home;
