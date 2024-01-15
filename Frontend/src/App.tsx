import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../src/routes/Routes";
const router = createBrowserRouter(routes);
type Props = {};

const App = (props: Props) => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
