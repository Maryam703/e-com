import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from '../Loader/Loader'

export default function Electronics() {
  const [Products, setProducts] = useState([])
  const [loader, setLoader] = useState(true)
  

  useEffect(() => {
    const fetchingData = async() => {
      try {

        let res = await fetch('https://fakestoreapi.com/products');
        let data = await res.json();
        console.log(data);
        setProducts(data);
        setLoader(false)

      } catch (error) {
        console.log(error)
        setLoader(false)
      }
    }
    fetchingData();
  }, [])
 
  const newARRY = Products.filter((item) => {
    return item.category === "electronics";
  });



     if (loader) {
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
            <div className="card-titel">{card.title}</div>
            <div className="card-cetagory">{card.category}</div>
            <div className="card-price">${card.price}</div>
            <div className="card-cart">Add to cart</div>
          </div>
        </Link>
      ))}
    </>
  );
}
