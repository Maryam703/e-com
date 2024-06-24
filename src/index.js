import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Jewelery from "./components/Jewelery/Jewelery";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Card from "./components/Card/Card";
import Women from "./components/Womens/womens";
import Electronics from "./components/Electronics/Electronics";
import CartItems from "./components/CartItems/CartItems";
import MensClothing from "./components/MensClothing/MensClothing";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="Men's Clothing" element={<MensClothing />} />
        <Route path="Women's Clothing" element={<Women/>} />
        <Route path="Jewelery" element={<Jewelery />} />
        <Route path="Electronics" element={<Electronics />}/>
        <Route path="Login" element={<Login />}/>
        <Route path="SignUp" element={<SignUp />} />
        <Route path="Card/:id" element={<Card />}/>
        <Route path="CartItems" element={<CartItems />}/>
      </Route>
     
    </>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);

reportWebVitals();
