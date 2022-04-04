import React from "react";
import "./Banner.css";
import { FaRegHospital } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";
import { MdOutlineLocalHospital } from "react-icons/md";
import { FaTruckLoading } from "react-icons/fa";
const Banner = () => {
  return (
    <div className="banner">
      <h1>Hitta uppdrag inom</h1>
      <section>
        <div className="category">
          <article className="article">
            <h4>Vård</h4>
            <MdOutlineLocalHospital className="banner-icon" />
          </article>
          <div className="banner-card">
            <p className="banner-card-p">Lista annonser här</p>
          </div>
        </div>
        <div className="category">
          <article className="article">
            <h4>Omsorg</h4>
            <FaRegHospital className="banner-icon" />
          </article>
          <div className="banner-card">
            <p className="banner-card-p">Lista annonser här</p>
          </div>
        </div>
        <div className="category">
          <article className="article">
            <h4>Transport</h4>
            <FaTruck className="banner-icon" />
          </article>
          <div className="banner-card">
            <p className="banner-card-p">Lista annonser här</p>
          </div>
        </div>
        <div className="category">
          <article className="article">
            <h4>Logistik</h4>
            <FaTruckLoading className="banner-icon" />
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
