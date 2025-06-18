import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router";

const PlantCard = ({ plant, onDelete }) => {
  const {_id, image, name, category, healthStatus } = plant;

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-[1.02] hover:shadow-2xl border border-green-200">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain p-2"
      />
      <div className="p-5">
        <h2 className="text-xl font-bold text-green-700 mb-1">{name}</h2>
        <p className="text-sm text-gray-600 mb-1"><span className="font-medium">Category:</span> {category}</p>
        <p className="text-sm text-gray-600 mb-4"><span className="font-medium">Health:</span> {healthStatus}</p>

        <div className="flex justify-end gap-2">
          <Link
            to={`/updated-plant/${plant._id}`}
            className="flex items-center gap-1 cursor-pointer text-sm px-3 py-1 rounded-lg border border-green-600 text-green-700 hover:bg-green-600 hover:text-white transition"
          >
            <FaEdit /> Update
          </Link>
          <button
            onClick={() => onDelete(_id)}
            className="flex items-center gap-1 cursor-pointer text-sm px-3 py-1 rounded-lg border border-red-500 text-red-600 hover:bg-red-500 hover:text-white transition"
          >
            <FaTrashAlt /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlantCard;
