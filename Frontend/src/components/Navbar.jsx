import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex lg:gap-5 sm:gap-6 bg-white shadow fixed lg:text-lg sm:text-base   z-10 justify-between  w-screen overflow-y-hidden items-center poppins   text-black">
      <div className="flex ">
        <NavLink
          to="/home"
          className="hover:text-green-500 translate duration-200  ease-linear"
        >
          <img
            src={logo}
            alt="logo"
            className="lg:h-16 sm:h-10 ml-7 lg:w-16 sm:w-10 object-contain"
          />
        </NavLink>
      </div>

      <div className="flex lg:gap-8 sm:gap-3 mr-8">
        <p
          onClick={() => {
            localStorage.removeItem("userID");
            navigate("/");
          }}
          className="hover:text-white hover:bg-red-500 rounded-md cursor-pointer translate duration-200 px-5 lg:py-1 sm:py-5   ease-in-out"
        >
          logout
        </p>
        <NavLink
          to="/trivia"
          style={({ isActive }) => ({
            color: isActive ? "black" : "",
            background: isActive ? "#c7f9cc" : "",
          })}
          className="hover:text-green-500 rounded-xl translate duration-200 px-5 lg:py-1 sm:py-5   ease-linear"
        >
          Trivia
        </NavLink>
        <NavLink
          className="hover:text-green-500 rounded-xl  translate duration-200 px-5 lg:py-1 sm:py-5   ease-linear"
          to="/dashboard"
          style={({ isActive }) => ({
            color: isActive ? "black" : "",
            background: isActive ? "#c7f9cc" : "",
          })}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/profile"
          style={({ isActive }) => ({
            color: isActive ? "black" : "",
            background: isActive ? "#c7f9cc" : "",
          })}
          className="hover:text-green-500 px-5 lg:py-1 sm:py-5 rounded-xl translate duration-200  ease-linear"
        >
          Profile
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
