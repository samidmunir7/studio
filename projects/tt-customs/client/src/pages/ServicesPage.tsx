import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

const servicesList = [
  {
    id: 1,
    name: "Performance Tuning",
    description:
      "ECU remapping, dyno testing, and precision tuning for max performance.",
    estimatedTime: "2–3 hours",
    cost: 499,
    dropOff: true,
  },
  {
    id: 2,
    name: "Custom Vinyl Wrap",
    description:
      "Full or partial wrap options with premium materials and flawless finish.",
    estimatedTime: "1–2 days",
    cost: 1299,
    dropOff: true,
  },
  {
    id: 3,
    name: "Cold Air Intake Installation",
    description:
      "Boost engine breathing and throttle response with a CAI upgrade.",
    estimatedTime: "1 hour",
    cost: 199,
    dropOff: false,
  },
  {
    id: 4,
    name: "Detailing & Paint Correction",
    description:
      "Deep clean, polish, and ceramic coating to restore your car’s shine.",
    estimatedTime: "4–6 hours",
    cost: 299,
    dropOff: true,
  },
];

const ServicesPage = () => {
  const [cart, setCart] = useState<number[]>([]);

  const navigate = useNavigate();
  const { setSelectedServices } = useBooking();

  const toggleService = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    const selected = servicesList.filter((s) => cart.includes(s.id));
    setSelectedServices(selected);
    navigate("/booking");
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Our Services
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          From full performance packages to one-off installations, explore
          everything we offer.
        </p>
      </section>

      {/* Services Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {servicesList.map((service) => (
          <div
            key={service.id}
            className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {service.name}
            </h3>
            <p className="text-zinc-400 mb-4">{service.description}</p>
            <ul className="text-sm text-zinc-400 mb-4">
              <li>
                <span className="text-white font-semibold">
                  Estimated Time:
                </span>{" "}
                {service.estimatedTime}
              </li>
              <li>
                <span className="text-white font-semibold">
                  Drop-Off Required:
                </span>{" "}
                {service.dropOff ? "Yes" : "No"}
              </li>
              <li>
                <span className="text-white font-semibold">Cost:</span> $
                {service.cost.toFixed(2)}
              </li>
            </ul>
            <button
              onClick={() => toggleService(service.id)}
              className={`mt-2 px-4 py-2 rounded-md font-semibold transition ${
                cart.includes(service.id)
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "border border-sky-500 text-white hover:bg-sky-500 hover:text-black"
              }`}
            >
              {cart.includes(service.id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </section>

      {/* Cart Preview */}
      <section className="bg-zinc-900 p-6 rounded-xl shadow-inner">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Selected Services
        </h2>
        {cart.length === 0 ? (
          <p className="text-zinc-400 italic">No services added yet.</p>
        ) : (
          <div>
            <ul className="space-y-2 text-zinc-300">
              {cart.map((id) => {
                const item = servicesList.find((s) => s.id === id);
                return (
                  <li key={id} className="border-b border-zinc-700 pb-2">
                    {item?.name} — ${item?.cost.toFixed(2)}
                  </li>
                );
              })}
            </ul>
            <button
              onClick={handleProceed}
              className="mt-6 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg"
            >
              Proceed to Booking
            </button>
          </div>
        )}
      </section>
    </main>
  );
};

export default ServicesPage;
