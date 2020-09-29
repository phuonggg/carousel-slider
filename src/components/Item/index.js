import React from "react";
import "./style.css";

function Item({ currentIndex, content, author, source }) {
  console.log("current index", currentIndex);
  return (
    <li className="carousel__slide ">
      <p className="carousel-slide__content">{content}</p>
      <p>
        <strong className="carousel-slide__author">{author}</strong>
        <small className="carousel-slide__source">{source}</small>
      </p>
    </li>
  );
}

export default Item;
