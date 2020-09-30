import React, { useState } from "react";
import Arrows from "../Arrows";
import Indicator from "../Indicator";

function Indicators({ data, updateIndex, activeIndex }) {
  return (
    <div className="carousel">
      <ul className="carousel__indicators">
        {data.map((item, index) => {
          return (
            <Indicator
              currentIndex={index}
              key={index}
              updateIndex={updateIndex}
              activeIndex={activeIndex}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Indicators;
