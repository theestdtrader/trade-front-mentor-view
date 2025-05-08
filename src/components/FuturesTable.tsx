import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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

interface FuturesTableProps {
  onGetPlan: (planSize: string, planFee: string) => void;
}

const FuturesTable: React.FC<FuturesTableProps> = ({ onGetPlan }) => {
  const isMobile = useIsMobile();
  
  // Account sizes and details
  const accountSizes = ["$25,000", "$50,000", "$100,000"];
  const fees = ["$265.00", "$525.00", "$1000.00"];
  const positions = [
    "1 contracts/15 micro",
    "3 contracts/30 micro",
    "6 contracts/60 micro",
  ];

  // For mobile view, we'll show all plans but in card format
  const visibleSizes = isMobile ? accountSizes : accountSizes;
  const visibleFees = isMobile ? fees : fees;
  const visiblePositions = isMobile ? positions : positions;

  // Trading rules
  const tradingRules = [
    {
      area: "Profit Target",
      assessment: "10%",
      funded: "-",
      notes: "Funded account has no profit limit",
      highlighted: false,
    },
    {
      area: "Daily Loss Limit",
      assessment: "3%",
      funded: "3%",
      notes: "Equity-based, based on prior day balance (Hard Breach)",
      highlighted: false,
    },
    {
      area: "Max Drawdown",
      assessment: "6%",
      funded: "6%",
      notes: "Equity-based, does not trail (Hard Breach)",
      highlighted: false,
    },
    {
      area: "Inactivity Period",
      assessment: "30 Days",
      funded: "30 Days",
      notes: "Must place trade (Hard Breach)",
      highlighted: false,
    },
    {
      area: "Consistency Score",
      assessment: "25%",
      funded: "25%",
      notes: "A single day's profit cannot make up more than 25% of the total profit (Soft Breach)",
      highlighted: true,
    },
  ];

  if (isMobile) {
    return (
      <Carousel className="w-full">
        <CarouselContent>
          {accountSizes.map((size, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card 
                  className="overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl hover:border-purple-500/50 transition-all h-full flex flex-col"
                >
                  <div className="bg-[#4a307a] py-4 px-6 text-center border-b border-purple-500/20">
                    <h3 className="text-xl font-bold text-white">{size}</h3>
                    <p className="text-white/80 mt-1">Fee: {fees[index]}</p>
                    <p className="text-white/70 text-sm mt-1">Max Positions: {positions[index]}</p>
                  </div>

                  <div className="p-4 space-y-3 flex-1">
                    {tradingRules.map((rule, ruleIndex) => (
                      <div 
                        key={ruleIndex} 
                        className={`pb-3 border-b border-purple-500/10 last:border-b-0 ${rule.highlighted ? "bg-purple-900/30 -mx-4 px-4 py-2 rounded" : ""}`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className={`${rule.highlighted ? "text-red-300" : "text-white/90"} font-medium text-sm`}>
                            {rule.area}
                          </span>
                          <span className="text-white text-sm">{rule.assessment}</span>
                        </div>
                        <p className="text-white/70 text-xs">{rule.notes}</p>
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
    );
  }

  return (
    <div className="space-y-8">
      {/* Account Sizes Table */}
      <Card className="overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl">
        <div className="overflow-x-auto hide-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="w-1/4 text-white/90 text-xs sm:text-sm md:text-base">Account Size:</TableHead>
                {visibleSizes.map((size, index) => (
                  <TableHead key={index} className="text-center text-white text-xs sm:text-sm md:text-base">
                    {size}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-xs sm:text-sm md:text-base">FEE:</TableCell>
                {visibleFees.map((fee, index) => (
                  <TableCell key={index} className="text-center text-xs sm:text-sm md:text-base">
                    {fee}
                  </TableCell>
                ))}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-xs sm:text-sm md:text-base">Max Positions:</TableCell>
                {visiblePositions.map((position, index) => (
                  <TableCell key={index} className="text-center text-xs sm:text-sm md:text-base">
                    {position}
                  </TableCell>
                ))}
              </TableRow>
              {/* Get Plan Button Row */}
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                {visibleSizes.map((size, index) => (
                  <TableCell key={index} className="text-center">
                    <Button 
                      onClick={() => onGetPlan(size, visibleFees[index])}
                      className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white text-xs sm:text-sm py-1 px-2 md:px-4 min-h-0"
                      size={isMobile ? "sm" : "default"}
                    >
                      Get Plan
                    </Button>
                  </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>

      {/* Trading Rules Table */}
      <Card className="overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl">
        <div className="overflow-x-auto hide-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="w-1/4 text-white/90 text-xs sm:text-sm md:text-base">Rule Area</TableHead>
                <TableHead className="text-center text-white text-xs sm:text-sm md:text-base">Assessment</TableHead>
                <TableHead className="text-center text-white text-xs sm:text-sm md:text-base">Funded</TableHead>
                {!isMobile && <TableHead className="text-center text-white text-xs sm:text-sm md:text-base">Notes</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {tradingRules.map((rule, index) => (
                <TableRow key={index} className={rule.highlighted ? "bg-purple-900/30" : ""}>
                  <TableCell className={`font-medium text-xs sm:text-sm md:text-base ${rule.highlighted ? "text-red-300" : ""}`}>
                    {rule.area}
                  </TableCell>
                  <TableCell className="text-center text-xs sm:text-sm md:text-base">{rule.assessment}</TableCell>
                  <TableCell className="text-center text-xs sm:text-sm md:text-base">{rule.funded}</TableCell>
                  {!isMobile && <TableCell className="text-center text-xs sm:text-sm md:text-base">{rule.notes}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default FuturesTable;
