import React, { useEffect, useState } from "react";
import "./CartItems.css";

export default function CartItems() {
  const [totalprice, settotalprice] = useState(0);
  const [cartItems, setCartItem] = useState([]);

  useEffect(() => {
    let cartItems = JSON.parse(localStorage.getItem("cart"));

    if (cartItems) {
      let itemprice = cartItems.reduce((acc, item) => {
        return acc + item.price;
      }, 0);
      settotalprice(itemprice);
      setCartItem(cartItems);
    }
  }, []);

  const IncQuantity = (idx) => {
    let cartItem = [...cartItems];
    cartItem[idx].quantity++;
    let newtotalprice = totalprice;
    newtotalprice += cartItem[idx].price;

    localStorage.setItem("cart", JSON.stringify(cartItem));

    setCartItem(cartItem);
    settotalprice(newtotalprice);
  };

  const DecQuantity = (idx) => {
    let cartItem = [...cartItems];
    if (cartItem[idx].quantity > 1) {
      cartItem[idx].quantity--;
      let newtotalprice = totalprice;
      newtotalprice -= cartItem[idx].price;

      localStorage.setItem("cart", JSON.stringify(cartItem));

      settotalprice(newtotalprice);
      setCartItem(cartItem);
    }
  };

  const RemoveItem = (idx) => {
    let cartItem = [...cartItems];
    let removedItem = cartItem.splice(idx, 1);
    let newprice = totalprice;
    newprice -= removedItem[0].price * removedItem[0].quantity;
    localStorage.setItem("cart", JSON.stringify(cartItem));
    setCartItem(cartItem);
    settotalprice(newprice);
  };
  //condition not rendering
  if (!cartItems) {
    return <p className="cart-para">No Product in your Cart</p>;
  }

  return (
    <>
      <div className="full-box">
        {cartItems.map((item, index) => (
          <div className="container-block" key={item.id}>
            <div className="cart-container">
              <div className="cartItem-detail">
                <img className="cart-img" src={item.image} />
              </div>
              <div className="cartItem-price">${item.price}</div>
              <div className="cartItem-quantity">
                <button className="cart-btn" onClick={() => DecQuantity(index)}>
                  -
                </button>
                <button className="cart-btn2">{item.quantity}</button>
                <button className="cart-btn" onClick={() => IncQuantity(index)}>
                  +
                </button>
              </div>
              <div
                className="cartItem-remove"
                onClick={() => RemoveItem(index)}
              >
                <p>Remove</p>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-footer">
          <div className="cart-total">${Number(totalprice.toFixed(2))}</div>
          <div className="cart-payment">Pay Now</div>
        </div>
      </div>
    </>
  );
}
