import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import Loader from '../Loader/Loader'

export default function Pret() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  
useEffect(() => {
  const fetchingData = async() => {
    try {
      let res = await axios.get('https://fakestoreapi.com/products');
      setProducts(res.data);
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  fetchingData();
},[])

  const newARRY = products.filter((item) => {
    return item.category === "jewelery";
  });

if (loading) {
  return <Loader />
}

  return (
    <>
      {newARRY.map((card) => (
        <Link to={`/Card/${card.id}`} key={card.id} className="container">
          <div className="card-container">
          <div className="card-image">
            <img className="image" src={card.image} alt="Girl in a jacket"/>
            </div>
            <div className="card-cetagory">{card.category}</div>
            <div className="card-titel">{card.title}</div>
            <div className="card-price">${card.price}</div>
            <div className="card-cart">Add to cart</div>
          </div>
        </Link>
      ))}
    </>
  );
}
