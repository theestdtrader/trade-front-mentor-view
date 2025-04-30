
import React from "react";
import TabComponent from "@/components/Tabs";

const ProgramsSection = () => {
  return (
    <section id="programs" className="container mx-auto my-16 px-4 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
        Programs
      </h2>

      <div className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg shadow-[#892BFC]/10">
        <TabComponent />
      </div>
    </section>
  );
};

export default ProgramsSection;
