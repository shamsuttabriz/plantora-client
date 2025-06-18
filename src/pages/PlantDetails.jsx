import React from "react";
import { useLoaderData, useParams } from "react-router";

const PlantDetails = () => {
  const { _id } = useParams();
  const plant = useLoaderData(); // Load the specific plant using loader
  console.log(plant);
  const {
    image,
    plantName,
    category,
    description,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userEmail,
    userName,
  } = plant || {};

  return (
    <div className="py-10 px-5 lg:px-0 lg:py-20">
      <div className="max-w-5xl lg:mx-auto bg-white border-3 rounded-2xl border-green-200 shadow-green-200 shadow-lg">
        <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-8">
          {/* Image Section */}
          <div>
            <img
              src={image}
              alt={plantName}
              className="rounded-xl w-full object-contain h-[400px]"
            />
          </div>

          {/* Info Section */}
          <div className="p-5">
            <h2 className="text-3xl font-bold mb-2">{plantName}</h2>
            <p className="text-green-600 font-semibold mb-4 capitalize">
              {category}
            </p>
            <p className="text-gray-700 mb-4">{description}</p>

            <div className="space-y-2">
              <p>
                <span className="font-semibold">Care Level:</span> {careLevel}
              </p>
              <p>
                <span className="font-semibold">Watering Frequency:</span>{" "}
                {wateringFrequency}
              </p>
              <p>
                <span className="font-semibold">Last Watered Date:</span>{" "}
                {lastWateredDate}
              </p>
              <p>
                <span className="font-semibold">Next Watering Date:</span>{" "}
                {nextWateringDate}
              </p>
              <p>
                <span className="font-semibold">Health Status:</span>{" "}
                {healthStatus}
              </p>
            </div>

            <hr className="my-4 text-green-300" />

            <div>
              <p>
                <span className="font-semibold">Added By:</span> {userName}
              </p>
              <p>
                <span className="font-semibold">Email:</span> {userEmail}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
