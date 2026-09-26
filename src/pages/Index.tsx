
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import ProgramsSection from "@/components/sections/ProgramsSection";
import FAQSection from "@/components/sections/FAQSection";
import PayoutsSection from "@/components/sections/PayoutsSection";
import Footer from "@/components/sections/FooterComponent";

const Index = () => {
  return (
    <div className="bg-[#1A1F2C] text-white flex flex-col">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProgramsSection />
      <PayoutsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
