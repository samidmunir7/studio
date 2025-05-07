import { Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/Register.jsx";
import LoginPage from "./pages/Login.jsx";
import VerifyEmailPage from "./pages/VerifyEmail.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div>
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={"HOME"} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify-email" element={<VerifyEmailPage />} />
      </Routes>
    </div>
  );
};

export default App;
