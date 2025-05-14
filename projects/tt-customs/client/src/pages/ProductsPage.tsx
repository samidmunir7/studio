// import { useEffect, useState } from "react";

// type Product = {
//   _id: string;
//   name: string;
//   brand: string;
//   manufacturer: string;
//   fitment: string;
//   type: string;
//   price: number;
//   quantity: number;
//   description: string;
//   images: string[];
//   installable: boolean;
// };

// const ProductsPage = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [filtered, setFiltered] = useState<Product[]>([]);
//   const [cart, setCart] = useState<string[]>([]);

//   const [search, setSearch] = useState("");
//   const [brand, setBrand] = useState("");
//   const [manufacturer, setManufacturer] = useState("");
//   const [type, setType] = useState("");
//   const [sort, setSort] = useState("");

//   useEffect(() => {
//     fetch("http://localhost:3000/api/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFiltered(data);
//       })
//       .catch((err) => console.error("Failed to fetch products:", err));
//   }, []);

//   useEffect(() => {
//     let temp = [...products];

//     if (search) {
//       temp = temp.filter((p) =>
//         p.name.toLowerCase().includes(search.toLowerCase())
//       );
//     }
//     if (brand) temp = temp.filter((p) => p.brand === brand);
//     if (manufacturer)
//       temp = temp.filter((p) => p.manufacturer === manufacturer);
//     if (type) temp = temp.filter((p) => p.type === type);

//     if (sort === "priceLowHigh") temp.sort((a, b) => a.price - b.price);
//     if (sort === "priceHighLow") temp.sort((a, b) => b.price - a.price);
//     if (sort === "nameAZ") temp.sort((a, b) => a.name.localeCompare(b.name));
//     if (sort === "nameZA") temp.sort((a, b) => b.name.localeCompare(a.name));

//     setFiltered(temp);
//   }, [search, brand, manufacturer, type, sort, products]);

//   const toggleCart = (id: string) => {
//     setCart((prev) =>
//       prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
//     );
//   };

//   const brands = [...new Set(products.map((p) => p.brand))];
//   const manufacturers = [...new Set(products.map((p) => p.manufacturer))];
//   const types = [...new Set(products.map((p) => p.type))];

//   return (
//     <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
//       {/* Header */}
//       <div className="text-center mb-12">
//         <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
//           Our Products
//         </h1>
//         <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
//           High-performance upgrades and premium styling — filter, search, and
//           select what suits your build.
//         </p>
//       </div>

//       {/* Controls */}
//       <div className="flex flex-col lg:flex-row gap-6 justify-between mb-10">
//         {/* Search */}
//         <input
//           type="text"
//           placeholder="Search products..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full lg:max-w-md bg-zinc-800 px-4 py-3 rounded-lg text-white"
//         />

//         {/* Filters */}
//         <div className="flex flex-wrap gap-4 text-sm text-black">
//           <select
//             className="bg-white px-3 py-2 rounded-md"
//             value={brand}
//             onChange={(e) => setBrand(e.target.value)}
//           >
//             <option value="">All Brands</option>
//             {brands.map((b) => (
//               <option key={b} value={b}>
//                 {b}
//               </option>
//             ))}
//           </select>

//           <select
//             className="bg-white px-3 py-2 rounded-md"
//             value={manufacturer}
//             onChange={(e) => setManufacturer(e.target.value)}
//           >
//             <option value="">All Manufacturers</option>
//             {manufacturers.map((m) => (
//               <option key={m} value={m}>
//                 {m}
//               </option>
//             ))}
//           </select>

//           <select
//             className="bg-white px-3 py-2 rounded-md"
//             value={type}
//             onChange={(e) => setType(e.target.value)}
//           >
//             <option value="">All Types</option>
//             {types.map((t) => (
//               <option key={t} value={t}>
//                 {t}
//               </option>
//             ))}
//           </select>

