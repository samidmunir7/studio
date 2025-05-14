// import { useAuth } from "../context/AuthContext";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
//   CartesianGrid,
//   LineChart,
//   Line,
//   Legend,
// } from "recharts";

// type Order = {
//   _id: string;
//   createdAt: string;
//   status: string;
//   items: {
//     productId: {
//       name: string;
//     };
//     quantity: number;
//   }[];
// };

// type Booking = {
//   _id: string;
//   createdAt: string;
//   status: string;
//   scheduledDate: string;
//   scheduledTime: string;
//   serviceId: {
//     name: string;
//   };
// };

// const DashboardPage = () => {
//   const { user, logout } = useAuth();
//   const navigate = useNavigate();

// const [bookings, setBookings] = useState<Booking[]>([]);
// const [orders, setOrders] = useState<Order[]>([]);
// const [allBookings, setAllBookings] = useState<Booking[]>([]);
// const [allOrders, setAllOrders] = useState<Order[]>([]);

//   const isAdmin = user?.role === "admin";

//   useEffect(() => {
//     if (!user?.id) return;
//     if (isAdmin) {
//       fetchAllBookings();
//       fetchAllOrders();
//     } else {
//       fetchUserBookings(user.id);
//       fetchUserOrders(user.id);
//     }
//   }, [user]);

//   const fetchUserBookings = async (userId: string) => {
//     try {
//       const res = await fetch(
//         `http://localhost:3000/api/bookings/user/${userId}`
//       );
//       const data = await res.json();
//       setBookings(data);
//     } catch (err) {
//       console.error("Failed to fetch bookings", err);
//     }
//   };

//   const fetchUserOrders = async (userId: string) => {
//     try {
//       const res = await fetch(
//         `http://localhost:3000/api/orders/user/${userId}`
//       );
//       const data = await res.json();
//       setOrders(data);
//     } catch (err) {
//       console.error("Failed to fetch orders", err);
//     }
//   };

//   const fetchAllBookings = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/bookings");
//       const data = await res.json();
//       setAllBookings(data);
//     } catch (err) {
//       console.error("Failed to fetch all bookings", err);
//     }
//   };

//   const fetchAllOrders = async () => {
//     try {
//       const res = await fetch("http://localhost:3000/api/orders");
//       const data = await res.json();
//       setAllOrders(data);
//     } catch (err) {
//       console.error("Failed to fetch all orders", err);
//     }
//   };

//   const chartOrderData = allOrders.map((order) => ({
//     date: new Date(order.createdAt).toLocaleDateString(),
//     totalItems: order.items.reduce((sum, item) => sum + item.quantity, 0),
//   }));

//   const chartBookingData = allBookings.map((booking) => ({
//     date: new Date(booking.createdAt).toLocaleDateString(),
//     status: booking.status,
//   }));

//   return (
//     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
//       <div className="mb-12">
//         <h1 className="text-4xl font-extrabold">
//           {isAdmin ? "Admin Dashboard" : "Your Dashboard"},{" "}
//           <span className="text-rose-500">{user?.name}</span> 👋
//         </h1>
//         <p className="text-zinc-400 mt-2">
//           {isAdmin
//             ? "Manage services, products, and business analytics here."
//             : "Welcome back! Here's your latest activity."}
//         </p>
//       </div>

