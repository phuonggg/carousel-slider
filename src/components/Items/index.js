import React from "react";
import "./style.css";
import Arrows from "../Arrows";
import Item from "../Item";

function Items(props) {
  return (
    <div className="carousel">
      <div className="carousel__slides">
        {props.data.map((item) => (
          <Item
            key={item.author}
            content={item.content}
            author={item.author}
            source={item.source}
          />
        ))}
        <Arrows />
      </div>
    </div>
  );
}

export default Items;
