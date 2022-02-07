import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import Button from "./Button";
import Title from "./Title";
import data from "./data";
function App() {
  const [people, setPeople] = useState(data);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    // handle index out of bounds:
    let lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    // we need a cleanup function here, otherwise our functionality breaks because we keep calling use effect whenever we manually toggle next/prev: !!
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    // clear interval:
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="section">
      <Title />
      <div className="section-center">
        {people.map((person, personIndex) => {
          const { id, image, name, title, quote } = person;

          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }

          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === people.length - 1)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={title} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
        <Button setIndex={setIndex} curIndex={index} />
      </div>
    </section>
  );
}

export default App;
