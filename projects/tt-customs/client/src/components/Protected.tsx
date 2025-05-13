import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Protected = ({ children }: { children: React.ReactElement }) => {
  const { token } = useAuth();

  return token ? children : <Navigate to="/login" />;
};

export default Protected;
