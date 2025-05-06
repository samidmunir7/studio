import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col justify-center items-center px-4 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4">
        Welcome to <span className="text-blue-500">Zephiron</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-8">
        Engineering digital clarity — scalable solutions for web, SaaS, and
        beyond.
      </p>
      <div className="flex gap-4">
        <button
          onClick={() => navigate("/login")}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded text-lg font-semibold"
        >
          Login
        </button>
        <button
          onClick={() => navigate("/register")}
          className="bg-gray-800 border border-gray-600 hover:bg-gray-700 px-6 py-3 rounded text-lg font-semibold"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
