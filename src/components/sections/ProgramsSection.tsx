
import React from "react";
import PricingTable from "@/components/PricingTable";

const ProgramsSection = () => {
  return (
    <section id="programs" className="container mx-auto my-16 px-4 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
        Programs
      </h2>

      <div className="w-full mx-auto rounded-xl overflow-hidden">
        <PricingTable />
      </div>
    </section>
  );
};

export default ProgramsSection;
