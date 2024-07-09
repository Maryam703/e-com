import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [menulist, setMenulist] = useState(false);
  const user = JSON.parse(localStorage.getItem("users"));

  const Logout = () => {
    localStorage.clear();
  };

  return (
    <header className="nav-header">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <nav className="navbar-2 bg-white border-gray-200 px-4 lg:px-6 py-2.5">
            <div>
              <div className="menu-bar-icon" onClick={() => setMenulist(true)}>
                <i className="menu-icon fa-solid fa-bars"></i>
              </div>
            </div>
          </nav>
          <Link to="/" className="flex items-center">
            <img
              src="data:image/png;base64,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"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          {user && (
            <div className="flex items-center lg:order-2">
              <Link
                onClick={Logout}
                to="/Login"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              >
                LogOut
              </Link>
            </div>
          )}

          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    ` block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Men's Clothing"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Men's Clothing
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Women's Clothing"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Women's Clothing
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Jewelery"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Women's Accessories
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Shoes"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Shoes
                </NavLink>
              </li>
            </ul>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="Electronics"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Electronics
                </NavLink>
              </li>
            </ul>
          </div>
          {user.role === "user" && (<div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="CartItems"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 ${
                      isActive ? "text-orange-700" : "text-gray-700"
                    } duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>)}
        </div>
      </nav>
      <div className={menulist ? "menu-options-active" : "menu-options"}>
        <Link
          to="Men's Clothing"
          className="option"
          onClick={() => setMenulist(false)}
        >
          Men's Clothing
        </Link>
        <Link
          to="Women's Clothing"
          className="option"
          onClick={() => setMenulist(false)}
        >
          Women's Clothing
        </Link>
        <Link
          to="Jewelery"
          className="option"
          onClick={() => setMenulist(false)}
        >
          Jewelery
        </Link>
        <Link
          to="Electronics"
          className="option"
          onClick={() => setMenulist(false)}
        >
          Electronics
        </Link>
        <Link to="SignIn" className="option" onClick={() => setMenulist(false)}>
          SignIn
        </Link>
        <Link to="SignUp" className="option" onClick={() => setMenulist(false)}>
          SignUp
        </Link>
      </div>
    </header>
  );
}
