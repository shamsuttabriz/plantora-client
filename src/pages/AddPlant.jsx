import Swal from "sweetalert2";

export default function AddPlant() {

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    // Send data to server
    fetch("https://plantora-server.vercel.app/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlant),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          // Show SweetAlert
          Swal.fire({
            icon: "success",
            title: "Plant Added Successfully!",
            text: "Your plant has been saved to the database.",
            confirmButtonColor: "#10B981",
          });
        }
      });

  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-green-700 mb-6">
        Add a New Plant
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="image"
          // onChange={handleChange}
          placeholder="Image URL"
          className="w-full input input-bordered mb-5"
        />

        <input
          type="text"
          name="name"
          // onChange={handleChange}
          placeholder="Plant Name"
          className="w-full input input-bordered mb-5"
        />

        <select
          name="category"
          // onChange={handleChange}
          className="w-full select select-bordered mb-5"
        >
          <option value="">Select Category</option>
          <option value="succulent">Succulent</option>
          <option value="fern">Fern</option>
          <option value="flowering">Flowering</option>
        </select>

        <textarea
          name="description"
          // onChange={handleChange}
          placeholder="Description"
          className="w-full textarea textarea-bordered resize-none mb-5"
        />

        <select
          name="careLevel"
          // onChange={handleChange}
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
          // onChange={handleChange}
          placeholder="Watering Frequency"
          className="w-full input input-bordered mb-5"
        />

        <label htmlFor="lastWateredDate" className="mb-5 block">
          <span className="text-gray-600 text-sm">Last Watered Date</span>
          <input
            type="date"
            name="lastWateredDate"
            // onChange={handleChange}
            className="w-full mt-1 input input-bordered"
          />
        </label>

        <label htmlFor="nextWateringDate" className="my-5 block">
          <span className="text-gray-600 text-sm">Next Watering Date</span>
          <input
            type="date"
            name="nextWateringDate"
            // onChange={handleChange}
            className="w-full mt-1 input input-bordered"
          />
        </label>

        <input
          type="text"
          name="healthStatus"
          // onChange={handleChange}
          placeholder="Health Status"
          className="w-full input input-bordered mb-5"
        />

        <input
          type="email"
          name="userEmail"
          // onChange={handleChange}
          placeholder="User Email"
          className="w-full input input-bordered mb-5"
        />

        <input
          type="text"
          name="userName"
          // onChange={handleChange}
          placeholder="User Name"
          className="w-full input input-bordered mb-5"
        />

        <button type="submit" className="btn btn-success w-full">
          Add Plant
        </button>
      </form>
    </div>
  );
}
