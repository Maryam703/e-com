import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"
import Loader from "../Loader/Loader";

export default function Women() {
  const [Products, setProducts] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchingData = async() => {
      try {

        let res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);
        setloading(false)

      } catch (error) {
        console.log(error)
        setloading(false)
      }
    }
    fetchingData();
  }, [])
 
  const newARRY = Products.filter((item) => {
    return item.category === "women's clothing";
  });
     
  if (loading) {
    return <Loader />
  }
  return (
    <> 
    {newARRY.map((card) => (
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
