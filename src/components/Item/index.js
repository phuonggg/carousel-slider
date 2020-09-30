import React from "react";

function Item({ currentIndex, activeIndex, src }) {
  return (
    <li
      className={`carousel__slide ${
        currentIndex === activeIndex ? "carousel__slide--active" : ""
      }`}
    >
      <img src={src}></img>
    </li>
  );
}

export default Item;
