import React from "react";

function Indicator({ updateIndex, currentIndex, activeIndex }) {
  return (
    <li>
      <a
        className={
          currentIndex === activeIndex
            ? "carousel__indicator carousel__indicator--active"
            : "carousel__indicator"
        }
        onClick={(e) => {
          e.preventDefault();
          updateIndex(currentIndex);
        }}
      />
    </li>
  );
}

export default Indicator;
