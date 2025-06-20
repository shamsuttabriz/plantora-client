import { Navigate, useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";

export default function UpdatedPlant() {
  const updatePlant = useLoaderData();
  const navigate = useNavigate();

  const {
    _id,
    name,
    category,
    description,
    image,
    careLevel,
    wateringFrequency,
    lastWateredDate,
    nextWateringDate,
    healthStatus,
    userEmail,
    userName,
  } = updatePlant;

  const handleUpdatedPlant = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const updatedPlant = Object.fromEntries(formData.entries());

    // send updted plant to the db
    fetch(`https://plantora-server.vercel.app/plants/${_id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your plant has been updated",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/my-plants");
        }
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Update Your Plant
      </h2>
      <form onSubmit={handleUpdatedPlant}>
        <input
          type="text"
          name="image"
          defaultValue={image}
          placeholder="Image URL"
          className="w-full input input-bordered mb-5"
        />

        <input
          type="text"
          name="name"
          defaultValue={name}
          placeholder="Plant Name"
          className="w-full input input-bordered mb-5"
        />

        <select
          name="category"
          defaultValue={category}
          className="w-full select select-bordered mb-5"
        >
          <option value="">Select Category</option>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>

        <textarea
          name="description"
          defaultValue={description}
          placeholder="Description"
          className="w-full textarea textarea-bordered resize-none mb-5"
        />

        <select
          name="careLevel"
          defaultValue={careLevel}
          className="w-full select select-bordered mb-5"
        >
          <option value="">Select Care Level</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select>

        <input
          type="text"
          name="wateringFrequency"
          defaultValue={wateringFrequency}
          placeholder="Watering Frequency"
          className="w-full input input-bordered mb-5"
        />

        <label htmlFor="lastWateredDate" className="mb-5 block">
          <span className="text-gray-600 text-sm">Last Watered Date</span>
          <input
            type="date"
            name="lastWateredDate"
            defaultValue={lastWateredDate}
            className="w-full mt-1 input input-bordered"
          />
        </label>

        <label htmlFor="nextWateringDate" className="my-5 block">
          <span className="text-gray-600 text-sm">Next Watering Date</span>
          <input
            type="date"
            name="nextWateringDate"
            defaultValue={nextWateringDate}
            className="w-full mt-1 input input-bordered"
          />
        </label>

        <input
          type="text"
          name="healthStatus"
          defaultValue={healthStatus}
          placeholder="Health Status"
          className="w-full input input-bordered mb-5"
        />

        <input
          type="email"
          name="userEmail"
          defaultValue={userEmail}
          placeholder="User Email"
          className="w-full input input-bordered mb-5"
        />

        <input
          type="text"
          name="userName"
          defaultValue={userName}
          placeholder="User Name"
          className="w-full input input-bordered mb-5"
        />

        <button type="submit" className="btn btn-success w-full">
          Update Plant
        </button>
      </form>
    </div>
  );
}
