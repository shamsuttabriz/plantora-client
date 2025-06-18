import { useState } from "react";
import { Link } from "react-router";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Info:", { email, password });
    // Implement login logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Login to Plantora</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            className="w-full input input-bordered mb-4"
            value={email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered mb-4"
            value={password}
            required
          />
          <button type="submit" className="btn btn-success w-full">Login</button>
        </form>
        <p className="text-center mt-4">
          Don't have an account? <Link to="/register" className="text-green-600 font-medium">Register</Link>
        </p>
      </div>
    </div>
  );
}