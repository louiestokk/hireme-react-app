import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import { VardLottie } from "../../lottie/VardLottie";
import care from "../../utils/animation/care.json";
import delivery from "../../utils/animation/delivery.json";
import TransportLottie from "../../lottie/TransportLottie";
import TechLottie from "../../lottie/TechLottie";
import tech from "../../utils/animation/tech.json";
import { getJobs } from "../../redux-toolkit/jobs/jobsSlice";
import { useSelector } from "react-redux";
import { IoIosBusiness } from "react-icons/io";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { BiMap } from "react-icons/bi";
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
                <h4>
                  <IoIosBusiness /> {job.company_name}
                </h4>
                <h5>{job.job_title.split("new")[1]}</h5>
                <p>
                  <BsFillCalendarDateFill /> {job.date}
                </p>
                <p>
                  <BiMap /> {job.location}
                </p>
                <Link to={`/activejobs/${job.company_name}`}>read more...</Link>
              </div>
            ))}
          </div>
        </div>

        <div className="category">
          <article className="article">
            <div>
              <TransportLottie lotti={delivery} heigth={200} width={200} />
            </div>
          </article>
          <div className="banner-card">
            {jobs?.map((job, ind) => {
              return (
                <div key={ind} className="item">
                  <h4>Company: {job.company_name}</h4>
                  <h5>{job.job_title.split("new")[1]}</h5>
                  <p>
                    <BsFillCalendarDateFill />
                    {job.date}
                  </p>
                  <p>{job.location}</p>
                  <Link to={`/activejobs/${job.company_name}`}>read more</Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="category">
          <article className="article">
            <VardLottie lotti={care} width={200} height={120} />
          </article>
          <div className="banner-card">
            {jobs?.map((job, ind) => (
              <div key={ind} className="item">
                <h4>Company: {job.company_name}</h4>
                <h5>{job.job_title.split("new")[1]}</h5>
                <p>{job.date}</p>
                <p>{job.location}</p>
                <Link to={`/activejobs/${job.company_name}`}>read more</Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
