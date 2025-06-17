import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import AddPlant from "../pages/AddPlant";
import AllPlants from "../pages/AllPlants";
import MyPlants from "../pages/MyPlants";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: "/",
        Component: Home,
      },
      {
        path: "add-plant",
        Component: AddPlant,
      },
      {
        path: "all-plants",
        Component: AllPlants,
      },
      {
        path: "my-plants",
        Component: MyPlants,
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
