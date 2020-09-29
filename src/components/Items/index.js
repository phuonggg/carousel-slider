import React, { useState } from "react";
import "./style.css";
import Arrows from "../Arrows";
import Item from "../Item";

// const moveLeft = (index) => {
//   console.log("left");
// };

// const moveRight = () => {
//   console.log("right");
// };

function Items({ data }) {
  let myIndex = (index) => {
    console.log("XXXX", index);
  };
  return (
    <div className="carousel">
      <ul className="carousel__slides">
        {data.map((item, index) => {
          return (
            <Item
              key={index}
              content={item.content}
              author={item.author}
              source={item.source}
            />
          );
        })}
      </ul>
      <Arrows
        data={data}
        myIndex={myIndex}
        // moveLeft={moveLeft} moveRight={moveRight}
      />
    </div>
  );
}

export default Items;
