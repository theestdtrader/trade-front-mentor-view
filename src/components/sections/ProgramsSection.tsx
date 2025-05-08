
import React, { useState, useEffect } from "react";
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
  const [isVisible, setIsVisible] = useState(false);

  // Add animation triggers based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("programs");
      if (section) {
        const sectionPosition = section.getBoundingClientRect();
        const isVisible = sectionPosition.top < window.innerHeight * 0.75;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger on initial load
    setTimeout(handleScroll, 100);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGetPlan = (planSize: string, planFee: string) => {
    setSelectedPlan({
      size: planSize,
      fee: planFee
    });
    setModalOpen(true);
  };

  return (
    <section id="programs" className="container mx-auto my-6 md:my-12 px-3 md:px-4 relative z-10">
      <h2 
        className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-[#892BFC] text-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
        }}
      >
        Programs
      </h2>

      <div className="flex justify-center mb-4 md:mb-6">
        <Tabs 
          value={activeTab} 
          onValueChange={(value) => setActiveTab(value as "forex" | "futures")} 
          className="w-full transition-all duration-300"
        >
          <div className="flex justify-center">
            <TabsList className="w-full max-w-[280px] md:max-w-md">
              <TabsTrigger 
                value="forex" 
                className="flex-1 text-xs md:text-sm lg:text-base py-1.5 transition-all duration-300"
              >
                Forex
              </TabsTrigger>
              <TabsTrigger 
                value="futures"
                className="flex-1 text-xs md:text-sm lg:text-base py-1.5 transition-all duration-300"
              >
                Futures
              </TabsTrigger>
            </TabsList>
          </div>
        </Tabs>
      </div>

      <div 
        className="w-full mx-auto rounded-xl overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.7s ease-in-out, transform 0.7s ease-in-out',
          transitionDelay: '0.1s'
        }}
      >
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
