import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/register")}
      className="border-2 border-emerald-500 text-emerald-500 font-bold px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-zinc-300 transition-all"
    >
      Register
    </button>
  );
};

export default RegisterButton;
