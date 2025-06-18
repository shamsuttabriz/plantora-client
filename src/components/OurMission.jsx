export default function OurMission() {
  return (
    <section className="py-16 px-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <img
            src="https://i.ibb.co/sppSJFT6/pic-1.png"
            alt="Plantora Mission"
            className="w-full object-contain"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 mb-4">
            At Plantora, our mission is simple: reconnect people with nature. In
            a fast-paced digital world, we believe everyone deserves a bit of
            green in their life.
          </p>
          <p className="text-gray-700">
            We aim to provide not just plants, but living companions that
            improve your mental health, clean your air, and inspire your space —
            while supporting a sustainable future for the planet.
          </p>
        </div>
      </div>
    </section>
  );
}
