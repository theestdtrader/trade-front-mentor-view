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

interface EquitiesTableProps {
  onGetPlan: (planSize: string, planFee: string) => void;
}

const EquitiesTable: React.FC<EquitiesTableProps> = ({ onGetPlan }) => {
  const isMobile = useIsMobile();

  const accountSizes = ["$5,000", "$10,000", "$25,000", "$50,000", "$100,000"];
  const fees = ["$50", "$80", "$160", "$300", "$600"];

  const rows: { label: string; values: (string | null)[] }[] = [
    {
      label: "Profit Target (10%)",
      values: ["$500", "$1,000", "$2,500", "$5,000", "$10,000"],
    },
    {
      label: "Daily Drawdown : 2.5% (Trailing, Intraday)",
      values: ["$125", "$250", "$625", "$1,250", "$2,500"],
    },
    {
      label: "Daily Profit Cap : 2.5% (Eval Only, Soft breach)",
      values: ["$125", "$250", "$625", "$1,250", "$2,500"],
    },
    {
      label: "Max Drawdown : 3.0% (Trailing, Hard breach)",
      values: ["$150", "$300", "$750", "$1,500", "$3,000"],
    },
    { label: "Consistency Score", values: ["25% (Funded only)", null, null, null, null] },
    {
      label: "Min Profitable Trading Days",
      values: ["3 days @ 0.50% — Eval and Funded phases", null, null, null, null],
    },
    { label: "Profit Split", values: ["80%", null, null, null, null] },
    {
      label: "Payout Frequency",
      values: ["14 days initial / 14 days subsequent", null, null, null, null],
    },
    {
      label: "Payout on Breach",
      values: ["No, unless Add-on purchased (25%)", null, null, null, null],
    },
    { label: "Leverage", values: ["Up to 2:1", null, null, null, null] },
    { label: "Min Withdrawal Amount", values: ["$100", null, null, null, null] },
    {
      label: "Lock Upon Payout",
      values: ["Yes, unless Add-on purchased (25%)", null, null, null, null],
    },
    {
      label: "Overnight Holding",
      values: ["No — All positions closed by 15:55 EST", null, null, null, null],
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
                    <p className="text-white/80 mt-1">Fee: {fees[index]}</p>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    {rows.map((row, ri) => {
                      const value = row.values[index];
                      return (
                        <div
                          key={ri}
                          className="pb-3 border-b border-purple-500/10 last:border-b-0"
                        >
                          <div className="flex justify-between items-start gap-3 mb-1">
                            <span className="text-white/90 font-medium text-sm">
                              {row.label}
                            </span>
                            <span className="text-white text-sm whitespace-pre-wrap text-right">
                              {value}
                            </span>
                          </div>
                        </div>
                      );
                    })}
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

export default EquitiesTable;
