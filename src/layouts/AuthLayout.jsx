import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

function AuthLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AuthLayout;
