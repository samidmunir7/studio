import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import NavLink from "./NavLink";
import {
  MdHome,
  MdInfo,
  MdHub,
  MdAccountTree,
  MdGroup,
  MdDashboard,
  MdLogout,
  MdSettings,
} from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import LoginButton from "./ui/LoginButton";
import RegisterButton from "./ui/RegisterButton";
import { useUser } from "../context/UserContext";

const commonNavItems = [
  { label: "Home", link: "/", icon: <MdHome /> },
  { label: "About", link: "/about", icon: <MdInfo /> },
  { label: "Community", link: "/community", icon: <MdGroup /> },
];

const userNavItems = [
  { label: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="w-full bg-zinc-900 px-16 py-4 flex items-center justify-between">
      <div className="text-4xl font-bold text-amber-500 flex items-center gap-2">
        <MdHub />
        <h1>Career Dock</h1>
      </div>
      <div className="hidden lg:flex items-center gap-8">
        {[...commonNavItems, ...(user ? userNavItems : [])].map(
          (item, index) => (
            <NavLink key={index} path={location.pathname} {...item} />
          )
        )}
      </div>
      <div className="hidden lg:flex items-center gap-4">
        {!user ? (
          <>
            <LoginButton />
            <RegisterButton />
          </>
        ) : (
          <div className="relative">
            <div
              className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center text-white cursor-pointer"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              {user.firstName[0].toUpperCase()}
            </div>
            {profileOpen && (
              <div className="absolute right-0 mt-2 bg-zinc-800 rounded-md shadow-md py-2 w-40">
                <button
                  onClick={() => {
                    setProfileOpen(false);
                    navigate("/dashboard");
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-zinc-700 text-sm text-white"
                >
                  Profile
                </button>
                <button
                  onClick={() => {
                    logout();
                    setProfileOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 hover:bg-rose-600 text-sm text-white"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <FiMenu
          size={24}
          className="text-white cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-zinc-900 px-6 py-4 flex flex-col gap-4 lg:hidden shadow-md">
          {[...commonNavItems, ...(user ? userNavItems : [])].map(
            (item, index) => (
              <NavLink key={index} path={location.pathname} {...item} />
            )
          )}

          {!user ? (
            <div className="flex gap-4">
              <LoginButton />
              <RegisterButton />
            </div>
          ) : (
            <>
              <button
                onClick={() => {
                  navigate("/dashboard");
                  setMenuOpen(false);
                }}
                className="text-left px-4 py-2 bg-zinc-800 rounded-md text-white"
              >
                Profile
              </button>
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-left px-4 py-2 bg-rose-600 rounded-md text-white"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
