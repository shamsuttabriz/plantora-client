import React from "react";
import { FaChevronRight } from "react-icons/fa";

function NewPlants() {
  const newPlants = [
    {
      name: "Golden Pothos",
      description: "Easy-care vine that purifies air.",
      image: "https://i.ibb.co/sppSJFT6/pic-1.png",
      time: "Added 2 hours ago",
    },
    {
      name: "Snake Plant",
      description: "Perfect for beginners and low-light spots.",
      image: "https://i.ibb.co/sppSJFT6/pic-1.png",
      time: "Added 5 hours ago",
    },
    {
      name: "Peace Lily",
      description: "Elegant and air-purifying flowering plant.",
      image: "https://i.ibb.co/sppSJFT6/pic-1.png",
      time: "Added 1 day ago",
    },
    {
      name: "Aloe Vera",
      description: "Healing plant with low maintenance needs.",
      image: "https://i.ibb.co/sppSJFT6/pic-1.png",
      time: "Added 2 days ago",
    },
    {
      name: "Spider Plant",
      description: "Adaptable plant that thrives in hanging pots.",
      image: "https://i.ibb.co/sppSJFT6/pic-1.png",
      time: "Added 3 days ago",
    },
    {
      name: "ZZ Plant",
      description: "Tough plant that grows in tough places.",
      image: "https://i.ibb.co/sppSJFT6/pic-1.png",
      time: "Added 4 days ago",
    },
  ];
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
                <h3 className="text-xl font-semibold">{plant.name}</h3>
                <p className="text-gray-600 text-sm">{plant.description}</p>
                <span className="text-xs text-gray-400">{plant.time}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right mt-6">
          <button className="btn btn-outline btn-success hover:text-white text-2xl font-medium px-5 py-6">
            <p>
              <FaChevronRight />
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPlants;
