import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const ProtectedRoutes = ({ children, noAuthUser = false }) => {
  const { user, userLoad } = useUser();
  if (userLoad) {
    return <p className="text-light">Loading...</p>;
  }
  if (!user && !noAuthUser) {
    return <Navigate to="/login" />;
  }
  if (user && noAuthUser) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoutes;
