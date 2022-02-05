import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // default index:
  const [index, setIndex] = useState(0);

  const { image, name, job, text } = people[index];

  const checkId = (id) => {
    if (id < 0) {
      return people.length - 1;
    } else if (id >= people.length) {
      return 0;
    }
    return id;
  };

  const nextReview = (id) => {
    let newId = id + 1;
    newId = checkId(newId);
    setIndex(newId);
  };

  const prevReview = (id) => {
    let newId = id - 1;
    newId = checkId(newId);
    setIndex(newId);
  };

  const surpriseReview = (id) => {
    let randomId = Math.floor(Math.random() * people.length);
    if (randomId === id) {
      randomId += 1;
    }
    randomId = checkId(randomId);
    setIndex(randomId);
  };

  return (
    <>
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={() => prevReview(index)}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={() => nextReview(index)}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={() => surpriseReview(index)}>
          Surprise me!
        </button>
      </div>
    </>
  );
};

export default Review;
