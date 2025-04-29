
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableData {
  name: string;
  value: string;
}

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

const TabComponent = () => {
  // State to track active tab and selected account size
  const [activeTab, setActiveTab] = useState<"forex" | "futures">("forex");
  const [selectedAccountSize, setSelectedAccountSize] = useState<string | null>(null);

  // Data for Forex accounts
  const forexAccounts: Record<string, AccountDetails> = {
    "5 000": {
      accountSize: "$5,000",
      profitTarget: "$500 (10%)",
      dailyLossLimit: "$200 (4%)",
      maxTrailingDrawdown: "$400 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:30",
      performanceSplit: "80/20",
      refundableFee: "$99",
    },
    "10 000": {
      accountSize: "$10,000",
      profitTarget: "$1,000 (10%)",
      dailyLossLimit: "$400 (4%)",
      maxTrailingDrawdown: "$800 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:30",
      performanceSplit: "80/20",
      refundableFee: "$199",
    },
    "20 000": {
      accountSize: "$20,000",
      profitTarget: "$2,000 (10%)",
      dailyLossLimit: "$800 (4%)",
      maxTrailingDrawdown: "$1,600 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:30",
      performanceSplit: "80/20",
      refundableFee: "$299",
    },
    "50 000": {
      accountSize: "$50,000",
      profitTarget: "$5,000 (10%)",
      dailyLossLimit: "$2,000 (4%)",
      maxTrailingDrawdown: "$4,000 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:30",
      performanceSplit: "80/20",
      refundableFee: "$399",
    },
    "100 000": {
      accountSize: "$100,000",
      profitTarget: "$10,000 (10%)",
      dailyLossLimit: "$4,000 (4%)",
      maxTrailingDrawdown: "$8,000 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:30",
      performanceSplit: "80/20",
      refundableFee: "$499",
    },
  };

  // Data for Futures accounts
  const futuresAccounts: Record<string, AccountDetails> = {
    "5 000": {
      accountSize: "$5,000",
      profitTarget: "$500 (10%)",
      dailyLossLimit: "$200 (4%)",
      maxTrailingDrawdown: "$400 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:10",
      performanceSplit: "80/20",
      refundableFee: "$129",
    },
    "10 000": {
      accountSize: "$10,000",
      profitTarget: "$1,000 (10%)",
      dailyLossLimit: "$400 (4%)",
      maxTrailingDrawdown: "$800 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:10",
      performanceSplit: "80/20",
      refundableFee: "$229",
    },
    "20 000": {
      accountSize: "$20,000",
      profitTarget: "$2,000 (10%)",
      dailyLossLimit: "$800 (4%)",
      maxTrailingDrawdown: "$1,600 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:10",
      performanceSplit: "80/20",
      refundableFee: "$349",
    },
    "50 000": {
      accountSize: "$50,000",
      profitTarget: "$5,000 (10%)",
      dailyLossLimit: "$2,000 (4%)",
      maxTrailingDrawdown: "$4,000 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:10",
      performanceSplit: "80/20",
      refundableFee: "$449",
    },
    "100 000": {
      accountSize: "$100,000",
      profitTarget: "$10,000 (10%)",
      dailyLossLimit: "$4,000 (4%)",
      maxTrailingDrawdown: "$8,000 (8%)",
      drawdownType: "Balance",
      minTradingDays: "1",
      maxTradingDays: "30",
      leverage: "1:10",
      performanceSplit: "80/20",
      refundableFee: "$549",
    },
  };

  // Handle button clicks to set the selected account size
  const handleAccountSizeClick = (size: string) => {
    setSelectedAccountSize(size);
  };

  // Get the currently active accounts based on the selected tab
  const activeAccounts = activeTab === "forex" ? forexAccounts : futuresAccounts;

  // Get the selected account details
  const selectedAccount = selectedAccountSize ? activeAccounts[selectedAccountSize] : null;

  return (
    <div className="container mx-auto p-4 md:p-6">
      {/* Tabs */}
      <div className="flex justify-center mb-6">
        <button
          className={`px-6 py-2 font-semibold text-lg rounded-tl-lg shadow-md transition-colors ${
            activeTab === "forex"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setActiveTab("forex");
            setSelectedAccountSize(null);
          }}
        >
          Forex
        </button>
        <button
          className={`px-6 py-2 font-semibold text-lg rounded-tr-lg shadow-md transition-colors ${
            activeTab === "futures"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => {
            setActiveTab("futures");
            setSelectedAccountSize(null);
          }}
        >
          Futures
        </button>
      </div>

      {/* Account size buttons */}
      <div className="mb-8">
        <h3 className="text-center text-lg font-medium mb-4 text-gray-700">Select Account Size</h3>
        <div className="flex flex-wrap justify-center gap-3">
          {Object.keys(activeAccounts).map((size) => (
            <button
              key={size}
              onClick={() => handleAccountSizeClick(size)}
              className={`py-2 px-6 rounded-full shadow-md ${
                selectedAccountSize === size
                  ? "bg-gradient-to-r from-indigo-600 to-violet-600 text-white"
                  : "bg-gradient-to-r from-blue-500 to-indigo-600 text-white hover:from-blue-600 hover:to-indigo-700"
              } transition-all transform hover:scale-105`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-indigo-100 dark:border-gray-700">
        <Table>
          <TableCaption className="text-lg font-medium">
            {selectedAccountSize 
              ? `${activeTab === "forex" ? "Forex" : "Futures"} Account Details - $${selectedAccountSize}`
              : "Select an account size to view details"}
          </TableCaption>
          <TableBody>
            {selectedAccount ? (
              <>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Account Size</TableCell>
                  <TableCell className="text-indigo-600 dark:text-indigo-400 font-semibold">{selectedAccount.accountSize}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Profit Target</TableCell>
                  <TableCell className="text-green-600 dark:text-green-400 font-semibold">{selectedAccount.profitTarget}</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Daily Loss Limit</TableCell>
                  <TableCell className="text-red-600 dark:text-red-400 font-semibold">{selectedAccount.dailyLossLimit}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Max Trailing Drawdown</TableCell>
                  <TableCell className="text-orange-600 dark:text-orange-400 font-semibold">{selectedAccount.maxTrailingDrawdown}</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Drawdown Type</TableCell>
                  <TableCell>{selectedAccount.drawdownType}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Minimum Trading Days</TableCell>
                  <TableCell>{selectedAccount.minTradingDays}</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Maximum Trading Days</TableCell>
                  <TableCell>{selectedAccount.maxTradingDays}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Leverage</TableCell>
                  <TableCell className="text-blue-600 dark:text-blue-400 font-semibold">{selectedAccount.leverage}</TableCell>
                </TableRow>
                <TableRow className="bg-gray-50 dark:bg-gray-900">
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Performance Split</TableCell>
                  <TableCell className="text-purple-600 dark:text-purple-400 font-semibold">{selectedAccount.performanceSplit}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium text-gray-700 dark:text-gray-300 w-1/3 py-4">Refundable Fee</TableCell>
                  <TableCell className="text-indigo-600 dark:text-indigo-400 font-semibold">{selectedAccount.refundableFee}</TableCell>
                </TableRow>
              </>
            ) : (
              <TableRow>
                <TableCell colSpan={2} className="text-center py-8 text-gray-500">
                  Select an account size to view details
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default TabComponent;
