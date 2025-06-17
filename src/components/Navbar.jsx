import React from "react";
import { Link, NavLink } from "react-router";

function Navbar() {
  const list = (
    <>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
          to="/all-plants"
        >
          All Plants
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
          to="/add-plant"
        >
          Add Plant
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
          to="/my-plants"
        >
          My Plants
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="font-bold">
        <NavLink
          className={({ isActive }) => (isActive ? "text-indigo-600" : "")}
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
          🌱 Plantora
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{list}</ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/profile"
            className="h-10 w-10 rounded-full bg-red-300 flex justify-center items-center cursor-pointer"
          >
            P
          </Link>
        </div>
      </div>
    </div>
    // <nav className="flex justify-between items-center p-4 shadow-md bg-white dark:bg-slate-900">
    //   <h1 className="text-2xl font-bold text-green-700">🌱 Plantora</h1>
    //   <ul className="flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
    //     <li>Home</li>
    //     <li>My Plants</li>
    //     <li>Categories</li>
    //     <li>Journal</li>
    //     <li>Tips</li>
    //   </ul>
    //   <div className="flex items-center gap-4">
    //     <button className="btn btn-sm btn-primary btn-outline">Sign In</button>
    //     <button className="btn btn-sm btn-success">Register</button>
    //   </div>
    // </nav>
  );
}

export default Navbar;
