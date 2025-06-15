import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { Component } from "react";
import App from "../App";
import Home from "../pages/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: '/',
                Component: Home,
            }
        ]
    }
])
