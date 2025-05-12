import ttc_logo from "../assets/ttc_logo.jpg";
import { MdHome, MdInfo, MdHub, MdAccountTree, MdGroup } from "react-icons/md";
// MdBuild
import { useLocation } from "react-router-dom";
import NavbarLink from "./NavbarLink";
import LoginButton from "./ui/LoginButton";
import RegisterButton from "./ui/RegisterButton";

const navItems = [
  {
    index: 0,
    label: "Home",
    link: "/",
    // icon: <img src={ttc_logo} alt="Logo" className="w-8 h-8" />,
    icon: <MdHome />,
  },
  {
    index: 1,
    label: "About",
    link: "/about",
    icon: <MdInfo />,
  },
  {
    index: 2,
    label: "Products",
    link: "/products",
    icon: <MdHub />,
  },
  {
    index: 3,
    label: "Services",
    link: "/services",
    icon: <MdAccountTree />,
  },
  {
    index: 4,
    label: "Contact",
    link: "/contact",
    icon: <MdGroup />,
  },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <div className="bg-zinc-900 px-16 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src={ttc_logo} alt="Logo" className="w-16 h-16 rounded-full" />
        <h1 className="text-4xl uppercase font-bold text-zinc-300">
          TT-Customs
        </h1>
      </div>
      <div className="flex items-center gap-8">
        {navItems.map((item) => (
          <NavbarLink key={item.index} path={location.pathname} {...item} />
        ))}
      </div>
      <div className="flex items-center gap-4">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Navbar;
