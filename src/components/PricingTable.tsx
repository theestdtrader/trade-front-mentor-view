
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
    : ["$250", "$250", "$250", "$250", "$250", "$250"];
  
  // Define features based on account type
  const forexFeatures: PlanFeature[] = [
    {
      label: "Phase 1 Profit Target",
      values: Array(6).fill("8%")
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
      label: "Minimum Trading Days",
      values: Array(6).fill("5 Days")
    },
    {
      label: "First withdrawal",
      values: Array(6).fill("21 Days")
    }
  ];
  
  const futuresFeatures: PlanFeature[] = [
    {
      label: "Target",
      values: Array(6).fill("1-Step Evaluation = 10%")
    },
    {
      label: "Min./Max. Trading Days",
      values: Array(6).fill("Max time limit: 3 months on evaluation, unlimited in live")
    },
    {
      label: "Max Daily Loss",
      values: Array(6).fill("$750 (3%) / $600")
    },
    {
      label: "Max Loss Trailing Drawdown",
      values: Array(6).fill("$1,500 (6%) / $1,200")
    },
    {
      label: "Available Leverage",
      values: Array(6).fill("1 contracts/15 micro")
    },
    {
      label: "Live Account Gains",
      values: Array(6).fill("Keep 75% (90% with upgrade), first withdrawal whenever you want")
    },
    {
      label: "Consistency Score",
      values: Array(6).fill("25%")
    },
    {
      label: "Platform/Data Fees",
      values: Array(6).fill("No platform or monthly fees / $52/month")
    },
    {
      label: "One Time Fee",
      values: Array(6).fill("$250 / $300")
    }
  ];
  
  const features = accountType === "forex" ? forexFeatures : futuresFeatures;

  // Futures plan sizes
  const futuresPlanSizes = ["$5,000", "$10,000", "$15,000", "$25,000", "$50,000", "$100,000"];

  return (
    <div className="bg-gradient-to-br from-[#35208f] to-[#12032e] rounded-2xl overflow-hidden border border-purple-500/30 shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full text-white">
          <thead>
            <tr>
              <th className="py-8 px-6 text-left font-bold text-xl border-b border-purple-500/20">
                {accountType === "forex" ? "Account Size" : "Features"}
              </th>
              {accountType === "forex" ? (
                accountSizes.map((size, index) => (
                  <th key={index} className="py-8 px-6 text-center font-bold text-xl border-b border-purple-500/20">
                    {size}
                  </th>
                ))
              ) : (
                <th className="py-8 px-6 text-center font-bold text-xl border-b border-purple-500/20">
                  Details
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            {accountType === "forex" && (
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
            )}
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
                {accountType === "forex" ? (
                  // Render individual values for each account size (Forex)
                  feature.values.map((value, valueIndex) => (
                    <td key={valueIndex} className="py-6 px-6 text-center">
                      {feature.icon ? <Check className="mx-auto text-green-400" size={20} /> : value}
                    </td>
                  ))
                ) : (
                  // Render single column for futures
                  <td className="py-6 px-6 text-center">
                    {feature.icon ? <Check className="mx-auto text-green-400" size={20} /> : feature.values[0]}
                  </td>
                )}
              </tr>
            ))}
            {accountType === "futures" && (
              <>
                <tr>
                  <td className="py-2 px-6"></td>
                  <td className="py-2 px-4 text-center">
                    <div className="flex flex-col items-center justify-center my-6">
                      <Button 
                        className="bg-[#4C6EF5] hover:bg-[#4C6EF5]/90 text-white w-full max-w-[140px] rounded-xl mb-1 py-6"
                      >
                        Get Plan
                      </Button>
                      <span className="text-sm text-gray-300">Fee: {fees[0]}</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2} className="px-6 py-8">
                    <div className="border-t border-purple-500/20 pt-8">
                      <h3 className="text-xl font-bold mb-4 text-center">Available Plans</h3>
                      <div className="flex flex-wrap justify-center gap-4">
                        {futuresPlanSizes.map((size, index) => (
                          <Button 
                            key={index}
                            className="bg-[#4C6EF5] hover:bg-[#4C6EF5]/90 text-white px-6 py-4 rounded-xl"
                          >
                            {size}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PricingTable;
