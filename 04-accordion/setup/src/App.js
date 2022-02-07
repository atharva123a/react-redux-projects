import React, { useState } from "react";

import data from "./data";
import Question from "./Question";

const App = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>question and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <article className="question">
                <Question {...question} />
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
};

export default App;
