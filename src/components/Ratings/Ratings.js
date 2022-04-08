import React, { useEffect } from "react";
import "./Ratings.css";
import { ratings } from "../../utils/ratings";
import { FaHireAHelper } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi";

const Ratings = () => {
  const handleClick = (e) => {
    e.currentTarget.style.opacity = 1;
    e.currentTarget.style.borderTop = "3px solid #4338ca";
  };
  const handleLeave = (e) => {
    e.currentTarget.style.opacity = 0.4;
    e.currentTarget.style.borderTop = "";
  };
  return (
    <section className="ratings">
      {ratings?.map((rating, ind) => {
        console.log(ind);
        return (
          <article
            key={rating.id}
            className="container"
            onMouseOver={handleClick}
            onMouseLeave={handleLeave}
            id={rating.id}
            style={{
              opacity: rating.id === 1 ? "1" : "0.4",
              borderTop: rating.id === 1 && "3px solid #4338ca",
            }}
          >
            <h4>
              <FaHireAHelper className="icon" /> {rating.name}
            </h4>
            <p>{rating.desc}</p>
            <h4>{rating.typ}</h4>
            <span>{rating.date}</span>
            <HiOutlineUsers className="icon-fot" />
          </article>
        );
      })}
    </section>
  );
};

export default Ratings;
