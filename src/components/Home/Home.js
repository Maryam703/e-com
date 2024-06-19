import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { Products } from "../Data/DataApi";

  

export default function Home() {
  return (
    <>
      {Products.map((card) => (
        <Link to={`/Card/${card.id}`} key={card.id} className="container">
          <div className="card-container">
            <div className="card-image">
              <img className="image" src={card.image} alt="Girl in a jacket" />
            </div>
            <div className="card-cetagory">{card.cetagory}</div>
            <div className="card-titel">{card.titel}</div>
            <div className="card-price">{card.Price}</div>
            <div className="card-cart">Add to cart</div>
          </div>
        </Link>
      ))}
    </>
  );
}
