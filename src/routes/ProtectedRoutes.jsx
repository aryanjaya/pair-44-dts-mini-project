import { Navigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

const ProtectedRoutes = ({ children }) => {
  const { user, userLoad } = useUser();
  if (userLoad) {
    return <p className="text-light">Loading...</p>;
  }
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default ProtectedRoutes;
