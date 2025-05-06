
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

const ForexTable = () => {
  return (
    <div className="space-y-6">
      {/* Account Size and Fee Table */}
      <Card className="overflow-hidden border-purple-500/20">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-[#4a307a] border-b-0">
                <TableHead className="text-white font-bold">Account Size</TableHead>
                <TableHead className="text-white font-bold text-center">$5,000</TableHead>
                <TableHead className="text-white font-bold text-center">$10,000</TableHead>
                <TableHead className="text-white font-bold text-center">$25,000</TableHead>
                <TableHead className="text-white font-bold text-center">$50,000</TableHead>
                <TableHead className="text-white font-bold text-center">$100,000</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">FEE</TableCell>
                <TableCell className="text-center">$35</TableCell>
                <TableCell className="text-center">$75</TableCell>
                <TableCell className="text-center">$190</TableCell>
                <TableCell className="text-center">$375</TableCell>
                <TableCell className="text-center">$750</TableCell>
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
                <TableHead className="text-white font-bold">Rule Area</TableHead>
                <TableHead className="text-white font-bold text-center">Assessment</TableHead>
                <TableHead className="text-white font-bold text-center">Funded</TableHead>
                <TableHead className="text-white font-bold text-center">Notes</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Profit Target</TableCell>
                <TableCell className="text-center">10%</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell>Funded account has no profit limit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Daily Loss Limit</TableCell>
                <TableCell className="text-center">5%</TableCell>
                <TableCell className="text-center">5%</TableCell>
                <TableCell>Equity-based, based on prior day balance (Hard Breach)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Max Drawdown</TableCell>
                <TableCell className="text-center">6%</TableCell>
                <TableCell className="text-center">6%</TableCell>
                <TableCell>Equity-based, does not trail (Hard Breach)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Inactivity Period</TableCell>
                <TableCell className="text-center">30 Days</TableCell>
                <TableCell className="text-center">30 Days</TableCell>
                <TableCell>Must place trade (Hard Breach)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Leverage</TableCell>
                <TableCell className="text-center">1:50</TableCell>
                <TableCell className="text-center">1:50</TableCell>
                <TableCell></TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Max Time</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell className="text-center">-</TableCell>
                <TableCell>No Max Time requirements</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
};

export default ForexTable;
