import React from "react";
import Hero from "../pages/Hero";
import FAQ from "../pages/Faq";
import ChatBot from "../components/Chatbot"; // Import the ChatBot component
import About from "../pages/About";
import Services from "../pages/Services";
import StatsSection from "./Statussection";
import TopStates from "./Locations";
import VisionMission from "./Vissionmission";
import ConsultationForm from "./CounsellingForm";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <ConsultationForm />
      <VisionMission />
      <Services />
      <StatsSection />
      <TopStates />
      <FAQ />
      {/* <Team /> */}
      <ChatBot /> {/* Chatbot Component */}
    </div>
  );
};

export default Home;
