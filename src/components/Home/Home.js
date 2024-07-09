import React, { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Productcard from "../ProductCard/Productcard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import "./Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      const docRef = collection(db, "products");
      try {
        const querySnapshot = await getDocs(docRef);
        let Products = [];
        querySnapshot.forEach((doc) => {
          Products.push({...doc.data(), id:doc.id});
        });

        setProducts(Products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  if (loading) {
    return <Loader />;
  }
  console.log(products)

  return (
    <>
      <div className="flex-container">
        {products.map((card) => (
          <Productcard
            id={card.id}
            image={card.image}
            name ={card.name}
            category={card.category}
            quantity={card.quantity}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
