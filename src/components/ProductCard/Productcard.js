import { Link } from "react-router-dom";
import "./Productcard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Productcard({
  id,
  image,
  name,
  quantity,
  category,
  price,
}) {
  const btnHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingproduct = cart.find((item) => item.id === id);

    if (existingproduct) {
      existingproduct.quantity++;
    } else {
      cart.push({ id, image, category, name, price, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    toast.success("Item added to cart Successfully!", {
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

  return (
    <>
      <div className="card-container">
        <Link to={`/Card/${id}`} key={id}>
          <div className="card-image">
            <img className="image" src={image} alt="Girl in a jacket" />
          </div>
          <div className="card-titel">{name}</div>
          <div className="card-cetagory">{category}</div>
          {quantity !== 0 ? (
            <div className="card-quantity">Available: {quantity}</div>
          ) : (
            <div className="card-quantity">Out of Stock</div>
          )}
          <div className="card-price">${price}</div>
        </Link>
        {quantity !== 0 ? (
          <button className="card-cart" onClick={btnHandler}>
            Add to cart
          </button>
        ) : (
          <button className="card-cart">Out of Stock</button>
        )}
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}
