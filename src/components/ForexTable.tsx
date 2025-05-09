
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ForexTableProps {
  onGetPlan: (planSize: string, planFee: string) => void;
}

const ForexTable: React.FC<ForexTableProps> = ({ onGetPlan }) => {
  const isMobile = useIsMobile();
  
  // Account sizes and fees
  const accountSizes = ["$5,000", "$10,000", "$25,000", "$50,000", "$100,000"];
  const fees = ["$35", "$75", "$190", "$375", "$750"];

  // Rules for both desktop and mobile views
  const rules = [
    { area: "Profit Target", assessment: "10%", funded: "-", note: "Funded account has no profit limit" },
    { area: "Daily Loss Limit", assessment: "5%", funded: "5%", note: "Equity-based, based on prior day balance (Hard Breach)" },
    { area: "Max Drawdown", assessment: "6%", funded: "6%", note: "Equity-based, does not trail (Hard Breach)" },
    { area: "Inactivity Period", assessment: "30 Days", funded: "30 Days", note: "Must place trade (Hard Breach)" },
    { area: "Leverage", assessment: "1:50", funded: "1:50", note: "" },
    { area: "Max Time", assessment: "-", funded: "-", note: "No Max Time requirements" },
  ];

  return (
    <div className="w-full space-y-6">
      <Carousel className="w-full">
        <CarouselContent>
          {accountSizes.map((size, index) => (
            <CarouselItem key={index} className={isMobile ? "basis-full" : "md:basis-1/2 lg:basis-1/3"}>
              <div className="p-1">
                <Card 
                  className="overflow-hidden border-purple-500/20 shadow-md hover:border-purple-500/40 transition-all h-full flex flex-col"
                >
                  <div className="bg-[#4a307a] py-4 px-6 text-center border-b border-purple-500/20">
                    <h3 className="text-xl font-bold text-white">{size}</h3>
                    <p className="text-white/80 mt-1 text-sm">Fee: {fees[index]}</p>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    {rules.map((rule, ruleIndex) => (
                      <div key={ruleIndex} className="pb-2 border-b border-purple-500/10 last:border-b-0">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white/90 font-medium text-sm">{rule.area}</span>
                          <span className="text-white text-sm">{rule.assessment}</span>
                        </div>
                        {rule.note && <p className="text-white/70 text-xs">{rule.note}</p>}
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-[#38225b]/50 p-4 flex justify-center border-t border-purple-500/20 mt-auto">
                    <Button 
                      onClick={() => onGetPlan(size, fees[index])}
                      className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white w-full py-2"
                    >
                      Get Plan
                    </Button>
                  </div>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-4">
          <CarouselPrevious className="relative static left-auto translate-y-0 h-8 w-8" />
          <CarouselNext className="relative static right-auto translate-y-0 h-8 w-8" />
        </div>
      </Carousel>
    </div>
  );
};

export default ForexTable;
