import React, { useEffect, useState } from "react";
import { Link, useNavigate,} from "react-router-dom";
import Loader from "../Loader/Loader";
import axios from 'axios';
import "./Home.css";
  
const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()


  useEffect( () => {
    const fetchData = async() => {
    try {
      let url = 'https://fakestoreapi.com/products';
      let res = await axios.get(url);
      setProducts(res.data);
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
      <div className="container">
        <div className="card-container">
        <Link to={`/Card/${card.id}`} key={card.id} >
            <div className="card-image">
              <img className="image" src={card.image} alt="Girl in a jacket" />
            </div>
            <div className="card-titel">{card.title}</div>
            <div className="card-cetagory">{card.category}</div>
            <div className="card-price">${card.price}</div>
        </Link>
        <button className="card-cart" >Add to cart</button >
        </div>
        </div>
      ))}
    </>
  );
}

export default Home;