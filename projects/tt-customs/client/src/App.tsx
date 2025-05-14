import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AboutPage from "./pages/AboutPage";
import ProductsPage from "./pages/ProductsPage";
import ServicesPage from "./pages/ServicesPage";
import BookingPage from "./pages/BookingPage";
import ContactPage from "./pages/ContactPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Footer from "./components/Footer";
import Protected from "./components/Protected";
import DashboardPage from "./pages/DashboardPage";
import AdminProductPage from "./pages/admin/AdminProductPage";
import AdminProductForm from "./pages/admin/AdminProductForm";

const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashboardPage />
            </Protected>
          }
        />
        <Route
          path="/admin/products"
          element={
            <Protected>
              <AdminProductPage />
            </Protected>
          }
        />
        <Route
          path="/admin/products/new"
          element={
            <Protected>
              <AdminProductForm />
            </Protected>
          }
        />
        <Route
          path="/admin/products/edit/:id"
          element={
            <Protected>
              <AdminProductForm />
            </Protected>
          }
        />
      </Routes>
      <Footer />
    </AnimatePresence>
  );
};

export default App;
