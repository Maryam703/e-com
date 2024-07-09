import React, { useEffect, useState } from "react";
import Productcard from "../ProductCard/Productcard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";
import Loader from "../Loader/Loader";

export default function MensClothing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
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
    fetchData();
  }, []);

  let filteredProducts = products.filter(
    (item) => item.category === "Men Clothing"
  );

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
