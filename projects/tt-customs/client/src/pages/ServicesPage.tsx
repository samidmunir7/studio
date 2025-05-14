// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { useBooking } from "../context/BookingContext";

// // const servicesList = [
// //   {
// //     id: 1,
// //     name: "Performance Tuning",
// //     description:
// //       "ECU remapping, dyno testing, and precision tuning for max performance.",
// //     estimatedTime: "2–3 hours",
// //     cost: 499,
// //     dropOff: true,
// //   },
// //   {
// //     id: 2,
// //     name: "Custom Vinyl Wrap",
// //     description:
// //       "Full or partial wrap options with premium materials and flawless finish.",
// //     estimatedTime: "1–2 days",
// //     cost: 1299,
// //     dropOff: true,
// //   },
// //   {
// //     id: 3,
// //     name: "Cold Air Intake Installation",
// //     description:
// //       "Boost engine breathing and throttle response with a CAI upgrade.",
// //     estimatedTime: "1 hour",
// //     cost: 199,
// //     dropOff: false,
// //   },
// //   {
// //     id: 4,
// //     name: "Detailing & Paint Correction",
// //     description:
// //       "Deep clean, polish, and ceramic coating to restore your car’s shine.",
// //     estimatedTime: "4–6 hours",
// //     cost: 299,
// //     dropOff: true,
// //   },
// // ];

// // const ServicesPage = () => {
// //   const [cart, setCart] = useState<number[]>([]);

// //   const navigate = useNavigate();
// //   const { setSelectedServices } = useBooking();

// //   const toggleService = (id: number) => {
// //     setCart((prev) =>
// //       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
// //     );
// //   };

// //   const handleProceed = () => {
// //     const selected = servicesList.filter((s) => cart.includes(s.id));
// //     setSelectedServices(selected);
// //     navigate("/booking");
// //   };

// //   return (
// //     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
// //       {/* Header */}
// //       <section className="text-center mb-16">
// //         <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
// //           Our Services
// //         </h1>
// //         <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
// //           From full performance packages to one-off installations, explore
// //           everything we offer.
// //         </p>
// //       </section>

// //       {/* Services Grid */}
// //       <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
// //         {servicesList.map((service) => (
// //           <div
// //             key={service.id}
// //             className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition"
// //           >
// //             <h3 className="text-2xl font-bold text-white mb-2">
// //               {service.name}
// //             </h3>
// //             <p className="text-zinc-400 mb-4">{service.description}</p>
// //             <ul className="text-sm text-zinc-400 mb-4">
// //               <li>
// //                 <span className="text-white font-semibold">
// //                   Estimated Time:
// //                 </span>{" "}
// //                 {service.estimatedTime}
// //               </li>
// //               <li>
// //                 <span className="text-white font-semibold">
// //                   Drop-Off Required:
// //                 </span>{" "}
// //                 {service.dropOff ? "Yes" : "No"}
// //               </li>
// //               <li>
// //                 <span className="text-white font-semibold">Cost:</span> $
// //                 {service.cost.toFixed(2)}
// //               </li>
// //             </ul>
// //             <button
// //               onClick={() => toggleService(service.id)}
// //               className={`mt-2 px-4 py-2 rounded-md font-semibold transition ${
// //                 cart.includes(service.id)
// //                   ? "bg-rose-600 hover:bg-rose-700 text-white"
// //                   : "border border-sky-500 text-white hover:bg-sky-500 hover:text-black"
// //               }`}
// //             >
// //               {cart.includes(service.id) ? "Remove from Cart" : "Add to Cart"}
// //             </button>
// //           </div>
// //         ))}
// //       </section>

// //       {/* Cart Preview */}
// //       <section className="bg-zinc-900 p-6 rounded-xl shadow-inner">
// //         <h2 className="text-2xl font-bold mb-4 text-white">
// //           Selected Services
// //         </h2>
// //         {cart.length === 0 ? (
// //           <p className="text-zinc-400 italic">No services added yet.</p>
// //         ) : (
// //           <div>
// //             <ul className="space-y-2 text-zinc-300">
// //               {cart.map((id) => {
// //                 const item = servicesList.find((s) => s.id === id);
// //                 return (
// //                   <li key={id} className="border-b border-zinc-700 pb-2">
// //                     {item?.name} — ${item?.cost.toFixed(2)}
// //                   </li>
// //                 );
// //               })}
// //             </ul>
// //             <button
// //               onClick={handleProceed}
// //               className="mt-6 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-lg"
// //             >
// //               Proceed to Booking
// //             </button>
// //           </div>
// //         )}
// //       </section>
// //     </main>
// //   );
// // };

// // export default ServicesPage;

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useBooking } from "../context/BookingContext";

// type Service = {
//   _id: string;
//   name: string;
//   description: string;
//   cost: number;
//   estimatedTime: string;
//   dropOffRequired: boolean;
//   image?: string;
// };

// const ServicesPage = () => {
//   const [services, setServices] = useState<Service[]>([]);
//   const [cart, setCart] = useState<string[]>([]);
//   const navigate = useNavigate();
//   const { setSelectedServices } = useBooking();

//   useEffect(() => {
//     fetch("http://localhost:3000/api/services")
//       .then((res) => res.json())
//       .then((data) => setServices(data))
//       .catch((err) => console.error("Failed to fetch services:", err));
//   }, []);

//   const toggleService = (id: string) => {
//     setCart((prev) =>
//       prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
//     );
//   };

//   const handleProceed = () => {
//     const selected = services
//       .filter((s) => cart.includes(s._id))
//       .map((s) => ({ id: s._id, name: s.name, cost: s.cost }));
//     setSelectedServices(selected);
//     navigate("/booking");
//   };

