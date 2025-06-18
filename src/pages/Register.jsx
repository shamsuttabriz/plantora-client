import { Link } from "react-router";

export default function Register() {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Registration Info:", { name, email, password });
    // Implement registration logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Register for Plantora
        </h2>
        <form onSubmit={handleRegister}>
          <input
            type="text"
            placeholder="Full Name"
            className="w-full input input-bordered mb-4"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full input input-bordered mb-4"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full input input-bordered mb-4"
            required
          />
          <button type="submit" className="btn btn-success w-full">
            Register
          </button>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-green-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
