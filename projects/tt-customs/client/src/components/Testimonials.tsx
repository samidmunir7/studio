const Testimonials = () => {
  return (
    <section className="w-full bg-black text-zinc-100 py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          What Our Clients Say
        </h2>
        <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
          Real feedback from performance lovers and detail-obsessed clients who
          trust TT-Customs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Testimonial 1 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition">
          <p className="text-zinc-300 italic mb-4">
            “TT-Customs gave my Mustang a new soul. The performance tuning was
            top-notch and the staff knew their stuff.”
          </p>
          <div className="text-sm text-zinc-400">
            — Alex R., 2018 Ford Mustang GT
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition">
          <p className="text-zinc-300 italic mb-4">
            “Their attention to detail on my wrap was insane. My car looks like
            it just rolled out of a concept garage.”
          </p>
          <div className="text-sm text-zinc-400">— Mia L., BMW M4</div>
        </div>

        {/* Testimonial 3 */}
        <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition">
          <p className="text-zinc-300 italic mb-4">
            “Reliable, professional, and fast. TT-Customs handled my upgrades
            with care and precision.”
          </p>
          <div className="text-sm text-zinc-400">— Kevin T., Audi S5</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
