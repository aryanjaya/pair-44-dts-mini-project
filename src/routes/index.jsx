import { useRoutes } from "react-router-dom";
import App from "../App";

// import ProtectedRoutes from "./ProtectedRoutes";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";

export default function Routes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        }
      ],
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
