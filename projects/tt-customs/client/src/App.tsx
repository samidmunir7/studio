import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default App;
