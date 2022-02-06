import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const questions = data;

  return (
    <main>
      <div className="container">
        <h3>Question And Answers About Login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <article className="question" key={question.id}>
                <SingleQuestion {...question} />
              </article>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
