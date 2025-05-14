// import { useAuth } from "../context/AuthContext";

// const DashboardPage = () => {
//   const { logout } = useAuth();

//   const user = {
//     name: "Sami Munir",
//     email: "sami@ttcustoms.com",
//   };

//   const appointments = [
//     {
//       id: 1,
//       service: "Custom Vinyl Wrap",
//       date: "2025-05-20",
//       time: "10:00 AM",
//       status: "Confirmed",
//     },
//     {
//       id: 2,
//       service: "Performance Tuning",
//       date: "2025-06-05",
//       time: "1:30 PM",
//       status: "Pending",
//     },
//   ];

//   const orders = [
//     {
//       id: 101,
//       item: "Cold Air Intake",
//       price: 349.0,
//       date: "2025-04-25",
//       status: "Delivered",
//     },
//     {
//       id: 102,
//       item: "Carbon Spoiler",
//       price: 599.0,
//       date: "2025-03-30",
//       status: "Shipped",
//     },
//   ];

//   return (
//     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
//       <h1 className="text-4xl font-bold mb-10">Welcome back, {user.name} 👋</h1>

//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
//         {/* Left: Appointments + Orders */}
//         <div className="xl:col-span-2 space-y-12">
//           {/* Appointments */}
//           <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">
//               Upcoming Appointments
//             </h2>
//             {appointments.length === 0 ? (
//               <p className="text-zinc-400">No upcoming services booked.</p>
//             ) : (
//               <ul className="space-y-4 text-sm">
//                 {appointments.map((appt) => (
//                   <li
//                     key={appt.id}
//                     className="p-4 bg-zinc-800 rounded-lg flex justify-between items-center"
//                   >
//                     <div>
//                       <div className="font-semibold text-white">
//                         {appt.service}
//                       </div>
//                       <div className="text-zinc-400">
//                         {appt.date} at {appt.time}
//                       </div>
//                     </div>
//                     <span
//                       className={`text-xs font-bold px-3 py-1 rounded-full ${
//                         appt.status === "Confirmed"
//                           ? "bg-green-600 text-white"
//                           : "bg-yellow-500 text-black"
//                       }`}
//                     >
//                       {appt.status}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Orders */}
//           <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
//             <h2 className="text-2xl font-semibold mb-4">Recent Orders</h2>
//             {orders.length === 0 ? (
//               <p className="text-zinc-400">No orders yet.</p>
//             ) : (
//               <ul className="space-y-4 text-sm">
//                 {orders.map((order) => (
//                   <li
//                     key={order.id}
//                     className="p-4 bg-zinc-800 rounded-lg flex justify-between items-center"
//                   >
//                     <div>
//                       <div className="font-semibold text-white">
//                         {order.item}
//                       </div>
//                       <div className="text-zinc-400">
//                         ${order.price.toFixed(2)} • {order.date}
//                       </div>
//                     </div>
//                     <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-600 text-white">
//                       {order.status}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>
//         </div>

//         {/* Right: Account Panel */}
//         <div className="bg-zinc-900 p-6 rounded-xl shadow-lg space-y-6">
//           <h2 className="text-2xl font-semibold mb-4">Your Account</h2>
//           <div className="text-sm space-y-2 text-zinc-300">
//             <div>
//               <span className="font-semibold text-white">Name:</span>{" "}
//               {user.name}
//             </div>
//             <div>
//               <span className="font-semibold text-white">Email:</span>{" "}
//               {user.email}
//             </div>
//           </div>
//           <hr className="border-zinc-700 my-4" />
//           <div className="space-y-3">
//             <button className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold">
//               Book New Service
//             </button>
//             <button className="w-full border border-zinc-500 hover:bg-zinc-800 text-white py-2 px-4 rounded-md font-semibold">
//               Update Info
//             </button>
//             <button
//               onClick={logout}
//               className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-md font-semibold"
//             >
//               Log Out
//             </button>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default DashboardPage;

import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  // Replace with real API calls later
  const [appointments, setAppointments] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // TODO: Replace with real fetch to backend using token
    setAppointments([
      {
        id: 1,
        service: "Full Ceramic Detailing",
        date: "2025-06-02",
        time: "9:00 AM",
        status: "Confirmed",
      },
    ]);

    setOrders([
      {
        id: 201,
        item: "APR Carbon Spoiler",
        price: 649.0,
        date: "2025-05-01",
        status: "Delivered",
      },
    ]);
  }, []);

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <h1 className="text-4xl font-extrabold mb-10">
        Welcome back, <span className="text-rose-500">{user?.name}</span> 👋
      </h1>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
        {/* Left Panel: Appointments + Orders */}
        <div className="xl:col-span-2 space-y-12">
          {/* Appointments Section */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Upcoming Appointments
            </h2>
            {appointments.length === 0 ? (
              <p className="text-zinc-400 italic">
                You have no upcoming bookings.
              </p>
            ) : (
              <ul className="space-y-4 text-sm">
                {appointments.map((appt) => (
                  <li
                    key={appt.id}
                    className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center"
                  >
                    <div>
                      <div className="text-white font-medium text-lg">
                        {appt.service}
                      </div>
                      <div className="text-zinc-400">
                        {appt.date} at {appt.time}
                      </div>
                    </div>
                    <span
                      className={`text-xs font-bold px-3 py-1 rounded-full ${
                        appt.status === "Confirmed"
                          ? "bg-green-600 text-white"
                          : "bg-yellow-400 text-black"
                      }`}
                    >
                      {appt.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Orders Section */}
          <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-white">
              Recent Orders
            </h2>
            {orders.length === 0 ? (
              <p className="text-zinc-400 italic">
                No recent product purchases.
              </p>
            ) : (
              <ul className="space-y-4 text-sm">
                {orders.map((order) => (
                  <li
                    key={order.id}
                    className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center"
                  >
                    <div>
                      <div className="text-white font-medium text-lg">
                        {order.item}
                      </div>
                      <div className="text-zinc-400">
                        ${order.price.toFixed(2)} • {order.date}
                      </div>
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-600 text-white">
                      {order.status}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right Panel: Account Info + Actions */}
        <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg space-y-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Your Account</h2>
          <div className="text-sm text-zinc-300 space-y-2">
            <div>
              <span className="font-semibold text-white">Name:</span>{" "}
              {user?.name}
            </div>
            <div>
              <span className="font-semibold text-white">Email:</span>{" "}
              {user?.email}
            </div>
          </div>

          <hr className="border-zinc-700 my-4" />

          <div className="space-y-3">
            <button
              className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold"
              onClick={() => alert("Redirect to booking page")}
            >
              Book New Service
            </button>
            <button
              className="w-full border border-zinc-500 hover:bg-zinc-800 text-white py-2 px-4 rounded-md font-semibold"
              onClick={() => alert("Feature coming soon")}
            >
              Update Info
            </button>
            <button
              onClick={logout}
              className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-md font-semibold"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardPage;
