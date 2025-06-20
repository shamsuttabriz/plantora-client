// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";

import { useLoaderData } from "react-router";
import PlantCard from "../components/PlantCard";
import Swal from "sweetalert2";
import { use, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

export default function MyPlants() {
  const { user } = use(AuthContext);
  const email = user ? user.email : "mdshamsuttabriz.dev@gmail.com";
  const data = useLoaderData();
  const myPlants = data.filter((mail) => mail.userEmail === email);
  const [plants, setPlants] = useState(myPlants);

  const handleDeletePlant = (id) => {
    // Sweet Alert
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting
        fetch(`http://localhost:3000/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data) {
              Swal.fire({
                title: "Deleted!",
                text: "Your plant has been deleted.",
                icon: "success",
              });
            }
            // remove the plant from the state
            const remainingPlants = plants.filter((plant) => plant._id !== id);
            setPlants(remainingPlants);
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-2">My Plants</h2>
      <p className="text-gray-600 mb-6">
        Here you can manage all the plants you’ve added to Plantora. Keep track
        of their health, update care details, or remove any plants that are no
        longer in your collection. This personalized list helps you stay
        connected with your green companions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {plants.map((plant) => (
          <PlantCard
            key={plant._id}
            plant={plant}
            onDelete={handleDeletePlant}
          />
        ))}
      </div>
      {plants.length === 0 && (
        <p className="text-center text-gray-500 mt-10 text-5xl">
          You haven't added any plants yet.
        </p>
      )}
    </div>
  );
}
