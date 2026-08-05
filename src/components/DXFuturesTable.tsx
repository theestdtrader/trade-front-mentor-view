import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface DXFuturesTableProps {
  onGetPlan: (planSize: string, planFee: string) => void;
}

const DXFuturesTable: React.FC<DXFuturesTableProps> = ({ onGetPlan }) => {
  const isMobile = useIsMobile();
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const accountSizes = ["$25,000", "$50,000", "$75,000", "$100,000", "$150,000"];
  const fees = ["$150", "$170", "$245", "$330", "$360"];

  const rows: { label: string; values: string[] }[] = [
    {
      label: "Purchase Type",
      values: [
        "Monthly Subscription",
        "Monthly Subscription",
        "Monthly Subscription",
        "Monthly Subscription",
        "Monthly Subscription",
      ],
    },
    {
      label: "Growth Target (Phase 1)",
      values: [
        "$1,500 (6%)",
        "$3,000 (6%)",
        "$4,500 (6%)",
        "$6,000 (6%)",
        "$9,000 (6%)",
      ],
    },
    { label: "Daily Drawdown", values: ["None", "None", "None", "None", "None"] },
    {
      label: "Max Drawdown",
      values: [
        "$1,500 (6%)",
        "$2,000 (4%)",
        "$2,498 (3.33%)",
        "$3,000 (3%)",
        "$4,500 (3%)",
      ],
    },
    {
      label: "Consistency (Eval)",
      values: ["33.33%", "33.33%", "33.33%", "33.33%", "33.33%"],
    },
    {
      label: "Consistency (Funded)",
      values: ["33.33%", "33.33%", "33.33%", "33.33%", "33.33%"],
    },
    { label: "Minimum Trading Days", values: ["None", "None", "None", "None", "None"] },
    { label: "Max Payout per Period", values: ["None", "None", "None", "None", "None"] },
    {
      label: "Non-Withdrawable Buffer",
      values: ["6%", "4%", "3.33%", "3%", "3%"],
    },
    { label: "Lock Upon Payout", values: ["No", "No", "No", "No", "No"] },
    { label: "Max Time (Days)", values: ["30", "30", "30", "30", "30"] },
    { label: "Inactivity Time (Days)", values: ["30", "30", "30", "30", "30"] },
    { label: "Profit Split", values: ["80%", "80%", "80%", "80%", "80%"] },
    { label: "Initial Withdrawal Delay", values: ["0", "0", "0", "0", "0"] },
    { label: "Subsequent Withdrawal Delay", values: ["0", "0", "0", "0", "0"] },
    {
      label: "Contract Limits (standard/micro)",
      values: ["1 / 10", "3 / 30", "6 / 60", "9 / 90", "12 / 120"],
    },
  ];

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
                <Card className="overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl hover:border-purple-500/50 transition-all h-full flex flex-col">
                  <div className="bg-[#4a307a] py-4 px-6 text-center border-b border-purple-500/20">
                    <h3 className="text-xl font-bold text-white">{size}</h3>
                    <p className="text-white/80 mt-1">
                      Minimum Monthly Pricing: {fees[index]}
                    </p>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    {rows.slice(0, 4).map((row, ri) => (
                      <div
                        key={ri}
                        className="pb-3 border-b border-purple-500/10 flex justify-between items-start gap-3"
                      >
                        <span className="text-white/90 font-medium text-sm">
                          {row.label}
                        </span>
                        <span className="text-white text-sm text-right">
                          {row.values[index]}
                        </span>
                      </div>
                    ))}

                    {/* Trailing Max Drawdown Type dropdown */}
                    <div className="pb-3 border-b border-purple-500/10">
                      <button
                        type="button"
                        onClick={() =>
                          setOpenDropdown(openDropdown === index ? null : index)
                        }
                        className="w-full flex justify-between items-center gap-3 text-left bg-[#38225b]/60 rounded-md px-3 py-2 hover:bg-[#38225b] transition-colors"
                      >
                        <span className="text-white/90 font-medium text-sm">
                          Trailing Max Drawdown Type
                        </span>
                        <ChevronDown
                          size={16}
                          className={`text-white shrink-0 transition-transform ${
                            openDropdown === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === index && (
                        <div className="mt-2 px-3 py-2 rounded-md bg-[#892BFC]/20 border border-purple-500/30">
                          <span className="text-white text-sm">
                            Intraday Equity HWM
                          </span>
                        </div>
                      )}
                    </div>

                    {openDropdown === index &&
                      rows.slice(4).map((row, ri) => (
                        <div
                          key={ri}
                          className="pb-3 border-b border-purple-500/10 last:border-b-0 flex justify-between items-start gap-3"
                        >
                          <span className="text-white/90 font-medium text-sm">
                            {row.label}
                          </span>
                          <span className="text-white text-sm text-right">
                            {row.values[index]}
                          </span>
                        </div>
                      ))}
                  </div>

                  <div className="bg-[#38225b]/50 p-4 flex justify-center border-t border-purple-500/20 mt-auto">
                    <button
                      onClick={() => onGetPlan(size, fees[index])}
                      className="w-full"
                    >
                      <Button className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white w-full py-2">
                        Get Plan
                      </Button>
                    </button>
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

export default DXFuturesTable;
