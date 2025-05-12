import about_img from "../assets/about_img.jpg";

const AboutPage = () => {
  return (
    <main className="bg-black text-zinc-100 px-6 md:px-12 lg:px-24 py-20">
      {/* Intro Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
          About TT-Customs
        </h1>
        <p className="text-lg text-zinc-400 max-w-3xl mx-auto">
          At TT-Customs, we're not just mechanics—we're artisans of speed,
          style, and precision. Our mission is to turn your car into a
          reflection of your personality, your goals, and your adrenaline.
        </p>
      </section>

      {/* Image + Text Split */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
        <img
          src={about_img}
          alt="TT-Customs Garage"
          className="rounded-xl shadow-lg object-cover w-full h-96"
        />
        <div>
          <h2 className="text-3xl font-bold mb-4 text-white">
            Where Craft Meets Performance
          </h2>
          <p className="text-zinc-400 text-md">
            Founded by a team of passionate builders and tuners, TT-Customs was
            born out of love for custom culture and performance engineering.
            From detailed wraps and tuning to full builds, we handle every job
            with care, creativity, and horsepower.
          </p>
        </div>
      </section>

      {/* Timeline / Journey */}
      <section className="mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">Our Journey</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition">
            <h3 className="text-xl font-semibold text-rose-500 mb-2">2018</h3>
            <p className="text-sm text-zinc-400">
              Started in a small garage in Los Angeles with one lift and a
              dream.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-sky-500/30 transition">
            <h3 className="text-xl font-semibold text-sky-500 mb-2">2021</h3>
            <p className="text-sm text-zinc-400">
              Expanded our team and began full vehicle transformations & tuning.
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-xl shadow-lg hover:shadow-rose-500/30 transition">
            <h3 className="text-xl font-semibold text-rose-500 mb-2">Now</h3>
            <p className="text-sm text-zinc-400">
              Serving clients across California with a reputation for excellence
              and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Strip */}
      <section className="bg-zinc-900 p-10 rounded-xl text-center shadow-lg hover:shadow-sky-500/30 transition">
        <h2 className="text-2xl font-bold mb-4">
          Ready to Transform Your Ride?
        </h2>
        <p className="text-zinc-400 mb-6">
          Let’s take your car to the next level—book a service or browse our
          shop.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-rose-600 hover:bg-rose-700 transition text-white font-semibold py-3 px-6 rounded-lg">
            Book a Service
          </button>
          <button className="border border-sky-500 hover:bg-sky-500 hover:text-black transition text-white font-semibold py-3 px-6 rounded-lg">
            Explore Products
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
