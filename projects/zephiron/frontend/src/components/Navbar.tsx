import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, user, logout } = useAuth();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const isAuthenticated = !!token;

  const isActive = (path: string) =>
    location.pathname === path ? "text-blue-400 underline" : "";

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate("/login");
  };

  const handleNavigate = (path: string) => {
    setMenuOpen(false);
    setDropdownOpen(false);
    navigate(path);
  };

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto relative">
        {/* Logo */}
        <h1
          className="text-xl font-bold cursor-pointer text-blue-400"
          onClick={() => handleNavigate("/")}
        >
          Zephiron
        </h1>

        {/* Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>☰</button>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6 text-sm font-semibold items-center">
          <li
            className={`cursor-pointer ${isActive("/")}`}
            onClick={() => handleNavigate("/")}
          >
            Home
          </li>
          {!isAuthenticated ? (
            <>
              <li
                className={`cursor-pointer ${isActive("/login")}`}
                onClick={() => handleNavigate("/login")}
              >
                Login
              </li>
              <li
                className={`cursor-pointer ${isActive("/register")}`}
                onClick={() => handleNavigate("/register")}
              >
                Register
              </li>
            </>
          ) : (
            <>
              <li
                className={`cursor-pointer ${isActive("/dashboard")}`}
                onClick={() => handleNavigate("/dashboard")}
              >
                Dashboard
              </li>
              <div className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="cursor-pointer flex items-center"
                >
                  <span className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mr-2">
                    {user?.name?.charAt(0).toUpperCase()}
                  </span>
                  <span>{user?.name?.split(" ")[0]}</span>
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul
                      className="absolute right-0 mt-2 bg-gray-700 rounded shadow-lg w-40 text-sm z-10"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      <li
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={handleLogout}
                      >
                        Logout
                      </li>
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </>
          )}
        </ul>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden mt-4 space-y-3 font-semibold text-sm"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
          >
            <li
              className={`cursor-pointer ${isActive("/")}`}
              onClick={() => handleNavigate("/")}
            >
              Home
            </li>
            {!isAuthenticated ? (
              <>
                <li
                  className={`cursor-pointer ${isActive("/login")}`}
                  onClick={() => handleNavigate("/login")}
                >
                  Login
                </li>
                <li
                  className={`cursor-pointer ${isActive("/register")}`}
                  onClick={() => handleNavigate("/register")}
                >
                  Register
                </li>
              </>
            ) : (
              <>
                <li
                  className={`cursor-pointer ${isActive("/dashboard")}`}
                  onClick={() => handleNavigate("/dashboard")}
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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
