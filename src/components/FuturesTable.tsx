import React, { useState } from "react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FuturesTableProps {
  onGetPlan: (planSize: string, planFee: string) => void;
}

const FuturesTable: React.FC<FuturesTableProps> = ({ onGetPlan }) => {
  const isMobile = useIsMobile();
  const [expandedPayouts, setExpandedPayouts] = useState<
    Record<number, boolean>
  >({});

  // Account sizes and details
  const accountSizes = ["$25,000", "$50,000", "$100,000", "$150,000"];
  const fees = ["$280", "$550", "$1000", "$1,595"];
  const positions = [
    "1 contracts/15 micro",
    "3 contracts/30 micro",
    "6 contracts/60 micro",
    "9 contracts/90 micro",
  ];

  // Payout phases data from the image
  const payoutPhases = [
    {
      phase: "Phase 1 Payout",
      amounts: ["$500", "$1,000", "$2,000", "$3,000"],
    },
    {
      phase: "Phase 2 Payout",
      amounts: ["$750", "$1,500", "$3,000", "$4,500"],
    },
    {
      phase: "Phase 3 Payout",
      amounts: ["$750", "$1,500", "$3,000", "$4,500"],
    },
    {
      phase: "Phase 4 Payout",
      amounts: ["$1,500", "$3,000", "$6,000", "$9,000"],
    },
    {
      phase: "* Phase 5 Payout",
      amounts: [
        " New Live Funded Futures Account.  \nAccount Size $3,000 \nMax Loss (Static) $1,500 \nProfit Split 90%",
        "New Live Funded Futures Account.  \nAccount Size $6,000 \nMax Loss (Static) $3,000 \nProfit Split 90%",
        "New Live Funded  Futures Account. \nAccount Size $12,000 \nMax Loss (Static) $6,000 \nProfit Split 90%",
        "New Live Funded  Futures Account.  \nAccount Size $18,000 \nMax Loss (Static) $9000 \nProfit Split 90%",
      ],
      highlighted: true,
    },
  ];

  // Trading rules
  const tradingRules = [
    {
      area: "Profit Target",
      assessment: "9%",
      funded: "-",
      notes: "Funded account has no profit limit",
      highlighted: false,
    },

    {
      area: "Max Drawdown",
      assessment: "5%",
      funded: "6%",
      notes: "Trails on EOD (End of Day) Balance(Hard Breach)",
      highlighted: false,
    },
    {
      area: "Inactivity Period",
      assessment: "Phase 1-4 14 days | * Live Funded 7 days",

      funded: "Phase 1-4 14 days | Live Funded 7 days",
      notes: "Must place trade (Hard Breach)",
      highlighted: false,
    },
    {
      area: "Max Time",
      notes: "60 Days",
      assessment: "60 Days",
    },
    {
      area: "Consistency Score",
      assessment: "25%",
      funded: "25%",
      notes:
        "A single day's profit cannot make up more than 25% of the total profit (Soft Breach)",
      highlighted: false,
    },
  ];

  // Toggle payout details
  const togglePayouts = (index: number) => {
    setExpandedPayouts((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full space-y-6">
      <Carousel className="w-full">
        <CarouselContent>
          {accountSizes.map((size, index) => (
            <CarouselItem
              key={index}
              className={isMobile ? "basis-full" : "md:basis-1/3"}
            >
              <div className="p-1">
                <Card className="w-350 overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl hover:border-purple-500/50 transition-all  h-full flex flex-col">
                  <div className="bg-[#4a307a] py-4 px-6 text-center border-b border-purple-500/20">
                    <h3 className="text-xl font-bold text-white">{size}</h3>
                    <p className="text-white/80 mt-1">Fee: {fees[index]}</p>
                    <p className="text-white/70 text-sm mt-1">
                      Max Positions: {positions[index]}
                    </p>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    {tradingRules.map((rule, ruleIndex) => (
                      <div
                        key={ruleIndex}
                        className={`pb-3 border-b border-purple-500/10 ${rule.highlighted ? "bg-purple-900/30 -mx-4 px-4 py-2 rounded" : ""}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span
                            className={`${rule.highlighted ? "text-red-300" : "text-white/90"} font-medium text-sm`}
                          >
                            {rule.area}
                          </span>
                          <span className="text-white text-sm whitespace-pre-wrap">
                            {rule.assessment}
                          </span>
                        </div>
                        <p className="text-white/70 text-xs">{rule.notes}</p>
                      </div>
                    ))}

                    {/* Payout Phases Dropdown */}
                    <div className="pb-3 border-b border-purple-500/10 last:border-b-0">
                      <button
                        onClick={() => togglePayouts(index)}
                        className="w-full flex justify-between items-center mb-1 text-left"
                      >
                        <span className="text-white/90 font-medium text-sm">
                          Payout Phases
                        </span>
                        {expandedPayouts[index] ? (
                          <ChevronUp className="h-4 w-4 text-white/80" />
                        ) : (
                          <ChevronDown className="h-4 w-4 text-white/80" />
                        )}
                      </button>

                      {expandedPayouts[index] && (
                        <div className="mt-2 space-y-2 bg-purple-900/20 p-2 rounded">
                          {payoutPhases.map((phase, phaseIndex) => (
                            <div
                              key={phaseIndex}
                              className="flex justify-between items-center text-xs"
                            >
                              <span className="text-white/80">
                                {phase.phase}
                              </span>
                              <span className="text-white font-medium whitespace-pre-wrap">
                                {phase.amounts[index]}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-[#38225b]/50 p-4 flex justify-center border-t border-purple-500/20 mt-auto">
                    <a
                      href="https://theestablishedtraderdashboard.propaccount.com/challenges"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full"
                    >
                      <Button className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white w-full py-2">
                        Get Plan
                      </Button>
                    </a>
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

export default FuturesTable;
