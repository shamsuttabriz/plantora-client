export default function WhyChooseUs() {
  return (
    <section className="py-30 px-5">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
          Why Choose Plantora?
        </h2>
        <p className="text-gray-600 mb-10">
          We’re not just selling plants — we’re building a greener lifestyle,
          one plant at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🌱 Fresh & Healthy Plants
            </h3>
            <p className="text-gray-600">
              All our plants are grown with love and handled with care to ensure
              they arrive at your doorstep healthy and vibrant.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              📦 Eco-Friendly Packaging
            </h3>
            <p className="text-gray-600">
              We use biodegradable packaging to reduce waste and keep both your
              plants and the planet safe.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-green-600 mb-2">
              🤝 Community & Support
            </h3>
            <p className="text-gray-600">
              Join a growing community of plant lovers and get expert care
              guides, tips, and support whenever you need it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
