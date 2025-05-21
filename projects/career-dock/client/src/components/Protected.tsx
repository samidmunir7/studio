import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Protected = ({ children }: { children: React.ReactElement }) => {
  const { token } = useUser();

  return token ? children : <Navigate to="/login" />;
};

export default Protected;