//       {isAdmin ? (
//         <>
//           <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
//             <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
//               <h2 className="text-sm text-zinc-400 uppercase">Total Orders</h2>
//               <p className="text-3xl font-bold text-white mt-2">
//                 {allOrders.length}
//               </p>
//             </div>
//             <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
//               <h2 className="text-sm text-zinc-400 uppercase">
//                 Total Bookings
//               </h2>
//               <p className="text-3xl font-bold text-white mt-2">
//                 {allBookings.length}
//               </p>
//             </div>
//             <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
//               <h2 className="text-sm text-zinc-400 uppercase">
//                 Pending Services
//               </h2>
//               <p className="text-3xl font-bold text-white mt-2">
//                 {allBookings.filter((b) => b.status !== "Completed").length}
//               </p>
//             </div>
//           </section>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
//             <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-4 text-white">Live Orders</h3>
//               <ul className="space-y-3 text-sm">
//                 {allOrders.slice(0, 5).map((order) => (
//                   <li key={order._id} className="bg-zinc-800 p-3 rounded-lg">
//                     <div className="text-white font-medium text-sm mb-1">
//                       Order #{order._id.slice(-5)} — {order.status}
//                     </div>
//                     <ul className="text-xs text-zinc-400 space-y-1">
//                       {order.items.map((item, idx) => (
//                         <li key={idx}>
//                           • {item.productId?.name} × {item.quantity}
//                         </li>
//                       ))}
//                     </ul>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-4 text-white">
//                 Upcoming Bookings
//               </h3>
//               <ul className="space-y-3 text-sm">
//                 {allBookings.slice(0, 5).map((b) => (
//                   <li key={b._id} className="bg-zinc-800 p-3 rounded-lg">
//                     <div className="text-white font-medium text-sm">
//                       {b.serviceId?.name} — {b.status}
//                     </div>
//                     <div className="text-xs text-zinc-400">
//                       {b.scheduledDate} @ {b.scheduledTime}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="bg-zinc-900 p-6 rounded-xl shadow-lg mb-16">
//             <h3 className="text-xl font-bold mb-6 text-white">
//               Business Trends
//             </h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-zinc-800 p-4 rounded-lg">
//                 <h4 className="text-white font-semibold mb-2">Orders Volume</h4>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <BarChart data={chartOrderData}>
//                     <XAxis dataKey="date" />
//                     <YAxis />
//                     <Tooltip />
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <Bar dataKey="totalItems" fill="#38bdf8" />
//                   </BarChart>
//                 </ResponsiveContainer>
//               </div>

//               <div className="bg-zinc-800 p-4 rounded-lg">
//                 <h4 className="text-white font-semibold mb-2">
//                   Bookings Timeline
//                 </h4>
//                 <ResponsiveContainer width="100%" height={250}>
//                   <LineChart data={chartBookingData}>
//                     <XAxis dataKey="date" />
//                     <YAxis />
//                     <Tooltip />
//                     <Legend />
//                     <CartesianGrid strokeDasharray="3 3" />
//                     <Line type="monotone" dataKey="status" stroke="#34d399" />
//                   </LineChart>
//                 </ResponsiveContainer>
//               </div>
//             </div>
//           </div>

//           <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-2">Manage Products</h3>
//               <p className="text-zinc-400 mb-4 text-sm">
//                 Add, update, or remove product listings in your catalog.
//               </p>
//               <button
//                 onClick={() => navigate("/admin/products")}
//                 className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-semibold text-white"
//               >
//                 Go to Products
//               </button>
//             </div>

//             <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
//               <h3 className="text-xl font-bold mb-2">Manage Services</h3>
//               <p className="text-zinc-400 mb-4 text-sm">
//                 Control your services, pricing, and booking availability.
//               </p>
//               <button
//                 onClick={() => navigate("/admin/services")}
//                 className="bg-sky-600 hover:bg-sky-700 px-4 py-2 rounded-md font-semibold text-white"
//               >
//                 Go to Services
//               </button>
//             </div>
//           </section>
//         </>
//       ) : (
//         <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
//           <div className="xl:col-span-2 space-y-12">
//             <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
//               <h2 className="text-2xl font-bold mb-4 text-white">
//                 Your Bookings
//               </h2>
//               {bookings.length === 0 ? (
//                 <p className="text-zinc-400 italic">No service bookings yet.</p>
//               ) : (
//                 <ul className="space-y-4 text-sm">
//                   {bookings.map((b) => (
//                     <li
//                       key={b._id}
//                       className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center"
//                     >
//                       <div>
//                         <div className="text-white font-medium text-lg">
//                           {b.serviceId?.name}
//                         </div>
//                         <div className="text-zinc-400">
//                           {b.scheduledDate} at {b.scheduledTime}
//                         </div>
//                       </div>
//                       <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-600 text-white">
//                         {b.status}
//                       </span>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>

