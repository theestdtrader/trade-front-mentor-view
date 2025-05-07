
import React, { useState } from "react";
import ForexTable from "@/components/ForexTable";
import FuturesTable from "@/components/FuturesTable";
import PlanSignupModal from "@/components/PlanSignupModal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";

const ProgramsSection = () => {
  const [activeTab, setActiveTab] = useState<"forex" | "futures">("forex");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({
    size: "",
    fee: ""
  });
  const isMobile = useIsMobile();

  const handleGetPlan = (planSize: string, planFee: string) => {
    setSelectedPlan({
      size: planSize,
      fee: planFee
    });
    setModalOpen(true);
  };

  return (
    <section id="programs" className="container mx-auto my-8 md:my-16 px-4 relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-12 text-[#892BFC] text-center">
        Programs
      </h2>

      <div className="flex justify-center mb-6 md:mb-8">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "forex" | "futures")} className="w-full">
          <div className="flex justify-center">
            <TabsList className="w-full max-w-xs md:max-w-md">
              <TabsTrigger value="forex" className="flex-1 text-sm md:text-base">Forex</TabsTrigger>
              <TabsTrigger value="futures" className="flex-1 text-sm md:text-base">Futures</TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div className="w-full mx-auto rounded-xl overflow-hidden">
        {activeTab === "forex" ? (
          <ForexTable onGetPlan={handleGetPlan} />
        ) : (
          <FuturesTable onGetPlan={handleGetPlan} />
        )}
      </div>

      <PlanSignupModal 
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        planType={activeTab}
        planSize={selectedPlan.size}
        planFee={selectedPlan.fee}
      />
    </section>
  );
};

export default ProgramsSection;
