import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const Button = ({ setIndex, curIndex }) => {
  return (
    <>
      <button className="prev">
        <FiChevronLeft onClick={() => setIndex(curIndex - 1)} />
      </button>
      <button className="next" onClick={() => setIndex(curIndex + 1)}>
        <FiChevronRight />
      </button>
    </>
  );
};

export default Button;
