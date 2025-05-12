const Footer = () => {
  return (
    <footer className="w-full bg-black text-zinc-400 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Brand */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">TT-Customs</h3>
          <p className="text-sm">
            Premium automotive customization for enthusiasts who demand
            performance, precision, and presence.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#services" className="hover:text-rose-500 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#products" className="hover:text-sky-500 transition">
                Products
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="hover:text-rose-500 transition"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-sky-500 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info / Social */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>
              Email:{" "}
              <a
                href="mailto:info@ttcustoms.com"
                className="hover:text-rose-500"
              >
                info@ttcustoms.com
              </a>
            </li>
            <li>
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-sky-500">
                +1 (234) 567-890
              </a>
            </li>
            <li>Location: Los Angeles, CA</li>
          </ul>
          <div className="flex mt-4 gap-4 text-xl">
            <a href="#" className="hover:text-rose-500 transition">
              📷
            </a>{" "}
            {/* Instagram */}
            <a href="#" className="hover:text-sky-500 transition">
              🐦
            </a>{" "}
            {/* Twitter */}
            <a href="#" className="hover:text-rose-500 transition">
              📘
            </a>{" "}
            {/* Facebook */}
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} TT-Customs. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
