import React, { useState } from "react";
import "./Modal.css";
import { db } from "../../Config/FirebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";

function Modal({
  closeModal,
  cartItems,
  totalprice,
  ResetCart = { ResetCart },
}) {
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState();
  const [number, setNumber] = useState();
  const [cashOnDelivery, setCashOnDelivery] = useState(false);
  const [cardPayment, setCardPayment] = useState(false);

  const data = {
    name: name,
    adress: adress,
    city: city,
    postalcode: postalCode,
    number: number,
    cashOnDelivery: cashOnDelivery,
    items: cartItems,
    price: totalprice,
  };

  const OrderPlace = async () => {
    try {
       const orderRef = collection(db, "orders");
      await addDoc(orderRef, data);

      let cartItems = JSON.parse(localStorage.getItem("cart"));
      console.log(cartItems)

      const productquerySnapShot = await Promise.all(cartItems.map(item=> getDoc(doc(db, "products",item.id))))
      console.log(productquerySnapShot)

      let productquantity = [];

      productquerySnapShot.forEach((item) =>
        productquantity.push({
          id: item.id,
          quantity: item.data().quantity,
        })
      );
      console.log(productquantity);

      let updatedQuantity = [];

      cartItems.forEach((items) => {
        const product = productquantity.find((item) => item.id === items.id);
        product.quantity = (product.quantity) - (items.quantity)
        updatedQuantity.push(product);
      });
      console.log(updatedQuantity)

      const allRequests = updatedQuantity.map((item) =>
        updateDoc(doc(db, "products", item.id), { quantity: item.quantity })
      );

      await Promise.all(allRequests);
    } catch (error) {
      console.error(error);
    }
    closeModal();
    ResetCart();
    localStorage.removeItem("cart");
  };

  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="modal-header">
          <div className="modal-heading">#Add Your Details</div>
          <div className="modal-cross" onClick={closeModal}>
            <i class="fa-solid fa-xmark"></i>
          </div>
        </div>
        <div className="modal-inputs">
          <input
            required
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Your FullName"
          />
          <input
            required
            type="text"
            name="adress"
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
            placeholder="Your Complete Adress"
          />
          <input
            required
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter Your City"
          />
          <input
            required
            type="number"
            name="postalCode"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
            placeholder="Postal Code"
          />
          <input
            required
            type="number"
            name="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Phone Number"
          />
        </div>
        <div className="selectchecks">
          <div className="modal-checks">
            {" "}
            <input
              className="checkbox"
              name="cashOnDelivery"
              type="checkbox"
              required
              value={cashOnDelivery}
              onChange={(e) => setCashOnDelivery(e.target.checked)}
            />
            <label className="check-lable">Cash On Delivery</label>
          </div>
          <div className="modal-checks">
            {" "}
            <input
              className="checkbox"
              type="checkbox"
              value={cardPayment}
              onChange={(e) => setCardPayment(e.target.checked)}
            />
            <label className="check-lable">Pay From Card</label>
          </div>
        </div>
        <button className="modal-btn" onClick={OrderPlace}>
          Proceed To CheckOut
        </button>
      </div>
    </div>
  );
}

export default Modal;
