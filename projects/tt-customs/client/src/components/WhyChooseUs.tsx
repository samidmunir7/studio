const WhyChooseUs = () => {
  return (
    <section className="w-full bg-black text-zinc-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why Choose TT-Customs
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          We don't just upgrade cars—we elevate experiences. Here’s what sets us
          apart.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
        {/* Pillar 1 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition">
          <div className="text-rose-500 text-4xl mb-4">🎯</div>
          <h3 className="text-xl font-bold mb-2">Precision Craftsmanship</h3>
          <p className="text-zinc-400 text-sm">
            Every detail is tuned to perfection with passion, experience, and
            unmatched care.
          </p>
        </div>

        {/* Pillar 2 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition">
          <div className="text-sky-500 text-4xl mb-4">⏱️</div>
          <h3 className="text-xl font-bold mb-2">Fast Turnaround</h3>
          <p className="text-zinc-400 text-sm">
            We deliver quality work without long waits—efficiency without
            compromise.
          </p>
        </div>

        {/* Pillar 3 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition">
          <div className="text-rose-500 text-4xl mb-4">✅</div>
          <h3 className="text-xl font-bold mb-2">Certified Technicians</h3>
          <p className="text-zinc-400 text-sm">
            Trusted professionals with years of hands-on experience in
            diagnostics, electronics, and personalized automotive ugprades.
          </p>
        </div>

        {/* Pillar 4 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition">
          <div className="text-sky-500 text-4xl mb-4">🌟</div>
          <h3 className="text-xl font-bold mb-2">Customer Satisfaction</h3>
          <p className="text-zinc-400 text-sm">
            Backed by 5-star reviews and loyal enthusiasts who trust us time and
            again.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
