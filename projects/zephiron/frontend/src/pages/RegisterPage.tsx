import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      await axios.post("http://localhost:3000/api/users/register", {
        name,
        email,
        password,
      });

      //   const res = await axios.post("http://localhost:3000/api/users/register", {
      //     name,
      //     email,
      //     password,
      //   });

      //   const { token } = res.data;
      //   localStorage.setItem("zephiron_token", token);

      //   navigate("/dashboard");
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          Register at Zephiron
        </h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <div className="mb-4">
          <label className="block text-sm mb-1">Name</label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            className="w-full p-2 rounded bg-gray-700 text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-2 px-4 rounded font-semibold"
        >
          Register
        </button>
        <p className="text-sm text-center mt-4">
          Back to{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-500 cursor-pointer underline"
          >
            login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