//           <select
//             className="bg-white px-3 py-2 rounded-md"
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//           >
//             <option value="">Sort</option>
//             <option value="priceLowHigh">Price: Low to High</option>
//             <option value="priceHighLow">Price: High to Low</option>
//             <option value="nameAZ">Name: A-Z</option>
//             <option value="nameZA">Name: Z-A</option>
//           </select>
//         </div>
//       </div>

//       {/* Products + Cart */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
//         {/* Product Cards */}
//         <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {filtered.map((product) => (
//             <div
//               key={product._id}
//               className="bg-zinc-900 p-4 rounded-xl shadow-md hover:shadow-sky-500/30 transition space-y-3"
//             >
//               <div className="w-full h-48 bg-zinc-800 rounded-md overflow-hidden">
//                 {product.images?.[0] ? (
//                   <img
//                     src={product.images[0]}
//                     alt={product.name}
//                     className="w-full h-full object-cover"
//                   />
//                 ) : (
//                   <div className="h-full flex items-center justify-center text-zinc-500">
//                     No Image
//                   </div>
//                 )}
//               </div>
//               <h3 className="text-xl font-bold text-white">{product.name}</h3>
//               <p className="text-sm text-zinc-400">{product.description}</p>
//               <div className="text-sm text-zinc-500">
//                 {product.brand} • {product.manufacturer}
//               </div>
//               <div className="text-rose-500 font-bold text-lg">
//                 ${product.price.toFixed(2)}
//               </div>

//               <button
//                 onClick={() => toggleCart(product._id)}
//                 className={`w-full py-2 px-4 rounded-md font-semibold transition ${
//                   cart.includes(product._id)
//                     ? "bg-rose-600 hover:bg-rose-700 text-white"
//                     : "border border-sky-500 hover:bg-sky-500 hover:text-black text-white"
//                 }`}
//               >
//                 {cart.includes(product._id)
//                   ? "Remove from Cart"
//                   : "Add to Cart"}
//               </button>

//               {product.installable && (
//                 <button
//                   className="w-full mt-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold"
//                   onClick={() => alert("Redirect to booking...")}
//                 >
//                   Schedule Installation
//                 </button>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Cart Panel */}
//         <div className="bg-zinc-900 p-6 rounded-2xl h-fit sticky top-24 shadow-xl border border-zinc-700">
//           <h2 className="text-2xl font-bold mb-4 text-white">🛒 Your Cart</h2>
//           {cart.length === 0 ? (
//             <p className="text-zinc-400 italic">No items in cart.</p>
//           ) : (
//             <ul className="text-zinc-300 space-y-3 text-sm">
//               {cart.map((id) => {
//                 const item = products.find((p) => p._id === id);
//                 return (
//                   <li
//                     key={id}
//                     className="flex justify-between border-b border-zinc-700 pb-1"
//                   >
//                     <span>{item?.name}</span>
//                     <span className="text-rose-500">
//                       ${item?.price.toFixed(2)}
//                     </span>
//                   </li>
//                 );
//               })}
//             </ul>
//           )}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default ProductsPage;

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

type Product = {
  _id: string;
  name: string;
  brand: string;
  manufacturer: string;
  fitment: string;
  type: string;
  price: number;
  quantity: number;
  description: string;
  images: string[];
  installable: boolean;
};

