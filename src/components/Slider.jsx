import { useEffect, useState } from "react";

const slides = [
  {
    heading: "Nurture Your Green Friend",
    description:
      "Every plant you care for returns the love in silence — with life, growth, and beauty.",
    image:"https://res.cloudinary.com/dyvnqvpxq/image/upload/v1753004288/pic-2_ufxcne.png",
  },
  {
    heading: "Track. Water. Bloom.",
    description:
      "Plantora helps you manage your plant care routine — never miss a watering day again.",
    image:
      "https://res.cloudinary.com/dyvnqvpxq/image/upload/v1753004288/pic-4_rvujsb.png",
  },
  {
    heading: "A Garden in Your Pocket",
    description:
      "Monitor your entire green space — from succulents to bonsai — anytime, anywhere.",
    image:
      "https://res.cloudinary.com/dyvnqvpxq/image/upload/v1753004288/pic-4_rvujsb.png",
  },
];

export default function Slider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="relative w-full h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col md:flex-row items-center justify-between px-6 py-16 gap-6 text-left bg-opacity-80  rounded-xl ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-green-600">
                {slide.heading}
              </h2>
              <p className="text-sm md:text-base text-gray-600">{slide.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img
                src={slide.image}
                alt="Plant"
                className="w-full h-64 lg:h-96 object-contain"
              />
            </div>
          </div>
        ))}

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`w-3 h-3 rounded-full ${
                current === idx ? "bg-white" : "bg-white/50"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}
