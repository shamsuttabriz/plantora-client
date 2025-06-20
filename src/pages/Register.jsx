import { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function Register() {
  const [error, setError] = useState("");
  const { createUser, updateUser, setUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    // Name issues
    if (name.length < 5) {
      Swal.fire({
        toast: true,
        position: "center",
        icon: "error",
        title: "Find Error!",
        text: "Give me at least 6 letter",
        showConfirmButton: false,
        timer: 3000,
      });
      return;
    } else {
      setError("");
    }

    // Implement registration logic here
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // Update User
        updateUser({ displayName: name, photoURL: photo }).then(() => {
          setUser({ ...user, displayName: name, photoURL: photo });
          Swal.fire({
            icon: "success",
            title: "Account Created",
            text: "Your account has been successfully created!",
          });
          navigate("/");
        });
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Registration Failed",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
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
            name="name"
            placeholder="Full Name"
            className="w-full input input-bordered mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full input input-bordered mb-4"
            required
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            className="w-full input input-bordered mb-4"
            required
          />
          <input
            type="password"
            name="password"
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
          <Link to="/auth/login" className="text-green-600 font-medium">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
