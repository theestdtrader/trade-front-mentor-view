
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Define our account data structure
interface AccountDetails {
  accountSize: string;
  profitTarget: string;
  dailyLossLimit: string;
  maxTrailingDrawdown: string;
  drawdownType: string;
  minTradingDays: string;
  maxTradingDays: string;
  leverage: string;
  performanceSplit: string;
  refundableFee: string;
}

// Define column structure for our table
interface TableColumn {
  label: string;
  key: keyof AccountDetails;
  className?: string;
}

const TabComponent = () => {
  // State to track active tab
  const [activeTab, setActiveTab] = useState<"forex" | "futures">("forex");

  // Define columns for our table
  const columns: TableColumn[] = [
    { 
      label: "Profit Target (10%)", 
      key: "profitTarget",
      className: "font-semibold text-green-400" 
    },
    { 
      label: "Daily Loss Limit", 
      key: "dailyLossLimit",
      className: "font-semibold text-red-400" 
    },
    { 
      label: "Max Trailing Drawdown", 
      key: "maxTrailingDrawdown",
      className: "font-semibold text-orange-400" 
    },
    { 
      label: "Drawdown Type", 
      key: "drawdownType" 
    },
    { 
      label: "Minimum Trading Days", 
      key: "minTradingDays" 
    },
    { 
      label: "Maximum Trading Days", 
      key: "maxTradingDays" 
    },
    { 
      label: "Leverage", 
      key: "leverage",
      className: "font-semibold text-blue-400" 
    },
    { 
      label: "Performance Split", 
      key: "performanceSplit",
      className: "font-semibold text-purple-400" 
    },
    { 
      label: "Refundable Fee", 
      key: "refundableFee",
      className: "font-semibold text-indigo-400" 
    },
  ];

  // Data for Forex accounts - updated to match the image
  const forexAccounts: Record<string, AccountDetails> = {
    "10 000": {
      accountSize: "$10,000",
      profitTarget: "$1,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$90",
    },
    "25 000": {
      accountSize: "$25,000",
      profitTarget: "$2,500",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$220",
    },
    "50 000": {
      accountSize: "$50,000",
      profitTarget: "$5,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$425",
    },
    "100 000": {
      accountSize: "$100,000",
      profitTarget: "$10,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$800",
    },
    "200 000": {
      accountSize: "$200,000",
      profitTarget: "$20,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$1,700",
    },
  };

  // Data for Futures accounts - updated to match the image
  const futuresAccounts: Record<string, AccountDetails> = {
    "10 000": {
      accountSize: "$10,000",
      profitTarget: "$1,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$99",
    },
    "25 000": {
      accountSize: "$25,000",
      profitTarget: "$2,500",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$229",
    },
    "50 000": {
      accountSize: "$50,000",
      profitTarget: "$5,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$435",
    },
    "100 000": {
      accountSize: "$100,000",
      profitTarget: "$10,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$830",
    },
    "200 000": {
      accountSize: "$200,000",
      profitTarget: "$20,000",
      dailyLossLimit: "5%",
      maxTrailingDrawdown: "6%",
      drawdownType: "Trailing",
      minTradingDays: "5 days",
      maxTradingDays: "Unlimited",
      leverage: "Up to 1:20",
      performanceSplit: "Up to 90%",
      refundableFee: "$1,750",
    },
  };

  // Get the currently active accounts based on the selected tab
  const activeAccounts = activeTab === "forex" ? forexAccounts : futuresAccounts;
  const accountSizes = Object.keys(activeAccounts);

  return (
    <div className="container mx-auto px-2 md:px-4">
      {/* Tabs for selecting account type */}
      <div className="flex justify-center mb-8">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "forex" | "futures")} className="w-full">
          <TabsList className="w-full max-w-md mx-auto mb-4">
            <TabsTrigger value="forex" className="flex-1">Forex</TabsTrigger>
            <TabsTrigger value="futures" className="flex-1">Futures</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Table component */}
      <div className="bg-[#2c1551] rounded-lg border border-purple-500/20 overflow-hidden shadow-xl">
        <Table>
          {/* Table Header with Account Sizes */}
          <TableHeader>
            <TableRow className="bg-[#4a307a] border-b-0">
              <TableHead className="w-1/4">
                <div className="flex items-center">
                  <span className="text-white/80 font-bold">Account Size</span>
                </div>
              </TableHead>
              {accountSizes.map((size) => (
                <TableHead key={size} className="text-center font-bold text-white">
                  ${size.replace(' ', ',')}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>

          {/* Table Body with Rows for Each Property */}
          <TableBody>
            {columns.map((column) => (
              <TableRow key={column.key}>
                <TableCell className="font-medium bg-[#38225b] text-white">
                  {column.label}
                </TableCell>
                {accountSizes.map((size) => (
                  <TableCell 
                    key={`${size}-${column.key}`}
                    className={`text-center ${column.className || ""}`}
                  >
                    {activeAccounts[size][column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TabComponent;
