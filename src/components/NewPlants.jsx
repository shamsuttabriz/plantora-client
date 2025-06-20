import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

function NewPlants() {
  const allPlants = useLoaderData();
  const newPlants = allPlants.slice(0, 6);

  return (
    <div className="px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-2 text-green-600">
            New Arrivals in Plantora
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover our latest additions to the green family — handpicked and
            perfect for your indoor jungle.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {newPlants.map((plant, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-green-100 border-2 cursor-pointer border-green-200 overflow-hidden transition-all"
            >
              <img
                src={plant.image}
                alt={plant.name}
                className="w-full h-48 object-contain"
              />
              <div className="p-4 space-y-2 text-left">
                <h3 className="text-xl text-green-600 font-semibold">{plant.name}</h3>
                <p className="text-gray-600 text-sm">{plant.description.slice(0, 60)}...</p>
                <span className="text-xs text-gray-400">{plant.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right mt-6">
          <Link to="/all-plants" className="btn btn-outline btn-success hover:text-white text-2xl font-medium px-5 py-6">
            <p>
              <FaChevronRight />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewPlants;
