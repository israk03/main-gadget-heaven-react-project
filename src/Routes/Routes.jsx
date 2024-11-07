import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../Components/Layouts/MainLayout";
import Statistics from "../Pages/Statistics";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import GadgetCards from "../Components/GadgetCards";
import GadgetDetails from "../Pages/GadgetDetails";
import NotFound from "../Pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/categories.json"),
        children: [
          {
            path: "/",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("/gadget.json"),
          },

          {
            path: "/category/:category",
            element: <GadgetCards></GadgetCards>,
            loader: () => fetch("/gadget.json"),
          },
        ],
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },

      {
        path: "*",
        element: <NotFound></NotFound>,
      },

      {
        path: "/gadget/:id",
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch("/gadget.json"),
      },
    ],
  },
]);

export default routes;
