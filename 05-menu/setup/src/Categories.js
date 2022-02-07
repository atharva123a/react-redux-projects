import React from "react";

const Categories = ({ categories, filterItems }) => {
  // logic for the categories displayed:
  return (
    <>
      {categories.map((category) => {
        return (
          <button
            key={categories.indexOf(category)}
            className="filter-btn"
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </>
  );
};

export default Categories;
