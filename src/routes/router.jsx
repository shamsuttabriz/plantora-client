import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import AddPlant from "../pages/AddPlant";
import AllPlants from "../pages/AllPlants";
import MyPlants from "../pages/MyPlants";
import Loader from "../components/Loader";
import PlantDetails from "../pages/PlantDetails";

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
        path: "/add-plant",
        Component: AddPlant,
      },
      {
        path: "/all-plants",
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("http://localhost:3000/plants"),
        Component: AllPlants,
      },
      {
        path: "/plant-details/:id",
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/plants/${params.id}`),
        Component: PlantDetails,
      },
      {
        path: "/my-plants",
        Component: MyPlants,
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
