import React from "react";
import "./JobDetails.css";
import { useParams } from "react-router-dom";
import { getJobs } from "../../redux-toolkit/jobs/jobsSlice";
import { useSelector } from "react-redux";
import { BiMap } from "react-icons/bi";
import { businessdata } from "../../redux-toolkit/jobs/jobsSlice";
const JobDetails = () => {
  const jobs = useSelector(getJobs);
  const { name } = useParams();
  const businessData = useSelector(businessdata);
  console.log(businessData);

  return (
    <div className="jobDetails">
      {jobs
        ?.filter((job) => job.company_name === name)
        .map((el, ind) => {
          return (
            <div className="jobDetails-item" key={ind}>
              <h4>{el.company_name}</h4>
              <h5>Posted: {el.date.split("Posted")[1]}</h5>
              <h4>{el.job_title.split("new")}</h4>
              <h5>
                <BiMap /> {el.location}
              </h5>
              <h5>Salary: {el.salary === "none" ? "negotiable" : el.salary}</h5>
              <p>Job description: {el.summary}</p>
            </div>
          );
        })}
    </div>
  );
};

export default JobDetails;
