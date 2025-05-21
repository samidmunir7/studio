import Navbar from "./components/Navbar";
import { Routes, Route, useLocation } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";

const App = () => {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Navbar />
    </>
  );
};

export default App;
