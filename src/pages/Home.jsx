import React from "react";
import Hero from "../pages/Hero";
// import VisionMission from "../pages/VissionMission"; // Fixed filename
// import WhyChooseUs from "../pages/WhyChooseUs";
// import OurProcess from "../pages/OurProcess";
import FAQ from "../pages/Faq";

import ChatBot from "../components/Chatbot"; // Import the ChatBot component
import About from "../pages/About";
import Team from "../components/Team";
import Services from "../pages/Services";
import StatsSection from "./Statussection";
import TopStates from "./Locations";
import VisionMission from "./Vissionmission";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <StatsSection />
      <TopStates />
      <FAQ />
      <Team />
      <ChatBot /> {/* Chatbot Component */}
    </div>
  );
};

export default Home;
