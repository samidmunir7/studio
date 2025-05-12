import { useState } from "react";

const RegisterPage = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Registration submitted (demo only)");
  };

  return (
    <main className="bg-black text-zinc-100 min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Create an Account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full bg-zinc-800 text-white p-4 rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 rounded-md"
          >
            Register
          </button>
        </form>
        <p className="text-zinc-400 text-sm mt-4 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-sky-500 hover:underline">
            Log in here
          </a>
        </p>
      </div>
    </main>
  );
};

export default RegisterPage;
