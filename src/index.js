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
import Unstitched from "./components/Unstitched/Unstitched";
import Pret from "./components/Pret/Pret";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Card from "./components/Card/Card";
import Women from "./components/Womens/womens";
import Electronics from "./components/Electronics/Electronics";
import CartItems from "./components/CartItems/CartItems";


const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="" element={<Home />} />
        <Route path="Unstitched" element={<Unstitched />} />
        <Route path="Women's Clothing" element={<Women/>} />
        <Route path="Pret" element={<Pret />} />
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
