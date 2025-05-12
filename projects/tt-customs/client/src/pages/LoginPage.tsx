import { useState } from "react";

const LoginPage = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    alert("Login submitted (demo only)");
  };

  return (
    <main className="bg-black text-zinc-100 min-h-screen flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-md bg-zinc-900 p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Login to TT-Customs
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
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
            className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 rounded-md"
          >
            Log In
          </button>
        </form>
        <p className="text-zinc-400 text-sm mt-4 text-center">
          Don’t have an account?{" "}
          <a href="/register" className="text-rose-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </main>
  );
};

export default LoginPage;
