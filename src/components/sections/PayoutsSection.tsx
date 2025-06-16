import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Wallet, Receipt, Banknote, Info } from "lucide-react";

const PayoutsSection = () => {
  return (
    <section
      id="payouts"
      className="bg-gradient-to-t from-[#d6bcfa]/60 py-16 mt-auto"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="uppercase text-xs text-white tracking-widest mb-1">
            The Established Trader
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pay Outs
          </h2>
          <p className="text-white text-center mb-4 max-w-2xl mx-auto">
            Traders can request a withdrawal of the gains in their funded
            account at anytime through their trader dashboard, but no more
            frequently than once every (30) days.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="backdrop-blur-sm bg-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <Wallet className="h-5 w-5 text-[#892BFC]" />
                Withdrawal Process
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-white">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">1.</span>
                  Log into your trader dashboard
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">2.</span>
                  Navigate to the "Withdrawals" section
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">3.</span>
                  Enter withdrawal amount and payment details
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">4.</span>
                  Submit your request for processing
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <Banknote className="h-5 w-5 text-[#892BFC]" />
                Payment Methods
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-white">
                <p>
                  We offer multiple secure payment methods for your convenience:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="font-medium text-[#892BFC]">•</span>
                    We offer flat (USD) via Rise.
                  </li>
                  <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">•</span>
                  Cryptocurrency (BTC, ETH, USDC) to ERC-20 wallets
                </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-sm bg-white/10">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-white">
                <Info className="h-5 w-5 text-[#892BFC]" />
                Important Policies
              </CardTitle>
            </CardHeader>
            <CardContent className="text-white">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">•</span>
                  24-48 hours, Rise can take longer
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">•</span>
                  No minimum
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">•</span>
                  Maximum: 80% of available balance per withdrawal - for
                  FX/CFDs, excluding Futures
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-medium text-[#892BFC]">•</span>
                  30-day minimum interval between withdrawals
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center">
           <a
            href="https://theestablishedtraderdashboard.propaccount.com/sign-in"
            target="_blank"
            rel="noopener noreferrer"
          >
          <Button
            size="lg"
            className="rounded-full px-8 font-bold bg-gradient-to-r from-primary to-indigo-500 shadow hover-scale text-white py-3 hover:bg-primary/80 transition"
          >
            Get Started Now
          </Button>
             </a>
        </div>
      </div>
    </section>
  );
};

export default PayoutsSection;
