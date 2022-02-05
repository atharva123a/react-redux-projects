import React from "react";
import reviews from "./data";
import Review from "./Review";
function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <Review />
        </article>
      </section>
    </main>
  );
}

export default App;
