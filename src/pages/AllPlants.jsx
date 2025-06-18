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

      <div className="overflow-x-auto">
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
    </div>
  );
}
