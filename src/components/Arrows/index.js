import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const angleLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const angleRight = <FontAwesomeIcon icon={faAngleRight} />;

function Arrows({ data, updateIndex }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          let index = currentIndex;
          let slidesLength = data.length;
          if (index < 1) {
            index = slidesLength;
          }

          --index;

          setCurrentIndex(index);
          updateIndex(index);
        }}
        className="carousel__arrow carousel__arrow--left"
      >
        {angleLeft}
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
          setCurrentIndex(index);
          updateIndex(index);
        }}
        className="carousel__arrow carousel__arrow--right"
      >
        {angleRight}
      </a>
    </>
  );
}

export default Arrows;
