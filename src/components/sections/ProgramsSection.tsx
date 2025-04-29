
import React from "react";
import TabComponent from "@/components/Tabs";

const ProgramsSection = () => {
  return (
    <section id="programs" className="container from-[#cfcfcf] to-[#d7d7d7] mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-8 text-[#ffffff] text-center">
        Programs
      </h2>

      <TabComponent />
    </section>
  );
};

export default ProgramsSection;
