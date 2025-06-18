import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div className="min-h-[calc(100vh-400px)] bg-green-100">
        <Outlet />
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default MainLayout;