const ProductsPage = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [cart, setCart] = useState<string[]>([]);

  const [search, setSearch] = useState("");
  const [brand, setBrand] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [type, setType] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setFiltered(data);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    let temp = [...products];

    if (search) {
      temp = temp.filter((p) =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (brand) temp = temp.filter((p) => p.brand === brand);
    if (manufacturer)
      temp = temp.filter((p) => p.manufacturer === manufacturer);
    if (type) temp = temp.filter((p) => p.type === type);

    if (sort === "priceLowHigh") temp.sort((a, b) => a.price - b.price);
    if (sort === "priceHighLow") temp.sort((a, b) => b.price - a.price);
    if (sort === "nameAZ") temp.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === "nameZA") temp.sort((a, b) => b.name.localeCompare(a.name));

    setFiltered(temp);
  }, [search, brand, manufacturer, type, sort, products]);

  const toggleCart = (id: string) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  const placeOrder = async () => {
    if (!user) return alert("You must be logged in to place an order.");
    if (cart.length === 0) return alert("Cart is empty.");

    const items = cart.map((id) => ({ productId: id, quantity: 1 }));
    const total = items.reduce((acc, item) => {
      const product = products.find((p) => p._id === item.productId);
      return acc + (product?.price || 0);
    }, 0);

    try {
      const res = await fetch("http://localhost:3000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.id, items, total }),
      });
      if (!res.ok) throw new Error("Failed to place order");
      alert("Order placed successfully!");
      setCart([]);
    } catch (err) {
      console.error(err);
      alert("There was an error placing your order.");
    }
  };

  const brands = [...new Set(products.map((p) => p.brand))];
  const manufacturers = [...new Set(products.map((p) => p.manufacturer))];
  const types = [...new Set(products.map((p) => p.type))];

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Our Products
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          High-performance upgrades and premium styling — filter, search, and
          select what suits your build.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full lg:max-w-md bg-zinc-800 px-4 py-3 rounded-lg text-white"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 text-sm text-black">
          <select
            className="bg-white px-3 py-2 rounded-md"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            {brands.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </select>

          <select
            className="bg-white px-3 py-2 rounded-md"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          >
            <option value="">All Manufacturers</option>
            {manufacturers.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>

          <select
            className="bg-white px-3 py-2 rounded-md"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="">All Types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          <select
            className="bg-white px-3 py-2 rounded-md"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
          </select>
        </div>
      </div>

      {/* Products + Cart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Product Cards */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filtered.map((product) => (
            <div
              key={product._id}
              className="bg-zinc-900 p-4 rounded-xl shadow-md hover:shadow-sky-500/30 transition space-y-3"
            >
              <div className="w-full h-48 bg-zinc-800 rounded-md overflow-hidden">
                {product.images?.[0] ? (
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="h-full flex items-center justify-center text-zinc-500">
                    No Image
                  </div>
                )}
              </div>
              <h3 className="text-xl font-bold text-white">{product.name}</h3>
              <p className="text-sm text-zinc-400">{product.description}</p>
              <div className="text-sm text-zinc-500">
                {product.brand} • {product.manufacturer}
              </div>
              <div className="text-rose-500 font-bold text-lg">
                ${product.price.toFixed(2)}
              </div>

              <button
                onClick={() => toggleCart(product._id)}
                className={`w-full py-2 px-4 rounded-md font-semibold transition ${
                  cart.includes(product._id)
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "border border-sky-500 hover:bg-sky-500 hover:text-black text-white"
                }`}
              >
                {cart.includes(product._id)
                  ? "Remove from Cart"
                  : "Add to Cart"}
              </button>

              {product.installable && (
                <button
                  className="w-full mt-2 bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded-md font-semibold"
                  onClick={() => alert("Redirect to booking...")}
                >
                  Schedule Installation
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Cart Panel */}
        <div className="bg-zinc-900 p-6 rounded-2xl h-fit sticky top-24 shadow-xl border border-zinc-700">
          <h2 className="text-2xl font-bold mb-4 text-white">🛒 Your Cart</h2>
          {cart.length === 0 ? (
            <p className="text-zinc-400 italic">No items in cart.</p>
          ) : (
            <>
              <ul className="text-zinc-300 space-y-3 text-sm">
                {cart.map((id) => {
                  const item = products.find((p) => p._id === id);
                  return (
                    <li
                      key={id}
                      className="flex justify-between border-b border-zinc-700 pb-1"
                    >
                      <span>{item?.name}</span>
                      <span className="text-rose-500">
                        ${item?.price.toFixed(2)}
                      </span>
                    </li>
                  );
                })}
              </ul>
              <button
                onClick={placeOrder}
                className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md"
              >
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
