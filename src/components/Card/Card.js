import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import "./Card.css";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Config/FirebaseConfig";

export default function Card() {
  const { id } = useParams();
  const [product, setProducts] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const fetchingData = async () => {
      try {
        const docRef = doc(db, "products", id)
        let product = await getDoc(docRef)
        setProducts(product.data());
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };
    fetchingData();
  }, [id]);

  const btnHandler = () => {
    console.log(product);

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingproduct = cart.find((item) => item.id === id);

    if (existingproduct) {
      existingproduct.quantity++;
    } else {
      cart.push({ ...product, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Item added to cart. Successfully!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  if (loader) {
    return <Loader />;
  }

  return (
    <>
      <div className="box">
        <div className="card-box">
          <div className="img-box">
            <img className="card-img" src={product.image} alt="product image" />
          </div>
          <div className="card-detail">
            <div className="titel-box">{product.name}</div>
            <div className="cetagory-box">{product.category}</div>
            {product.quantity !== 0? <div className="quantity-box">Available:  {product.quantity}</div> : <div className="quantity-box">Out Of Stock</div>}
            <div className="price-box">${product.price}</div>
            {product.quantity !== 0? <button onClick={btnHandler} className="cart-box">
              Add to cart
            </button> :
          <button className="cart-box">
            Out Of Stock
          </button>}
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
