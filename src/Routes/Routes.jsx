import { Router, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/main Pages/Home/Home";
import ChefDetails from "../Pages/main Pages/ChefDetails/ChefDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefDetails/:id",
        element: <ChefDetails></ChefDetails>,
        loader: () => fetch(`http://localhost:3000/chefDetails`),
      },
    ],
  },
]);

export default router;
