import React from "react";
import "./Banner.css";
import { FaRegHospital } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaTruckLoading } from "react-icons/fa";
import { VardLottie } from "../../lottie/VardLottie";
import care from "../../utils/animation/care.json";
import delivery from "../../utils/animation/delivery.json";
import TransportLottie from "../../lottie/TransportLottie";
const Banner = () => {
  return (
    <div className="banner">
      <h1>Hitta uppdrag inom</h1>
      <section>
        <div className="category">
          <article className="article">
            <div>
              <VardLottie lotti={care} heigth={200} width={200} />
            </div>
          </article>
          <div className="banner-card">
            <p className="banner-card-p">Lista annonser här</p>
          </div>
        </div>
        <div className="category">
          <article className="article">
            <div>
              <TransportLottie lotti={delivery} heigth={200} width={200} />
            </div>
          </article>
          <div className="banner-card">
            <p className="banner-card-p">Lista annonser här</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
