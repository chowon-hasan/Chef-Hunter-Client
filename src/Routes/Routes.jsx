import { Router, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/main Pages/Home/Home";
import ChefDetails from "../Pages/main Pages/ChefDetails/ChefDetails";
import Login from "../Pages/login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Blogs from "../Pages/blog/Blogs";
import ErrorPage from "../Pages/errorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/chefDetails/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://chef-hunter-server-chowon-hasan.vercel.app/chefDetails`
          ),
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
