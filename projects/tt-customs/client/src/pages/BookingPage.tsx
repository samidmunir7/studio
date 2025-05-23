// import { useBooking } from "../context/BookingContext";
// import { useState } from "react";

// const BookingPage = () => {
//   const { selectedServices } = useBooking();
//   const [customerName, setCustomerName] = useState("");
//   const [email, setEmail] = useState("");
//   const [date, setDate] = useState("");
//   const [time, setTime] = useState("");

//   const handleSubmit = () => {
//     // Here you'd eventually send this to a backend
//     console.log({ customerName, email, date, time, selectedServices });
//     alert("Booking confirmed!");
//   };

//   return (
//     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
//       <h1 className="text-4xl font-bold mb-10 text-center">
//         Confirm Your Booking
//       </h1>

//       <div className="mb-10">
//         <h2 className="text-2xl mb-4 font-semibold">Selected Services:</h2>
//         <ul className="space-y-2 text-zinc-300">
//           {selectedServices.map((s) => (
//             <li key={s.id}>
//               {s.name} — ${s.cost.toFixed(2)}
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
//         <input
//           className="bg-zinc-800 p-4 rounded-lg text-white"
//           placeholder="Full Name"
//           value={customerName}
//           onChange={(e) => setCustomerName(e.target.value)}
//         />
//         <input
//           className="bg-zinc-800 p-4 rounded-lg text-white"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="date"
//           className="bg-zinc-800 p-4 rounded-lg text-white"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//         />
//         <input
//           type="time"
//           className="bg-zinc-800 p-4 rounded-lg text-white"
//           value={time}
//           onChange={(e) => setTime(e.target.value)}
//         />
//       </div>

//       <button
//         onClick={handleSubmit}
//         className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg"
//       >
//         Confirm Booking
//       </button>
//     </main>
//   );
// };

// export default BookingPage;

import { useBooking } from "../context/BookingContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const BookingPage = () => {
  const { selectedServices } = useBooking();
  const { user } = useAuth();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(false);

  const handleBooking = async () => {
    if (!user) return alert("Please log in to confirm booking.");
    if (!date || !time) return alert("Please select a valid date and time.");

    try {
      setLoading(true);
      for (const service of selectedServices) {
        await fetch("http://localhost:3000/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userId: user.id,
            serviceId: service.id,
            scheduledDate: date,
            scheduledTime: time,
          }),
        });
      }
      alert("Booking confirmed!");
    } catch (err) {
      console.error("Booking failed", err);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Confirm Your Booking
      </h1>

      <div className="mb-10">
        <h2 className="text-2xl mb-4 font-semibold">Selected Services:</h2>
        <ul className="space-y-2 text-zinc-300">
          {selectedServices.map((s) => (
            <li key={s.id}>
              {s.name} — ${s.cost.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <input
          type="date"
          className="bg-zinc-800 p-4 rounded-lg text-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="bg-zinc-800 p-4 rounded-lg text-white"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>

      <button
        onClick={handleBooking}
        disabled={loading}
        className="bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-6 rounded-lg"
      >
        {loading ? "Booking..." : "Confirm Booking"}
      </button>
    </main>
  );
};

export default BookingPage;
