import { useRoutes } from "react-router-dom";

import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      element: (
        <ProtectedRoutes>
          <HomePage />
        </ProtectedRoutes>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return routes;
}
