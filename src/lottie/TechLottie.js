import React from "react";
import Lottie from "react-lottie";

const TechLottie = ({ lotti, height, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lotti,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={height} width={width} />
    </div>
  );
};

export default TechLottie;
