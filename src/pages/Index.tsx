
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
    <div className="bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#2C2A31] flex flex-col">
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
