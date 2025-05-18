type NavLinkProps = {
  label: string;
  link: string;
  icon: React.ReactElement;
  path: string;
};

import { useNavigate } from "react-router-dom";

const NavLink = (props: NavLinkProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(props.link)}
      className={`flex items-center gap-2 text-lg font-semibold border-b-2 ${
        props.path === props.link
          ? "text-amber-500 border-amber-500"
          : "text-zinc-500 border-zinc-900"
      } hover:text-amber-500 transition-all`}
    >
      <span>{props.icon}</span>
      <p className="cursor-default">{props.label}</p>
    </div>
  );
};

export default NavLink;