//             <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
//               <h2 className="text-2xl font-bold mb-4 text-white">
//                 Your Orders
//               </h2>
//               {orders.length === 0 ? (
//                 <p className="text-zinc-400 italic">No product orders yet.</p>
//               ) : (
//                 <ul className="space-y-4 text-sm">
//                   {orders.map((o) => (
//                     <li key={o._id} className="p-4 bg-zinc-800 rounded-xl">
//                       <div className="text-white font-medium text-lg mb-1">
//                         Order #{o._id.slice(-5)}
//                       </div>
//                       <ul className="text-sm text-zinc-300 space-y-1">
//                         {o.items.map((item, index) => (
//                           <li key={index}>
//                             • {item.productId?.name} × {item.quantity}
//                           </li>
//                         ))}
//                       </ul>
//                       <div className="text-zinc-400 mt-2">
//                         Status:{" "}
//                         <span className="text-sky-400 font-semibold">
//                           {o.status}
//                         </span>
//                       </div>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </div>
//           </div>

//           <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg space-y-6">
//             <h2 className="text-2xl font-bold mb-4 text-white">Your Account</h2>
//             <div className="text-sm text-zinc-300 space-y-2">
//               <div>
//                 <span className="font-semibold text-white">Name:</span>{" "}
//                 {user?.name}
//               </div>
//               <div>
//                 <span className="font-semibold text-white">Email:</span>{" "}
//                 {user?.email}
//               </div>
//             </div>
//             <hr className="border-zinc-700 my-4" />
//             <div className="space-y-3">
//               <button
//                 className="w-full bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold"
//                 onClick={() => alert("Redirect to booking page")}
//               >
//                 Book New Service
//               </button>
//               <button
//                 className="w-full border border-zinc-500 hover:bg-zinc-800 text-white py-2 px-4 rounded-md font-semibold"
//                 onClick={() => alert("Feature coming soon")}
//               >
//                 Update Info
//               </button>
//               <button
//                 onClick={logout}
//                 className="w-full bg-rose-600 hover:bg-rose-700 text-white py-2 px-4 rounded-md font-semibold"
//               >
//                 Log Out
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default DashboardPage;

import { useAuth } from "../context/AuthContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type Order = {
  _id: string;
  status: string;
  createdAt: string;
  items: {
    productId: {
      name: string;
      price: number;
    };
    quantity: number;
  }[];
};

type Booking = {
  _id: string;
  status: string;
  createdAt: string;
  scheduledDate: string;
  scheduledTime: string;
  serviceId: {
    name: string;
  };
};

