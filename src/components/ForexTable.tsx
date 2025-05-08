
import React from "react";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow 
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

interface ForexTableProps {
  onGetPlan: (planSize: string, planFee: string) => void;
}

const ForexTable: React.FC<ForexTableProps> = ({ onGetPlan }) => {
  const isMobile = useIsMobile();
  
  // Account sizes and fees
  const accountSizes = ["$5,000", "$10,000", "$25,000", "$50,000", "$100,000"];
  const fees = ["$35", "$75", "$190", "$375", "$750"];

  // For mobile view, we'll show all plans but in card format
  const visibleSizes = isMobile ? accountSizes : accountSizes;
  const visibleFees = isMobile ? fees : fees;

  // Rules for both desktop and mobile views
  const rules = [
    { area: "Profit Target", assessment: "10%", funded: "-", note: "Funded account has no profit limit" },
    { area: "Daily Loss Limit", assessment: "5%", funded: "5%", note: "Equity-based, based on prior day balance (Hard Breach)" },
    { area: "Max Drawdown", assessment: "6%", funded: "6%", note: "Equity-based, does not trail (Hard Breach)" },
    { area: "Inactivity Period", assessment: "30 Days", funded: "30 Days", note: "Must place trade (Hard Breach)" },
    { area: "Leverage", assessment: "1:50", funded: "1:50", note: "" },
    { area: "Max Time", assessment: "-", funded: "-", note: "No Max Time requirements" },
  ];

  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-6">
        {accountSizes.map((size, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border-purple-500/20 shadow-md hover:border-purple-500/40 transition-all"
          >
            <div className="bg-[#4a307a] py-4 px-6 text-center border-b border-purple-500/20">
              <h3 className="text-xl font-bold text-white">{size}</h3>
              <p className="text-white/80 mt-1 text-sm">Fee: {fees[index]}</p>
            </div>

            <div className="p-4 space-y-3">
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
            
            <div className="bg-[#38225b]/50 p-4 flex justify-center border-t border-purple-500/20">
              <Button 
                onClick={() => onGetPlan(size, fees[index])}
                className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white w-full py-2"
              >
                Get Plan
              </Button>
            </div>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Account Size and Fee Table */}
      <Card className="overflow-hidden border-purple-500/20 shadow-md">
        <div className="overflow-x-auto hide-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="text-white font-bold text-xs sm:text-sm md:text-base">Account Size</TableHead>
                {visibleSizes.map((size, index) => (
                  <TableHead key={index} className="text-white font-bold text-center text-xs sm:text-sm md:text-base">
                    {size}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-xs sm:text-sm md:text-base">FEE</TableCell>
                {visibleFees.map((fee, index) => (
                  <TableCell key={index} className="text-center text-xs sm:text-sm md:text-base">
                    {fee}
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
                      className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white text-xs md:text-sm py-1 px-2 md:px-4 min-h-0"
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

      {/* Rules Table */}
      <Card className="overflow-hidden border-purple-500/20 shadow-md">
        <div className="overflow-x-auto hide-scrollbar">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="text-white font-bold text-xs sm:text-sm md:text-base">Rule Area</TableHead>
                <TableHead className="text-white font-bold text-center text-xs sm:text-sm md:text-base">Assessment</TableHead>
                <TableHead className="text-white font-bold text-center text-xs sm:text-sm md:text-base">Funded</TableHead>
                {!isMobile && <TableHead className="text-white font-bold text-center text-xs sm:text-sm md:text-base">Notes</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rules.map((rule, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium text-xs sm:text-sm md:text-base">{rule.area}</TableCell>
                  <TableCell className="text-center text-xs sm:text-sm md:text-base">{rule.assessment}</TableCell>
                  <TableCell className="text-center text-xs sm:text-sm md:text-base">{rule.funded}</TableCell>
                  {!isMobile && <TableCell className="text-xs sm:text-sm md:text-base">{rule.note}</TableCell>}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ForexTable;
