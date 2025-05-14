// import { useAuth } from "../context/AuthContext";
// import { useState, useEffect } from "react";

// const DashboardPage = () => {
//   const { user, logout } = useAuth();

//   // Replace with real API calls later
//   const [appointments, setAppointments] = useState([]);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     // TODO: Replace with real fetch to backend using token
//     setAppointments([
//       {
//         id: 1,
//         service: "Full Ceramic Detailing",
//         date: "2025-06-02",
//         time: "9:00 AM",
//         status: "Confirmed",
//       },
//     ]);

//     setOrders([
//       {
//         id: 201,
//         item: "APR Carbon Spoiler",
//         price: 649.0,
//         date: "2025-05-01",
//         status: "Delivered",
//       },
//     ]);
//   }, []);

//   return (
//     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
//       <h1 className="text-4xl font-extrabold mb-10">
//         Welcome back, <span className="text-rose-500">{user?.name}</span> 👋
//       </h1>

//       <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
//         {/* Left Panel: Appointments + Orders */}
//         <div className="xl:col-span-2 space-y-12">
//           {/* Appointments Section */}
//           <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Upcoming Appointments
//             </h2>
//             {appointments.length === 0 ? (
//               <p className="text-zinc-400 italic">
//                 You have no upcoming bookings.
//               </p>
//             ) : (
//               <ul className="space-y-4 text-sm">
//                 {appointments.map((appt) => (
//                   <li
//                     key={appt.id}
//                     className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center"
//                   >
//                     <div>
//                       <div className="text-white font-medium text-lg">
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
//                           : "bg-yellow-400 text-black"
//                       }`}
//                     >
//                       {appt.status}
//                     </span>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </div>

//           {/* Orders Section */}
//           <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
//             <h2 className="text-2xl font-bold mb-4 text-white">
//               Recent Orders
//             </h2>
//             {orders.length === 0 ? (
//               <p className="text-zinc-400 italic">
//                 No recent product purchases.
//               </p>
//             ) : (
//               <ul className="space-y-4 text-sm">
//                 {orders.map((order) => (
//                   <li
//                     key={order.id}
//                     className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center"
//                   >
//                     <div>
//                       <div className="text-white font-medium text-lg">
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

//         {/* Right Panel: Account Info + Actions */}
//         <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg space-y-6">
//           <h2 className="text-2xl font-bold mb-4 text-white">Your Account</h2>
//           <div className="text-sm text-zinc-300 space-y-2">
//             <div>
//               <span className="font-semibold text-white">Name:</span>{" "}
//               {user?.name}
//             </div>
//             <div>
//               <span className="font-semibold text-white">Email:</span>{" "}
//               {user?.email}
//             </div>
//           </div>

//           <hr className="border-zinc-700 my-4" />

//           <div className="space-y-3">
//             <button
//               className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold"
//               onClick={() => alert("Redirect to booking page")}
//             >
//               Book New Service
//             </button>
//             <button
//               className="w-full border border-zinc-500 hover:bg-zinc-800 text-white py-2 px-4 rounded-md font-semibold"
//               onClick={() => alert("Feature coming soon")}
//             >
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const [appointments, setAppointments] = useState([]);
  const [orders, setOrders] = useState([]);

  // Sample mock data
  useEffect(() => {
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

  const isAdmin = user?.role === "admin"; // 👈 Add this check when role is passed from backend

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold">
          {isAdmin ? "Admin Dashboard" : "Your Dashboard"},{" "}
          <span className="text-rose-500">{user?.name}</span> 👋
        </h1>
        <p className="text-zinc-400 mt-2">
          {isAdmin
            ? "Manage services, products, and bookings here."
            : "Welcome back! Here's your latest activity."}
        </p>
      </div>

      {isAdmin ? (
        <>
          {/* Admin Quick Stats */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-sm text-zinc-400 uppercase">
                Total Products
              </h2>
              <p className="text-3xl font-bold text-white mt-2">52</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-sm text-zinc-400 uppercase">
                Total Services
              </h2>
              <p className="text-3xl font-bold text-white mt-2">17</p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-sm text-zinc-400 uppercase">
                Active Bookings
              </h2>
              <p className="text-3xl font-bold text-white mt-2">6</p>
            </div>
          </section>

          {/* Admin Management Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Manage Products</h3>
              <p className="text-zinc-400 mb-4 text-sm">
                Add, update, or remove product listings in your catalog.
              </p>
              <button
                onClick={() => navigate("/admin/products")}
                className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-semibold text-white"
              >
                Go to Products
              </button>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-2">Manage Services</h3>
              <p className="text-zinc-400 mb-4 text-sm">
                Control your services, pricing, and booking availability.
              </p>
              <button
                onClick={() => navigate("/admin/services")}
                className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-semibold text-white"
              >
                Go to Services
              </button>
            </div>
          </section>
        </>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Appointments */}
          <div className="xl:col-span-2 space-y-12">
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

            {/* Orders */}
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

          {/* Account Info */}
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
      )}
    </main>
  );
};

export default DashboardPage;