const DashboardPage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [allBookings, setAllBookings] = useState<Booking[]>([]);
  const [allOrders, setAllOrders] = useState<Order[]>([]);

  const isAdmin = user?.role === "admin";

  useEffect(() => {
    if (!user?.id) return;
    if (isAdmin) {
      fetchAllBookings();
      fetchAllOrders();
    } else {
      fetchUserBookings(user.id);
      fetchUserOrders(user.id);
    }
  }, [user]);

  const fetchUserBookings = async (userId: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/bookings/user/${userId}`
      );
      const data = await res.json();
      setBookings(data);
    } catch (err) {
      console.error("Failed to fetch bookings", err);
    }
  };

  const fetchUserOrders = async (userId: string) => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/orders/user/${userId}`
      );
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      console.error("Failed to fetch orders", err);
    }
  };

  const fetchAllBookings = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/bookings");
      const data = await res.json();
      setAllBookings(data);
    } catch (err) {
      console.error("Failed to fetch all bookings", err);
    }
  };

  const fetchAllOrders = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/orders");
      const data = await res.json();
      setAllOrders(data);
    } catch (err) {
      console.error("Failed to fetch all orders", err);
    }
  };

  const COLORS = ["#34d399", "#60a5fa", "#f87171", "#fbbf24"];

  const revenueData = allOrders.reduce((acc, order) => {
    const date = new Date(order.createdAt).toLocaleDateString();
    const total = order.items.reduce(
      (sum, item) => sum + (item.productId?.price || 0) * item.quantity,
      0
    );
    const entry = acc.find((d) => d.date === date);
    if (entry) {
      entry.revenue += total;
    } else {
      acc.push({ date, revenue: total });
    }
    return acc;
  }, [] as { date: string; revenue: number }[]);

  const bookingStatusData = [
    "Confirmed",
    "Pending",
    "Completed",
    "Cancelled",
  ].map((status) => ({
    name: status,
    value: allBookings.filter((b) => b.status === status).length,
  }));

  const orderStatusData = ["Pending", "Processing", "Shipped", "Delivered"].map(
    (status) => ({
      name: status,
      value: allOrders.filter((o) => o.status === status).length,
    })
  );

  const productFrequency: Record<string, number> = {};
  allOrders.forEach((o) => {
    o.items.forEach((i) => {
      const name = i.productId?.name;
      if (name) {
        productFrequency[name] = (productFrequency[name] || 0) + i.quantity;
      }
    });
  });

  const topProducts = Object.entries(productFrequency)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 5);

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20 min-h-screen">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold">
          {isAdmin ? "Admin Dashboard" : "Your Dashboard"},{" "}
          <span className="text-rose-500">{user?.name}</span> 👋
        </h1>
        <p className="text-zinc-400 mt-2">
          {isAdmin
            ? "Track business performance and manage everything in one place."
            : "Welcome back! Here's your latest activity."}
        </p>
      </div>

      {isAdmin ? (
        <>
          {/* Summary Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-sm text-zinc-400 uppercase">Total Revenue</h2>
              <p className="text-3xl font-bold text-white mt-2">
                ${revenueData.reduce((sum, r) => sum + r.revenue, 0).toFixed(2)}
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-sm text-zinc-400 uppercase">Total Orders</h2>
              <p className="text-3xl font-bold text-white mt-2">
                {allOrders.length}
              </p>
            </div>
            <div className="bg-zinc-900 p-6 rounded-xl shadow-xl text-center">
              <h2 className="text-sm text-zinc-400 uppercase">
                Total Bookings
              </h2>
              <p className="text-3xl font-bold text-white mt-2">
                {allBookings.length}
              </p>
            </div>
          </section>

          {/* Charts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Revenue Over Time</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={revenueData}>
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="#4ade80"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Order Status Distribution
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={orderStatusData}
                    outerRadius={100}
                    label
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">
                Booking Status Breakdown
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    dataKey="value"
                    data={bookingStatusData}
                    outerRadius={100}
                    label
                  >
                    {bookingStatusData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-zinc-900 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold mb-4">Top Products</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topProducts}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Bar dataKey="count" fill="#60a5fa" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="w-full flex justify-center gap-16">
            <button
              onClick={() => navigate("/admin/products")}
              className="w-[500px] text-2xl font-semibold border-2 border-sky-500 px-4 py-2 rounded-md hover:bg-sky-500 transition-all"
            >
              Manage Products
            </button>
            <button
              onClick={() => navigate("/admin/services")}
              className="w-[500px] text-2xl font-semibold border-2 border-rose-500 px-4 py-2 rounded-md hover:bg-rose-500 transition-all"
            >
              Manage Services
            </button>
          </div>
        </>
      ) : (
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          <div className="xl:col-span-2 space-y-12">
            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Your Bookings
              </h2>
              {bookings.length === 0 ? (
                <p className="text-zinc-400 italic">No service bookings yet.</p>
              ) : (
                <ul className="space-y-4 text-sm">
                  {bookings.map((b) => (
                    <li
                      key={b._id}
                      className="p-4 bg-zinc-800 rounded-xl flex justify-between items-center"
                    >
                      <div>
                        <div className="text-white font-medium text-lg">
                          {b.serviceId?.name}
                        </div>
                        <div className="text-zinc-400">
                          {b.scheduledDate} at {b.scheduledTime}
                        </div>
                      </div>
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-green-600 text-white">
                        {b.status}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-white">
                Your Orders
              </h2>
              {orders.length === 0 ? (
                <p className="text-zinc-400 italic">No product orders yet.</p>
              ) : (
                <ul className="space-y-4 text-sm">
                  {orders.map((o) => (
                    <li key={o._id} className="p-4 bg-zinc-800 rounded-xl">
                      <div className="text-white font-medium text-lg mb-1">
                        Order #{o._id.slice(-5)}
                      </div>
                      <ul className="text-sm text-zinc-300 space-y-1">
                        {o.items.map((item, index) => (
                          <li key={index}>
                            • {item.productId?.name} × {item.quantity}
                          </li>
                        ))}
                      </ul>
                      <div className="text-zinc-400 mt-2">
                        Status:{" "}
                        <span className="text-sky-400 font-semibold">
                          {o.status}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

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
