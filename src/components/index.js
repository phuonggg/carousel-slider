import React from "react";
import "./style.css";
import { carouselSlidesData } from "../data";
import Items from "./Items";

function Carousel() {
  return (
    <div className="carousel-container">
      <Items data={carouselSlidesData} />
    </div>
  );
}

export default Carousel;
