type NavbarLinkProps = {
  label: String;
  link: string;
  icon: React.ReactElement;
  path: String;
};

import { useNavigate } from "react-router-dom";

const NavbarLink = (props: NavbarLinkProps) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(props.link)}
      className={`flex items-center gap-2 text-lg font-semibold border-b-2 ${
        props.path === props.link
          ? "text-rose-500 border-rose-500"
          : "text-zinc-500 border-zinc-900"
      } hover:text-zinc-300 transition-all`}
    >
      <span>{props.icon}</span>
      <p className="cursor-default">{props.label}</p>
    </div>
  );
};

export default NavbarLink;
