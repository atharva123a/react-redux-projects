import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  // default index:
  const [index, setIndex] = useState(0);

  // using state value:
  const { id, name, job, image, text } = people[index];

  const checkIndex = (newIndex) => {
    if (newIndex < 0) {
      return people.length - 1;
    }

    if (newIndex >= people.length) {
      return 0;
    }

    return newIndex;
  };

  const prevIndex = () => {
    setIndex((curIndex) => {
      let newIndex = curIndex - 1;
      return checkIndex(newIndex);
    });
  };

  const nextIndex = () => {
    setIndex((curIndex) => {
      let newIndex = curIndex + 1;
      return checkIndex(newIndex);
    });
  };

  const randomIndex = () => {
    let newIndex = Math.floor(Math.random() * people.length);
    if (newIndex === index) {
      newIndex = newIndex + 1;
    }

    setIndex(() => {
      return checkIndex(newIndex);
    });
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <h4 className="job">{job}</h4>
      <p className="info">{text}</p>
      <div className="btn-container">
        <button className="prev-btn" onClick={prevIndex}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextIndex}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomIndex}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
