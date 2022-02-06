import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <header>
        <h4>{title}</h4>
        {/* toggle functionality! */}
        <button className="btn" onClick={() => setReadMore(!readMore)}>
          {readMore ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      <p>{readMore ? `${info}` : ""}</p>
    </>
  );
};

export default Question;
