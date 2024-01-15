import Products from "../pages/Products";
import UserRoot from "../pages/UserRoot";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/:id",
        element: <Detail />,
      },
    ],
  },
];
