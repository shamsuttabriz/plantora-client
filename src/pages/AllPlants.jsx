import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router";

export default function AllPlants() {
  const [plants, setPlants] = useState([]);
  const initialPlants = useLoaderData();

  useEffect(() => {
    setPlants(initialPlants);
  }, [initialPlants]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-2">All Plants</h2>
      <p className="text-gray-600 mb-6">
        Explore the list of all your beautiful plants with essential care
        details and access to more information.
      </p>

      {/* For larger screens - table view */}
      <div className="overflow-x-auto hidden md:block">
        <table className="table w-full table-zebra">
          <thead className="bg-green-100 text-green-800">
            <tr>
              <th>#</th>
              <th>Plant Name</th>
              <th>Category</th>
              <th>Watering Frequency</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {plants.map((plant, index) => (
              <tr key={plant._id}>
                <td>{index + 1}</td>
                <td>{plant.name}</td>
                <td>{plant.category}</td>
                <td>{plant.wateringFrequency}</td>
                <td>
                  <Link to={`/plant-details/${plant._id}`}>
                    <button className="btn btn-sm btn-outline btn-success">
                      View Details
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* For smaller screens - card view */}
      <div className="md:hidden space-y-4">
        {plants.map((plant, index) => (
          <div
            key={plant._id}
            className="border rounded-xl p-4 shadow bg-white space-y-2"
          >
            <p className="text-sm text-gray-500">#{index + 1}</p>
            <h3 className="text-lg font-semibold text-green-700">
              {plant.name}
            </h3>
            <p>
              <span className="font-medium">Category:</span> {plant.category}
            </p>
            <p>
              <span className="font-medium">Watering:</span>{" "}
              {plant.wateringFrequency}
            </p>
            <Link to={`/plant-details/${plant._id}`}>
              <button className="mt-2 btn btn-sm btn-outline btn-success">
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
