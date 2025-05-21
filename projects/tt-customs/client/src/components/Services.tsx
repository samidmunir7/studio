const Services = () => {
  return (
    <section className="w-full bg-black text-zinc-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Our Core Services
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Explore our range of professional automotive services tailored to
          performance enthusiasts and style seekers alike.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Service Card 1 */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-rose-500/30 transition">
          <div className="text-rose-500 text-4xl mb-4">🛠️</div>
          <h3 className="text-xl font-bold mb-2">
            Apple/Android Car Play Upgrades
          </h3>
          <p className="text-zinc-400 text-sm">
            Got an older vehicle? Boost your driving experience with our Apple
            Car Play or Android Auto installations.
          </p>
        </div>

        {/* Service Card 2 */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-sky-500/30 transition">
          <div className="text-sky-500 text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-bold mb-2">Interior Ambience Upgrades</h3>
          <p className="text-zinc-400 text-sm">
            Turn heads with personalized ambient lighting and starlight roof
            installations.
          </p>
        </div>

        {/* Service Card 3 */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-rose-500/30 transition">
          <div className="text-rose-500 text-4xl mb-4">🔧</div>
          <h3 className="text-xl font-bold mb-2">Part Installation</h3>
          <p className="text-zinc-400 text-sm">
            High-performance part installation done by certified techs for
            precision and safety.
          </p>
        </div>

        {/* Service Card 4 */}
        <div className="bg-zinc-900 rounded-xl p-6 shadow-lg hover:shadow-sky-500/30 transition">
          <div className="text-sky-500 text-4xl mb-4">🧰</div>
          <h3 className="text-xl font-bold mb-2">Diagnostics & Repair</h3>
          <p className="text-zinc-400 text-sm">
            From warning lights to full-system scans, we offer transparent and
            expert diagnostics.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
