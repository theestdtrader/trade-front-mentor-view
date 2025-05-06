
import React, { useState } from "react";
import PricingTable from "@/components/PricingTable";
import ForexTable from "@/components/ForexTable";
import FuturesTable from "@/components/FuturesTable";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState<"forex" | "futures">("forex");

  return (
    <section id="programs" className="container mx-auto my-16 px-4 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
        Programs
      </h2>

      <div className="flex justify-center mb-8">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "forex" | "futures")} className="w-full">
          <div className="flex justify-center">
            <TabsList className="w-full max-w-md">
              <TabsTrigger value="forex" className="flex-1">Forex</TabsTrigger>
              <TabsTrigger value="futures" className="flex-1">Futures</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="w-full mx-auto rounded-xl overflow-hidden">
        {activeTab === "forex" ? (
          <ForexTable />
        ) : (
          <FuturesTable />
        )}
      </div>
    </section>
  );
};

export default ProgramsSection;
