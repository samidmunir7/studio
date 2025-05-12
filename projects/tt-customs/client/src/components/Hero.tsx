import hero_left_img from "../assets/hero_left_img.jpg";
import hero_right_img from "../assets/hero_right_img.jpg";

const Hero = () => {
  return (
    <section className="relative w-full h-[calc(100vh-6rem)] overflow-hidden">
      {/* Two Side-by-Side Images */}
      <div className="absolute inset-0 grid grid-cols-2">
        <img
          src={hero_left_img}
          alt="Custom Car 1"
          className="w-full h-full object-cover"
        />
        <img
          src={hero_right_img}
          alt="Custom Car 2"
          className="w-full h-full object-cover"
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Text Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center text-zinc-100 px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
          TT-Customs: Built for Performance
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-8">
          High-end detailing, premium parts, and complete vehicle
          transformation—crafted with care and horsepower.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border-2 border-rose-500 hover:bg-rose-500 transition text-zinc-100 font-semibold py-3 px-6 rounded-lg shadow-md">
            Book a Service
          </button>
          <button className="border-2 border-sky-500 hover:bg-sky-500 hover:text-black transition text-zinc-100 font-semibold py-3 px-6 rounded-lg">
            Explore Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
