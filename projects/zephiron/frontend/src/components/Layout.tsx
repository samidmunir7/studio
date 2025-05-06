import { useAuth } from "../context/AuthContext";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth(); // ✅ Makes Navbar re-render on login/logout
  console.log(user);

  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
