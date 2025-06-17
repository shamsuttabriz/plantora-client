import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const list = (
    <>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 border border-green-600" : "border border-white")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 border border-green-600" : "border border-white")}
          to="/all-plants"
        >
          All Plants
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 border border-green-600" : "border border-white")}
          to="/add-plant"
        >
          Add Plant
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 border border-green-600" : "border border-white")}
          to="/my-plants"
        >
          My Plants
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 border border-green-600" : "border border-white")}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-green-600 border border-green-600" : "border border-white")}
          to="/register"
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="px-4 lg:px-0  bg-base-100 shadow-sm">
      <div className="navbar max-w-6xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="mr-2 lg:btn lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content px-0 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {list}
            </ul>
          </div>
          <Link to="/" className="text-xl lg:text-2xl font-bold text-green-600">
          🌿 Plantora
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/profile"
            className="h-10 w-10 rounded-full border-2 border-green-400 bg-green-100 flex justify-center items-center cursor-pointer"
          >
            P
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
