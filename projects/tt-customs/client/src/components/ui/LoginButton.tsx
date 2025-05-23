import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/login")}
      className="border-2 border-rose-500 text-rose-500 font-bold px-4 py-2 rounded-md hover:bg-rose-500 hover:text-zinc-300 transition-all"
    >
      Login
    </button>
  );
};

export default LoginButton;