//   return (
//     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
//       {/* Header */}
//       <section className="text-center mb-16">
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//           Our Services
//         </h1>
//         <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
//           From performance packages to premium detailing, explore everything we
//           offer.
//         </p>
//       </section>

//       {/* Service Grid */}
//       <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
//         {services.map((service) => (
//           <div
//             key={service._id}
//             className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-sky-500/30 transition"
//           >
//             {service.image && (
//               <img
//                 src={service.image}
//                 alt={service.name}
//                 className="w-full h-40 object-cover rounded-md mb-4"
//               />
//             )}
//             <h3 className="text-2xl font-bold text-white mb-2">
//               {service.name}
//             </h3>
//             <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
//             <ul className="text-sm text-zinc-400 mb-4 space-y-1">
//               <li>
//                 <span className="text-white font-semibold">
//                   Estimated Time:
//                 </span>{" "}
//                 {service.estimatedTime}
//               </li>
//               <li>
//                 <span className="text-white font-semibold">
//                   Drop-Off Required:
//                 </span>{" "}
//                 {service.dropOffRequired ? "Yes" : "No"}
//               </li>
//               <li>
//                 <span className="text-white font-semibold">Cost:</span> $
//                 {service.cost.toFixed(2)}
//               </li>
//             </ul>
//             <button
//               onClick={() => toggleService(service._id)}
//               className={`mt-2 w-full py-2 rounded-md font-semibold transition ${
//                 cart.includes(service._id)
//                   ? "bg-rose-600 hover:bg-rose-700 text-white"
//                   : "border border-sky-500 text-white hover:bg-sky-500 hover:text-black"
//               }`}
//             >
//               {cart.includes(service._id) ? "Remove from Cart" : "Add to Cart"}
//             </button>
//           </div>
//         ))}
//       </section>

//       {/* Cart Section */}
//       <section className="bg-zinc-900 p-6 rounded-xl shadow-inner max-w-3xl mx-auto">
//         <h2 className="text-2xl font-bold mb-4 text-white">
//           Selected Services
//         </h2>
//         {cart.length === 0 ? (
//           <p className="text-zinc-400 italic">No services added yet.</p>
//         ) : (
//           <div>
//             <ul className="space-y-3 text-sm text-zinc-300">
//               {cart.map((id) => {
//                 const item = services.find((s) => s._id === id);
//                 return (
//                   <li
//                     key={id}
//                     className="border-b border-zinc-700 pb-2 flex justify-between items-center"
//                   >
//                     <span>{item?.name}</span>
//                     <span className="text-rose-500 font-semibold">
//                       ${item?.cost.toFixed(2)}
//                     </span>
//                   </li>
//                 );
//               })}
//             </ul>
//             <button
//               onClick={handleProceed}
//               className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg"
//             >
//               Proceed to Booking
//             </button>
//           </div>
//         )}
//       </section>
//     </main>
//   );
// };

// export default ServicesPage;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBooking } from "../context/BookingContext";

type Service = {
  _id: string;
  name: string;
  description: string;
  cost: number;
  estimatedTime: string;
  dropOffRequired: boolean;
  image?: string;
};

const ServicesPage = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [cart, setCart] = useState<string[]>([]);
  const navigate = useNavigate();
  const { setSelectedServices } = useBooking();

  useEffect(() => {
    fetch("http://localhost:3000/api/services")
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error("Failed to fetch services:", err));
  }, []);

  const toggleService = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((sid) => sid !== id) : [...prev, id]
    );
  };

  const handleProceed = () => {
    const selected = services
      .filter((s) => cart.includes(s._id))
      .map((s) => ({ id: s._id, name: s.name, cost: s.cost }));
    setSelectedServices(selected);
    navigate("/booking");
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Our Services
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          From performance packages to premium detailing, explore everything we
          offer.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        {services.map((service) => (
          <div
            key={service._id}
            className="bg-zinc-900 p-6 rounded-xl shadow-md hover:shadow-sky-500/30 transition"
          >
            {service.image && (
              <img
                src={service.image}
                alt={service.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
            )}
            <h3 className="text-2xl font-bold text-white mb-2">
              {service.name}
            </h3>
            <p className="text-zinc-400 text-sm mb-4">{service.description}</p>
            <ul className="text-sm text-zinc-400 mb-4 space-y-1">
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
                {service.dropOffRequired ? "Yes" : "No"}
              </li>
              <li>
                <span className="text-white font-semibold">Cost:</span> $
                {service.cost.toFixed(2)}
              </li>
            </ul>
            <button
              onClick={() => toggleService(service._id)}
              className={`mt-2 w-full py-2 rounded-md font-semibold transition ${
                cart.includes(service._id)
                  ? "bg-rose-600 hover:bg-rose-700 text-white"
                  : "border border-sky-500 text-white hover:bg-sky-500 hover:text-black"
              }`}
            >
              {cart.includes(service._id) ? "Remove from Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </section>

      <section className="bg-zinc-900 p-6 rounded-xl shadow-inner max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Selected Services
        </h2>
        {cart.length === 0 ? (
          <p className="text-zinc-400 italic">No services added yet.</p>
        ) : (
          <div>
            <ul className="space-y-3 text-sm text-zinc-300">
              {cart.map((id) => {
                const item = services.find((s) => s._id === id);
                return (
                  <li
                    key={id}
                    className="border-b border-zinc-700 pb-2 flex justify-between items-center"
                  >
                    <span>{item?.name}</span>
                    <span className="text-rose-500 font-semibold">
                      ${item?.cost.toFixed(2)}
                    </span>
                  </li>
                );
              })}
            </ul>
            <button
              onClick={handleProceed}
              className="mt-6 w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg"
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
