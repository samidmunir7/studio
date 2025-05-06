import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import DashboardPage from "./pages/DashboardPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth(); // ✅ Pull user to trigger key-based rerenders

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout key="landing">
            <LandingPage />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout key="login">
            <LoginPage />
          </Layout>
        }
      />
      <Route
        path="/register"
        element={
          <Layout key="register">
            <RegisterPage />
          </Layout>
        }
      />
      <Route
        path="/dashboard"
        element={
          <Layout key={user?.email || "unauthenticated"}>
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          </Layout>
        }
      />
    </Routes>
  );
}

export default App;
