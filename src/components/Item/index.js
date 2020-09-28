import React from "react";
import "./style.css";

function Item({ content, author, source }) {
  return (
    <div className="carousel__slide carousel__slide--active">
      <p className="carousel-slide__content">{content}</p>
      <p>
        <strong className="carousel-slide__author">{author}</strong>
        <small className="carousel-slide__source">{source}</small>
      </p>
    </div>
  );
}

export default Item;
