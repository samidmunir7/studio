import { Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/Login.jsx";
import VerifyEmailPage from "./pages/VerifyEmail.jsx";
import { ToastContainer } from "react-toastify";
import { useAuthStore } from "./store/authStore.js";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard.jsx";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated && !user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AuthenticatedUserRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user) {
    return <Navigate to="/dashboard" replace />;
  }
};

const App = () => {
  const navigate = useNavigate();
  const { isCheckingAuth, checkAuth, isAuthenticated, logout, user } =
    useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(user);
  console.log(isAuthenticated);

  if (isCheckingAuth) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className="w-full bg-stone-900 p-4 flex justify-between">
        <h1
          onClick={() => navigate("/")}
          className="text-3xl text-white font-semibol cursor-pointer"
        >
          MERN-auth
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 bg-red-500 text-white rounded-sm hover:bg-red-700 transition-all"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-red-500 text-white rounded-sm hover:bg-red-700 transition-all"
          >
            Register
          </button>
        </div>
      </div>
      {user && (
        <button
          onClick={handleLogout}
          className="border-1 border-stone-900 px-4 py-2 float-right bg-red-500 cursor-pointer uppercase hover:bg-red-700 transition-all"
        >
          Logout
        </button>
      )}
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={""} />
        <Route
          path="/register"
          element={
            <AuthenticatedUserRoute>
              <RegisterPage />
            </AuthenticatedUserRoute>
          }
        />
        <Route
          path="/login"
          element={
            <AuthenticatedUserRoute>
              <LoginPage />
            </AuthenticatedUserRoute>
          }
        />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
