import { useRoutes } from "react-router-dom";
import App from "../App";
import MovieDetail from "../components/movie/MovieDetail";

import ProtectedRoutes from "./ProtectedRoutes";
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
        },
        {
          path: "/movie/:movieId",
          element: (
            <ProtectedRoutes>
              <MovieDetail />
            </ProtectedRoutes>
          ),
        },
        {
          path: "*",
          element: (
            <main className="text-center mt-5">
              <h2>There's nothing here!</h2>
            </main>
          ),
        },
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
