import { Link } from "react-router-dom";
import "./Productcard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Productcard({ id, image, title, category, price }) {

  const btnHandler = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingproduct = cart.find((item) => item.id === parseInt(id));

    if (existingproduct) {
      existingproduct.quantity++;
    } else {
      cart.push({ id, image, category, title, price, quantity: 1 });
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
      <div className="container">
        <div className="card-container">
          <Link to={`/Card/${id}`} key={id}>
            <div className="card-image">
              <img className="image" src={image} alt="Girl in a jacket" />
            </div>
            <div className="card-titel">{title}</div>
            <div className="card-cetagory">{category}</div>
            <div className="card-price">${price}</div>
          </Link>
          <button className="card-cart" onClick={btnHandler}>
            Add to cart
          </button>
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
      </div>
    </>
  );
}
