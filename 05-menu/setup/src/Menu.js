import React from "react";

const Menu = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        const { img, title, price, desc, id } = item;
        return (
          <article key={id} className="menu-item">
            <img className="photo" src={img} alt={title} />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${`${Math.round(price)}`}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Menu;
