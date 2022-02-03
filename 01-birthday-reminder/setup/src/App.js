import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  return (
    <section className="container">
      <List data={data} />
    </section>
  );
}

export default App;
