import React from "react";
import './Card.css'
const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button>Order Now</button>
    </div>
  );
};

export default Card;
