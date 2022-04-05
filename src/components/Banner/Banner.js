import React from "react";
import "./Banner.css";
import { VardLottie } from "../../lottie/VardLottie";
import care from "../../utils/animation/care.json";
import delivery from "../../utils/animation/delivery.json";
import TransportLottie from "../../lottie/TransportLottie";
import TechLottie from "../../lottie/TechLottie";
import tech from "../../utils/animation/tech.json";
import { getJobs } from "../../redux-toolkit/jobs/jobsSlice";
import { useSelector } from "react-redux";
const Banner = () => {
  const jobs = useSelector(getJobs);

  return (
    <div className="banner">
      <h1>Aktiva uppdrag inom</h1>
      <section>
        <div className="category">
          <article className="article">
            <div>
              <TechLottie lotti={tech} heigth={200} width={200} />
            </div>
          </article>
          <div className="banner-card">
            {jobs?.map((job, ind) => (
              <div key={ind} className="item">
                <h4>Company: {job.company_name}</h4>
                <h5>{job.job_title}</h5>
                <p>{job.date}</p>
                <p>{job.location}</p>
                <button>read more</button>
              </div>
            ))}
          </div>
        </div>
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
