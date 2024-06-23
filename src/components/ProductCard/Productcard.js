import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Productcard.css";

export default function Productcard({ id, image, title, category, price }) {
  const btnHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ id, image, category, title, price, quantity: 1 });

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <>
      <div className="container">
        <div className="card-container">
          <Link to={`/Card/${id}`} key={id}>
            <div className="card-image">
              <img className="image" src={image} alt="Girl in a jacket" />
            </div>
            <div className="card-titel">{title}</div>
            <div className="card-cetagory">{category}</div>
            <div className="card-price">${price}</div>
          </Link>
          <button className="card-cart" onClick={btnHandler}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
}
