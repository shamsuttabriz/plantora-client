import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: "/",
        Component: Home,
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
