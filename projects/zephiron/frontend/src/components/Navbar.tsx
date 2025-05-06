import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("zephiron_token");
    setIsAuthenticated(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("zephiron_token");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1
          className="text-xl font-bold cursor-pointer text-blue-400"
          onClick={() => navigate("/")}
        >
          Zephiron
        </h1>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          {!isAuthenticated ? (
            <>
              <li className="cursor-pointer" onClick={() => navigate("/login")}>
                Login
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </li>
            </>
          ) : (
            <>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </li>
              <li
                className="cursor-pointer text-red-400"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3 font-semibold text-sm">
          <li className="cursor-pointer" onClick={() => navigate("/")}>
            Home
          </li>
          {!isAuthenticated ? (
            <>
              <li className="cursor-pointer" onClick={() => navigate("/login")}>
                Login
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Register
              </li>
            </>
          ) : (
            <>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/dashboard")}
              >
                Dashboard
              </li>
              <li
                className="cursor-pointer text-red-400"
                onClick={handleLogout}
              >
                Logout
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
