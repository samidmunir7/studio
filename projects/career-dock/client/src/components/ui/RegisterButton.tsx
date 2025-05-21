import { useNavigate } from "react-router-dom";

const RegisterButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/register")}
      className="w-[100px] text-center text-lg text-emerald-500 font-bold border-2 border-emerald-500 px-4 py-2 rounded-md hover:bg-emerald-500 hover:text-zinc-900 transition-all"
    >
      Register
    </button>
  );
};

export default RegisterButton;
