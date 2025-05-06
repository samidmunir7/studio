import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("zephiron_token");
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <h1 className="text-3xl mb-6">Welcome to your dashboard!</h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default DashboardPage;
