import React, { useEffect, useState } from "react";
import Productcard from "../ProductCard/Productcard";
import Loader from "../Loader/Loader";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

export default function Electronics() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingData = async () => {
      const docRef = collection(db, "products");
      try {
        const querySnapshot = await getDocs(docRef);
        let Products = [];
        querySnapshot.forEach((doc) => {
          Products.push({...doc.data(), id: doc.id});
        });

        setProducts(Products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchingData();
  }, []);

  const filteredProducts = products.filter((item) => {
    return item.category === "Electronics";
  });

  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <div className="flex-container">
        {filteredProducts.map((card) => (
          <Productcard
            id={card.id}
            image={card.image}
            title={card.name}
            quantity={card.quantity}
            category={card.category}
            price={card.price}
          />
        ))}
      </div>
    </>
  );
}
