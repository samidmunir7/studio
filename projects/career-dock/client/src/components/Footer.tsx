import {
  BsOpencollective,
  BsFillHouseFill,
  BsInfoCircleFill,
  BsFillPeopleFill,
  BsFillPlusSquareFill,
  BsFillGrid1X2Fill,
  BsFillTerminalFill,
} from "react-icons/bs";
import NavLink from "./NavLink";
import { useUser } from "../context/UserContext";
import LogoutButton from "./ui/LogoutButton";

const commonNavItems = [
  {
    key: 0,
    label: "Home",
    icon: <BsFillHouseFill />,
    link: "/",
  },
  {
    key: 1,
    label: "About",
    icon: <BsInfoCircleFill />,
    link: "/about",
  },
  {
    key: 2,
    label: "Community",
    icon: <BsFillPeopleFill />,
    link: "/community",
  },
];

const userNavItems = [
  {
    key: 0,
    label: "Dashboard",
    icon: <BsFillGrid1X2Fill />,
    link: "/dashboard",
  },
  {
    key: 1,
    label: "Create",
    icon: <BsFillPlusSquareFill />,
    link: "/create",
  },
];

const Footer = () => {
  const { user } = useUser();

  return (
    <>
      <div className="w-full px-16 py-7 bg-zinc-900 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xl text-amber-500 font-bold uppercase">
          <BsOpencollective />
          <h1>Career Dock</h1>
        </div>
        <div className="text-zinc-300 font-semibold">
          <p className="flex items-center gap-2">
            <span>
              <BsFillTerminalFill />
            </span>
            Developed by Zephiron | 2025
          </p>
        </div>
        <div className="flex items-center gap-8">
          {commonNavItems.map((navItem) => (
            <NavLink
              key={navItem.key}
              label={navItem.label}
              icon={navItem.icon}
              link={navItem.link}
            />
          ))}
        </div>
        {user && (
          <div className="flex items-center gap-8">
            {userNavItems.map((navItem) => (
              <NavLink
                key={navItem.key}
                label={navItem.label}
                icon={navItem.icon}
                link={navItem.link}
              />
            ))}
            <LogoutButton />
          </div>
        )}
      </div>
    </>
  );
};

export default Footer;
