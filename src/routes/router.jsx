import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import NotFound from "../components/NotFound";
import AddPlant from "../pages/AddPlant";
import AllPlants from "../pages/AllPlants";
import MyPlants from "../pages/MyPlants";
import Loader from "../components/Loader";
import PlantDetails from "../pages/PlantDetails";
import UpdatedPlant from "../pages/UpdatedPlant";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import PrivateRoute from "../provider/PrivateRoute";
import Prifile from "../pages/Prifile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: "/",
        hydrateFallbackElement: <Loader/>,
        loader: () => fetch("https://plantora-server.vercel.app/plants"),
        Component: Home,
      },
      {
        path: "/add-plant",
        element: (
          <PrivateRoute>
            <AddPlant />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-plants",
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("https://plantora-server.vercel.app/plants"),
        Component: AllPlants,
      },
      {
        path: "/plant-details/:id",
        element: (
          <PrivateRoute>
            <PlantDetails />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`https://plantora-server.vercel.app/plants/${params.id}`),
      },
      {
        path: "/my-plants",
        element: (
          <PrivateRoute>
            <MyPlants />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
        loader: () => fetch("https://plantora-server.vercel.app/plants"),
      },
      {
        path: "/updated-plant/:id",
        element: (
          <PrivateRoute>
            <UpdatedPlant />
          </PrivateRoute>
        ),
        hydrateFallbackElement: <Loader />,
        loader: ({ params }) =>
          fetch(`https://plantora-server.vercel.app/plants/${params.id}`),
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Prifile />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: NotFound,
  },
]);
