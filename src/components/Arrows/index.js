import React, { useState } from "react";
import "./style.css";

function Arrows({ data, myIndex }) {
  // { moveLeft, moveRight }
  const [currentIndex, setCurrentIndex] = useState(-1);
  // console.log("YOOOOOOOO", currentIndex);
  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          let index = currentIndex;
          let slidesLength = data.length - 1;
          if (index < 1) {
            index = slidesLength;
          }

          --index;

          setCurrentIndex(index);
          myIndex(index);
        }}
        className="carousel__arrow carousel__arrow--left"
      >
        <span className="fa fa-2x fa-angle-right"></span>
      </a>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          let index = currentIndex;
          let slidesLength = data.length - 1;
          if (index === slidesLength) {
            index = -1;
          }

          ++index;
          console.log("INDEX", index);
          setCurrentIndex(index);
          myIndex(index);
        }}
        className="carousel__arrow carousel__arrow--right"
      >
        <span className="fa fa-2x fa-angle-left"></span>
      </a>
    </>
  );
}

export default Arrows;
