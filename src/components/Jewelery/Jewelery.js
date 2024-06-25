import React, { useEffect, useState } from "react";
import Productcard from "../ProductCard/Productcard";
import axios from 'axios'
import Loader from '../Loader/Loader'

export default function Jewelery() {
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
    <div className="flex-container">
    {newARRY.map((card) => (
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
