import React, { useEffect, useState } from "react";
import Productcard from "../ProductCard/Productcard";
import {getDocs, collection} from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import Loader from "../Loader/Loader";

export default function Women() {
  const [Products, setProducts] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchingData = async() => {
      const docRef = collection(db, "products")
      try {
        const querySnapshot = await getDocs(docRef);
        let Product = [];
        querySnapshot.forEach((doc) => Product.push({...doc.data(), id: doc.id}));
        setProducts(Product)
        setloading(false)

      } catch (error) {
        console.log(error)
        setloading(false)
      }
    }
    fetchingData();
  }, [])
 
  const newARRY = Products.filter((item) => {
    return item.category === "Women Clothing";
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
      quantity={card.quantity}
      category={card.category}
      price={card.price}
      />
     ))}
     </div>
   </>
  );
}
