import React, { useEffect, useState } from "react";
import Productcard from "../ProductCard/Productcard";
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
      <Productcard
      id={card.id}
      image={card.image}
      title={card.title}
      category={card.category}
      price={card.price}
      />
     ))}
   </>
  );
}
