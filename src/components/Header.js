import React from "react";
import ReactDOM from "react-dom";
import { LOGO_URL } from "../utilities/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utilities/UserContext";
import useOnlineStatus from "../utilities/useOnlineStatus";
import { useSelector } from "react-redux";



const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

   const {loggedInUser} = useContext(UserContext);
   console.log(loggedInUser);

   //subscibing to the store using a selector 
   const cartItems = useSelector((store)=> store.cart.items);
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg ">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-5 ">
          <li className="px-3">Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
          {/* this is why react apps are called single page applications */}
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/About">About us</Link> 
          </li>
          <li className="px-3">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className="px-3 font-bold text-xl">
            <Link to="/Cart">Cart - ({cartItems.length} items)</Link>
          </li>
          <li className="px-3">
            <Link to="/grocery">Grocery</Link>
          </li>
          <button
            className="px-3"
            onClick={() => {
              setBtnNameReact(btnNameReact === "Login" ? "Logout" : "Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
