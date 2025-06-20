import { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

export default function Login() {
  const [error, setError] = useState("");
  const { signInUser, googleSignIn, setUser, updatePassword } =
    use(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const emailRef = useRef();

  // Login with Email and Password
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // Implement login logic here
    signInUser(email, password)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Login Email Password",
          text: "Your account has been successfully logedin!",
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((err) => {
        setError(err.message);
        Swal.fire({
          toast: true,
          position: "center",
          icon: "error",
          title: "Login Failed!",
          text: `${err.message}`,
          showConfirmButton: false,
          timer: 3000,
        });
      });
  };

  // Login with Goggle
  const handleLogInWithGoogle = () => {
    googleSignIn().then((res) => {
      setUser(res.user);
      Swal.fire({
        icon: "success",
        title: "Login Google",
        text: "Your account has been successfully logedin!",
      });
      navigate(location?.state || "/");
    });
  };

  // Update your password
  const handlePasswordReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
  
    if (!email) {
      Swal.fire({
        icon: "warning",
        title: "Email Required",
        text: "Please enter your email to reset password.",
      });
      return;
    }
  
    updatePassword(email)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Email Sent",
          text: "Check your inbox to reset your password.",
        });
      })
      .catch((err) => {
        console.error("Error sending reset email:", err.message);
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: err.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-100">
      <div className="bg-white shadow-lg p-8 rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">
          Login to Plantora
        </h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            name="email"
            ref={emailRef}
            placeholder="Email"
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

          {error && <p className="text-red-500 text-xs mt-1 mb-2">{error}</p>}
          <button
            type="button"
            onClick={(e) => handlePasswordReset(e)}
            className="text-xs mb-4 font-medium text-gray-500 hover:underline cursor-pointer
         "
          >
            Forgot password
          </button>

          <button type="submit" className="btn btn-success w-full">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/auth/register" className="text-green-600 font-medium">
            Register
          </Link>
        </p>
        <div className="flex flex-col mt-5 gap-5">
          {/* Google */}
          <button
            type="submit"
            onClick={handleLogInWithGoogle}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <svg
              aria-label="Google logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <g>
                <path d="m0 0H512V512H0" fill="#fff"></path>
                <path
                  fill="#34a853"
                  d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                ></path>
                <path
                  fill="#4285f4"
                  d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                ></path>
                <path
                  fill="#fbbc02"
                  d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                ></path>
                <path
                  fill="#ea4335"
                  d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                ></path>
              </g>
            </svg>
            Login with Google
          </button>
          {/* GitHub */}
          <button className="btn bg-black text-white border-black">
            <svg
              aria-label="GitHub logo"
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fill="white"
                d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
              ></path>
            </svg>
            Login with GitHub
          </button>
        </div>
      </div>
    </div>
  );
}
