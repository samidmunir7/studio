// import ttc_logo from "../assets/ttc_logo.jpg";
// import { MdHome, MdInfo, MdHub, MdAccountTree, MdGroup } from "react-icons/md";
// // MdBuild
// import { useLocation } from "react-router-dom";
// import NavbarLink from "./NavbarLink";
// import LoginButton from "./ui/LoginButton";
// import RegisterButton from "./ui/RegisterButton";

// const navItems = [
//   {
//     index: 0,
//     label: "Home",
//     link: "/",
//     // icon: <img src={ttc_logo} alt="Logo" className="w-8 h-8" />,
//     icon: <MdHome />,
//   },
//   {
//     index: 1,
//     label: "About",
//     link: "/about",
//     icon: <MdInfo />,
//   },
//   {
//     index: 2,
//     label: "Products",
//     link: "/products",
//     icon: <MdHub />,
//   },
//   {
//     index: 3,
//     label: "Services",
//     link: "/services",
//     icon: <MdAccountTree />,
//   },
//   {
//     index: 4,
//     label: "Contact",
//     link: "/contact",
//     icon: <MdGroup />,
//   },
// ];

// const Navbar = () => {
//   const location = useLocation();
//   return (
//     <div className="bg-zinc-900 px-16 py-4 flex items-center justify-between">
//       <div className="flex items-center gap-4">
//         <img src={ttc_logo} alt="Logo" className="w-16 h-16 rounded-full" />
//         <h1 className="text-4xl uppercase font-bold text-zinc-300">
//           TT-Customs
//         </h1>
//       </div>
//       <div className="flex items-center gap-8">
//         {navItems.map((item) => (
//           <NavbarLink key={item.index} path={location.pathname} {...item} />
//         ))}
//       </div>
//       <div className="flex items-center gap-4">
//         <LoginButton />
//         <RegisterButton />
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
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
import ttc_logo from "../assets/ttc_logo.jpg";
import NavbarLink from "./NavbarLink";
import LoginButton from "./ui/LoginButton";
import RegisterButton from "./ui/RegisterButton";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const commonNavItems = [
    { label: "Home", link: "/", icon: <MdHome /> },
    { label: "About", link: "/about", icon: <MdInfo /> },
    { label: "Products", link: "/products", icon: <MdHub /> },
    { label: "Services", link: "/services", icon: <MdAccountTree /> },
    { label: "Contact", link: "/contact", icon: <MdGroup /> },
  ];

  const authNavItems = [
    { label: "Dashboard", link: "/dashboard", icon: <MdDashboard /> },
  ];

  return (
    <div className="bg-zinc-900 px-6 md:px-16 py-4 flex items-center justify-between relative z-50">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img
          src={ttc_logo}
          alt="Logo"
          className="w-12 h-12 md:w-16 md:h-16 rounded-full"
        />
        <h1 className="text-2xl md:text-4xl uppercase font-bold text-zinc-300">
          TT-Customs
        </h1>
      </div>

      {/* Desktop Nav */}
      <div className="hidden lg:flex items-center gap-8">
        {[...commonNavItems, ...(user ? authNavItems : [])].map(
          (item, index) => (
            <NavbarLink key={index} path={location.pathname} {...item} />
          )
        )}
      </div>

      {/* Auth Section */}
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
              {user.name[0].toUpperCase()}
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
          {[...commonNavItems, ...(user ? authNavItems : [])].map(
            (item, index) => (
              <NavbarLink key={index} path={location.pathname} {...item} />
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
