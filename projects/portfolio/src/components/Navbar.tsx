const Navbar = () => {
  return (
    <div className="w-full bg-gradient-to-r from-zinc-900 to-zinc-800 px-8 py-4 flex items-center justify-between shadow-2xl">
      <div className="flex items-center gap-4">
        <h1 className="text-4xl text-sky-500 font-bold">Sami M.</h1>
      </div>
      <div>
        <h1 className="text-2xl text-zinc-300">Developer Portfolio</h1>
      </div>
      <div>
        <ul className="flex items-center gap-8">
          <li className="text-lg text-zinc-300 font-semibold hover:text-sky-500 transition-all cursor-default">
            Home
          </li>
          <li className="text-lg text-zinc-300 font-semibold hover:text-sky-500 transition-all cursor-default">
            About
          </li>
          <li className="text-lg text-zinc-300 font-semibold hover:text-sky-500 transition-all cursor-default">
            Services
          </li>
          <li className="text-lg text-zinc-300 font-semibold hover:text-sky-500 transition-all cursor-default">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
