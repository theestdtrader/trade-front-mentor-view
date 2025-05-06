
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

const FuturesTable = () => {
  // Account sizes and details
  const accountSizes = ["$25,000", "$50,000", "$100,000"];
  const fees = ["$265.00", "$525.00", "$1000.00"];
  const positions = [
    "1 contracts/15 micro",
    "3 contracts/30 micro",
    "6 contracts/60 micro",
  ];

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

  return (
    <div className="space-y-8">
      {/* Account Sizes Table */}
      <Card className="overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#4a307a] border-b-0">
              <TableHead className="w-1/4 text-white/90">Account Size:</TableHead>
              {accountSizes.map((size, index) => (
                <TableHead key={index} className="text-center text-white">
                  {size}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">FEE:</TableCell>
              {fees.map((fee, index) => (
                <TableCell key={index} className="text-center">
                  {fee}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Max Positions:</TableCell>
              {positions.map((position, index) => (
                <TableCell key={index} className="text-center">
                  {position}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </Card>

      {/* Trading Rules Table */}
      <Card className="overflow-hidden bg-gradient-to-br from-[#35208f] to-[#12032e] border border-purple-500/30 shadow-xl">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#4a307a] border-b-0">
              <TableHead className="w-1/4 text-white/90">Rule Area</TableHead>
              <TableHead className="text-center text-white">Assessment</TableHead>
              <TableHead className="text-center text-white">Funded</TableHead>
              <TableHead className="text-center text-white">Notes</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tradingRules.map((rule, index) => (
              <TableRow key={index} className={rule.highlighted ? "bg-purple-900/30" : ""}>
                <TableCell className={`font-medium ${rule.highlighted ? "text-red-300" : ""}`}>
                  {rule.area}
                </TableCell>
                <TableCell className="text-center">{rule.assessment}</TableCell>
                <TableCell className="text-center">{rule.funded}</TableCell>
                <TableCell className="text-center">{rule.notes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default FuturesTable;
