
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

  // For mobile view, we'll only show a subset of the plans
  const visibleSizes = isMobile ? accountSizes.slice(0, 3) : accountSizes;
  const visibleFees = isMobile ? fees.slice(0, 3) : fees;

  return (
    <div className="space-y-6">
      {/* Account Size and Fee Table */}
      <Card className="overflow-hidden border-purple-500/20">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="text-white font-bold text-sm md:text-base">Account Size</TableHead>
                {visibleSizes.map((size, index) => (
                  <TableHead key={index} className="text-white font-bold text-center text-sm md:text-base">{size}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">FEE</TableCell>
                {visibleFees.map((fee, index) => (
                  <TableCell key={index} className="text-center text-sm md:text-base">{fee}</TableCell>
                ))}
              </TableRow>
              {/* Get Plan Button Row */}
              <TableRow>
                <TableCell className="font-medium"></TableCell>
                {visibleSizes.map((size, index) => (
                  <TableCell key={index} className="text-center">
                    <Button 
                      onClick={() => onGetPlan(size, visibleFees[index])}
                      className="bg-[#892BFC] hover:bg-[#892BFC]/90 text-white text-xs md:text-sm py-1 px-2 md:px-4"
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
      <Card className="overflow-hidden border-purple-500/20">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="text-white font-bold text-sm md:text-base">Rule Area</TableHead>
                <TableHead className="text-white font-bold text-center text-sm md:text-base">Assessment</TableHead>
                <TableHead className="text-white font-bold text-center text-sm md:text-base">Funded</TableHead>
                {!isMobile && <TableHead className="text-white font-bold text-center text-sm md:text-base">Notes</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">Profit Target</TableCell>
                <TableCell className="text-center text-sm md:text-base">10%</TableCell>
                <TableCell className="text-center text-sm md:text-base">-</TableCell>
                {!isMobile && <TableCell className="text-sm md:text-base">Funded account has no profit limit</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">Daily Loss Limit</TableCell>
                <TableCell className="text-center text-sm md:text-base">5%</TableCell>
                <TableCell className="text-center text-sm md:text-base">5%</TableCell>
                {!isMobile && <TableCell className="text-sm md:text-base">Equity-based, based on prior day balance (Hard Breach)</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">Max Drawdown</TableCell>
                <TableCell className="text-center text-sm md:text-base">6%</TableCell>
                <TableCell className="text-center text-sm md:text-base">6%</TableCell>
                {!isMobile && <TableCell className="text-sm md:text-base">Equity-based, does not trail (Hard Breach)</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">Inactivity Period</TableCell>
                <TableCell className="text-center text-sm md:text-base">30 Days</TableCell>
                <TableCell className="text-center text-sm md:text-base">30 Days</TableCell>
                {!isMobile && <TableCell className="text-sm md:text-base">Must place trade (Hard Breach)</TableCell>}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">Leverage</TableCell>
                <TableCell className="text-center text-sm md:text-base">1:50</TableCell>
                <TableCell className="text-center text-sm md:text-base">1:50</TableCell>
                {!isMobile && <TableCell className="text-sm md:text-base"></TableCell>}
              </TableRow>
              <TableRow>
                <TableCell className="font-medium text-sm md:text-base">Max Time</TableCell>
                <TableCell className="text-center text-sm md:text-base">-</TableCell>
                <TableCell className="text-center text-sm md:text-base">-</TableCell>
                {!isMobile && <TableCell className="text-sm md:text-base">No Max Time requirements</TableCell>}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ForexTable;
