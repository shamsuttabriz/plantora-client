import React from "react";
import Slider from "../components/Slider";
import NewPlants from "../components/NewPlants";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs";
import OurMission from "../components/OurMission";

function Home() {
  return (
    <div>
      <Slider />
      <NewPlants />
      <WhyChooseUs />
      <OurMission />
    </div>
  );
}

export default Home;
