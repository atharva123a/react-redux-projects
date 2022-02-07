import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

function App() {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(items);

  const changeCat = (category) => {
    setCategories(category);
  };

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    setMenuItems(items.filter((item) => item.category === category));
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <Categories categories={categories} filterItems={filterItems} />
        </div>
        <div className="section-center">
          <Menu items={menuItems} />
        </div>
      </section>
    </main>
  );
}

export default App;
