import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Home.css";
  
const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect( () => {
    const fetchData = async() => {
    try {
      let url = 'https://fakestoreapi.com/products';
      let res = await fetch(url);
      let data = await res.json();
      console.log(data);
      setProducts(data);
      setLoading(false)
      
    } catch (error) {
      console.log(error)
      setLoading(false)
    }}
    fetchData();
  }, [])
  
 if (loading) {
  return <Loader />
 }

  return (
    <> 
     {products.map((card) => (
        <Link to={`/Card/${card.id}`} key={card.id} className="container">
          <div className="card-container">
            <div className="card-image">
              <img className="image" src={card.image} alt="Girl in a jacket" />
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

export default Home;
