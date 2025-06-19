import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 text-center px-4">
      <h1 className="text-6xl font-bold text-green-700 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-6">Page Not Found</p>
      <Link
        to="/"
        className="px-6 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
