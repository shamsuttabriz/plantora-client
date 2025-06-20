import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 p-4">
      <div className="bg-white rounded-3xl shadow-lg max-w-md w-full text-center p-8 relative">
        {/* Profile Image */}
        <img
          src={user?.photoURL || "https://i.ibb.co/ZYW3VTp/brown-brim.png"}
          alt="User Profile"
          className="w-32 h-32 object-cover rounded-full border-4 border-green-500 mx-auto -mt-24 shadow-md"
        />

        {/* Name */}
        <h2 className="text-2xl font-bold text-green-700 mt-4">
          {user?.displayName || "Anonymous User"}
        </h2>

        {/* Email */}
        <p className="text-gray-500">{user?.email || "No Email Provided"}</p>

        {/* Small Description */}
        <p className="mt-4 text-sm text-gray-600">
          Plant lover, UI explorer and green soul 🌱 <br />
          Exploring the world of nature with Plantora 🍀
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-6 space-x-4 text-green-600 text-xl">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebook className="hover:text-blue-600 transition" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <FaTwitter className="hover:text-blue-400 transition" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer">
            <FaGithub className="hover:text-gray-700 transition" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
