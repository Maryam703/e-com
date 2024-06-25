import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import axios from 'axios';
import Productcard from "../ProductCard/Productcard";
import "./Home.css"
  
const Home = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)


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
    <div className="flex-container">
     {products.map((card) => (
        <Productcard
         id={card.id}
         image={card.image}
         title={card.title}
         category={card.category}
         price={card.price}
         />
      ))}
      </div>
    </>
  );
}

export default Home;