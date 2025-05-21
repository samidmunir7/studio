import {
  BsOpencollective,
  BsFillHouseFill,
  BsInfoCircleFill,
  BsFillPeopleFill,
} from "react-icons/bs";
import NavLink from "./NavLink";
import LoginButton from "./ui/LoginButton";
import RegisterButton from "./ui/RegisterButton";

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

const Navbar = () => {
  return (
    <div className="w-full px-16 py-4 bg-zinc-900 flex items-center justify-between">
      <div className="flex items-center gap-2 text-4xl text-amber-500 font-bold uppercase">
        <BsOpencollective />
        <h1>Career Dock</h1>
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
      <div className="flex items-center gap-8">
        <LoginButton />
        <RegisterButton />
      </div>
    </div>
  );
};

export default Navbar;
