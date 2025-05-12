import { useState } from "react";

// Sample Product Data
const allProducts = [
  {
    id: 1,
    name: "Performance Exhaust",
    price: 799.99,
    brand: "Borla",
    manufacturer: "Ford",
    fitment: "Mustang GT",
    type: "Exhaust",
    image: "/images/exhaust.jpg",
    installable: true,
  },
  {
    id: 2,
    name: "Cold Air Intake",
    price: 349.0,
    brand: "K&N",
    manufacturer: "Chevy",
    fitment: "Camaro SS",
    type: "Intake",
    image: "/images/intake.jpg",
    installable: true,
  },
  {
    id: 3,
    name: "Carbon Spoiler",
    price: 599.0,
    brand: "APR",
    manufacturer: "BMW",
    fitment: "M4",
    type: "Aero",
    image: "/images/spoiler.jpg",
    installable: false,
  },
  {
    id: 4,
    name: "Performance Coilovers",
    price: 1249.0,
    brand: "BC Racing",
    manufacturer: "Subaru",
    fitment: "WRX STI",
    type: "Suspension",
    image: "/images/coilovers.jpg",
    installable: true,
  },
];

// Filter Options
const brands = [...new Set(allProducts.map((p) => p.brand))];
const manufacturers = [...new Set(allProducts.map((p) => p.manufacturer))];
const types = [...new Set(allProducts.map((p) => p.type))];

const ProductsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedManufacturer, setSelectedManufacturer] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [cart, setCart] = useState<number[]>([]);

  // Filtering + Searching
  let filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  if (selectedBrand)
    filteredProducts = filteredProducts.filter(
      (p) => p.brand === selectedBrand
    );
  if (selectedManufacturer)
    filteredProducts = filteredProducts.filter(
      (p) => p.manufacturer === selectedManufacturer
    );
  if (selectedType)
    filteredProducts = filteredProducts.filter((p) => p.type === selectedType);

  // Sorting
  if (sortOption === "priceLowHigh")
    filteredProducts.sort((a, b) => a.price - b.price);
  else if (sortOption === "priceHighLow")
    filteredProducts.sort((a, b) => b.price - a.price);
  else if (sortOption === "nameAZ")
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  else if (sortOption === "nameZA")
    filteredProducts.sort((a, b) => b.name.localeCompare(a.name));

  // Cart Logic
  const toggleCart = (id: number) => {
    setCart((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    );
  };

  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Our Products
        </h1>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Explore premium auto parts and accessories for every build and budget.
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col lg:flex-row gap-6 justify-between mb-10">
        {/* Search */}
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full lg:max-w-md bg-zinc-800 px-4 py-3 rounded-lg text-white"
        />

        {/* Filters */}
        <div className="flex flex-wrap gap-4 text-sm text-black">
          <select
            className="bg-white px-3 py-2 rounded-md"
            value={selectedBrand}
            onChange={(e) => setSelectedBrand(e.target.value)}
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
            value={selectedManufacturer}
            onChange={(e) => setSelectedManufacturer(e.target.value)}
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
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All Types</option>
            {types.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>

          {/* Sort */}
          <select
            className="bg-white px-3 py-2 rounded-md"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Sort</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="nameAZ">Name: A-Z</option>
            <option value="nameZA">Name: Z-A</option>
          </select>
        </div>
      </div>

      {/* Layout: Products + Cart */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Products */}
        <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-zinc-900 p-4 rounded-xl shadow-lg hover:shadow-sky-500/30 transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md w-full h-40 object-cover mb-4"
              />
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-zinc-400 mb-2">${product.price.toFixed(2)}</p>
              <p className="text-sm text-zinc-500 mb-2">
                {product.brand} • {product.manufacturer}
              </p>
              <button
                onClick={() => toggleCart(product.id)}
                className={`w-full py-2 px-4 rounded-md font-semibold transition ${
                  cart.includes(product.id)
                    ? "bg-rose-600 hover:bg-rose-700 text-white"
                    : "border border-sky-500 hover:bg-sky-500 hover:text-black text-white"
                }`}
              >
                {cart.includes(product.id) ? "Remove from Cart" : "Add to Cart"}
              </button>
              {product.installable && (
                <button
                  className="mt-3 w-full py-2 px-4 bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-md"
                  onClick={() => alert("Redirecting to booking...")}
                >
                  Schedule Service
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="bg-zinc-900 p-6 rounded-xl h-fit sticky top-24">
          <h2 className="text-2xl font-bold mb-4 text-white">Cart</h2>
          {cart.length === 0 ? (
            <p className="text-zinc-400 italic">No items added yet.</p>
          ) : (
            <ul className="text-zinc-300 space-y-3 text-sm">
              {cart.map((id) => {
                const product = allProducts.find((p) => p.id === id);
                return (
                  <li key={id}>
                    {product?.name} — ${product?.price.toFixed(2)}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
