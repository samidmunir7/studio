import CTAPrimary from "./ui/CTAPrimary";
import CTASecondary from "./ui/CTASecondary";

const Hero = () => {
  return (
    <section className="w-full bg-zinc-800 p-16 h-[88vh] flex justify-center items-center">
      <div className="bg-zinc-900 w-full h-full flex items-center justify-center">
        <div>
          <h1 className="text-5xl text-zinc-300">
            Welcome to{" "}
            <span className="text-amber-500 font-semibold">Career Dock</span>
          </h1>
          <h2 className="text-4xl text-zinc-500 mt-2">
            Track your career search journey!
          </h2>
          <div className="flex items-center justify-center gap-8 mt-8">
            <CTAPrimary label="Login" />
            <CTASecondary label="Get Started" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
