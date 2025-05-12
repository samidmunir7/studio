const Products = () => {
  return (
    <section className="w-full bg-black text-zinc-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Top-Tier Products
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Explore our premium selection of performance parts and automotive
          accessories trusted by enthusiasts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Product Card 1 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-rose-500/30 transition">
          <img
            src="/images/product1.jpg"
            alt="Performance Exhaust"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Performance Exhaust</h3>
            <p className="text-rose-500 font-bold mb-4">$799.99</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-md">
              View Product
            </button>
          </div>
        </div>

        {/* Product Card 2 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-sky-500/30 transition">
          <img
            src="/images/product2.jpg"
            alt="Cold Air Intake"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Cold Air Intake</h3>
            <p className="text-sky-500 font-bold mb-4">$349.00</p>
            <button className="bg-sky-600 hover:bg-sky-700 text-white font-medium py-2 px-4 rounded-md">
              View Product
            </button>
          </div>
        </div>

        {/* Product Card 3 */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:shadow-rose-500/30 transition">
          <img
            src="/images/product3.jpg"
            alt="Carbon Fiber Spoiler"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Carbon Fiber Spoiler</h3>
            <p className="text-rose-500 font-bold mb-4">$599.00</p>
            <button className="bg-rose-600 hover:bg-rose-700 text-white font-medium py-2 px-4 rounded-md">
              View Product
            </button>
          </div>
        </div>

        {/* Add more products as needed */}
      </div>
    </section>
  );
};

export default Products;
