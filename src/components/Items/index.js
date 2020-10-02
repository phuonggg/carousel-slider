import React, { useState } from "react";
import Arrows from "../Arrows";
import Item from "../Item";
import Indicators from "../Indicators";

function Items({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const updateIndex = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className="carousel">
      <ul className="carousel__slides">
        {data.map((item, index) => {
          return (
            <Item
              currentIndex={index}
              activeIndex={activeIndex}
              key={index}
              src={item.src}
            />
          );
        })}
      </ul>
      <Arrows data={data} updateIndex={updateIndex} activeIndex={activeIndex} />
      <Indicators
        data={data}
        updateIndex={updateIndex}
        activeIndex={activeIndex}
      />
    </div>
  );
}

export default Items;
