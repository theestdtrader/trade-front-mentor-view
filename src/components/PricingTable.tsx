
import React from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card } from "@/components/ui/card";

interface PlanFeature {
  label: string;
  values: string[];
  icon?: boolean;
  info?: string;
}

export interface PricingTableProps {
  accountType: "forex" | "futures";
}

const PricingTable: React.FC<PricingTableProps> = ({ accountType }) => {
  // Base account sizes for both types
  const accountSizes = ["$6,000", "$15,000", "$25,000", "$50,000", "$100,000", "$200,000"];
  
  // Fees - slightly different for forex vs futures
  const fees = accountType === "forex" 
    ? ["$59", "$119", "$199", "$299", "$549", "$999"]
    : ["$69", "$129", "$219", "$319", "$569", "$1,019"];
  
  const features: PlanFeature[] = [
    {
      label: "Phase 1 Profit Target",
      values: Array(6).fill(accountType === "forex" ? "8%" : "10%")
    },
    {
      label: "Maximum Overall Loss",
      values: ["10% ($600)", "10% ($1,500)", "10% ($2,500)", "10% ($5,000)", "10% ($10,000)", "10% ($20,000)"]
    },
    {
      label: "Maximum Daily Loss",
      values: ["5% ($300)", "5% ($750)", "5% ($1,250)", "5% ($2,500)", "5% ($5,000)", "5% ($10,000)"]
    },
    {
      label: "News Trading",
      values: Array(6).fill(""),
      icon: true
    },
    {
      label: "Profit Split Upto",
      values: Array(6).fill(accountType === "forex" ? "95%" : "90%")
    },
    {
      label: "Minimum Trading Days",
      values: Array(6).fill("5 Days")
    },
    {
      label: "First withdrawal",
      values: Array(6).fill(accountType === "forex" ? "21 Days" : "14 Days")
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#35208f] to-[#12032e] rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="py-8 px-6 text-left font-bold text-xl border-b border-purple-500/20">
                Account Size
              </th>
              {accountSizes.map((size, index) => (
                <th key={index} className="py-8 px-6 text-center font-bold text-xl border-b border-purple-500/20">
                  {size}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-6"></td>
              {fees.map((fee, index) => (
                <td key={index} className="py-2 px-4 text-center">
                  <div className="flex flex-col items-center justify-center mb-6">
                    <Button 
                      className="bg-[#4C6EF5] hover:bg-[#4C6EF5]/90 text-white w-full max-w-[140px] rounded-xl mb-1 py-6"
                    >
                      Get Plan
                    </Button>
                    <span className="text-sm text-gray-300">Fee: {fee}</span>
                  </div>
                </td>
              ))}
            </tr>
            {features.map((feature, index) => (
              <tr key={index} className="border-t border-purple-500/10">
                <td className="py-6 px-6 flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-[#35208f] flex items-center justify-center">
                      <span className="text-purple-300 text-xs font-bold">i</span>
                    </div>
                    <div>
                      <div className="font-medium">{feature.label}</div>
                      {feature.info && <div className="text-xs text-gray-400">{feature.info}</div>}
                    </div>
                  </div>
                </td>
                {feature.values.map((value, valueIndex) => (
                  <td key={valueIndex} className="py-6 px-6 text-center">
                    {feature.icon ? <Check className="mx-auto text-green-400" size={20} /> : value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
