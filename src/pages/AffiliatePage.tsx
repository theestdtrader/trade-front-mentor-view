
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy, Loader2, Link } from "lucide-react";
import Navbar from "../components/Navbar";
import { toast } from "sonner";

const AffiliatePage: React.FC = () => {
  const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateCode = async () => {
    setLoading(true);
    try {
      // In a real app, this would make an API call to generate a unique code
      // For demo purposes, we're generating a random code
      setTimeout(() => {
        const randomCode = `AFF-${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
        setAffiliateCode(randomCode);
        toast.success("Affiliate code generated successfully!");
        setLoading(false);
      }, 1000);
    } catch (err) {
      toast.error("Error generating affiliate code.");
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!affiliateCode) return;
    navigator.clipboard.writeText(affiliateCode);
    setCopied(true);
    toast.success("Affiliate code copied to clipboard!");
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 p-6">
        <Card className="max-w-md w-full p-6 shadow-2xl rounded-2xl">
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-2">
              <div className="bg-purple-600/20 p-3 rounded-full">
                <Link className="h-8 w-8 text-purple-500" />
              </div>
              <h1 className="text-2xl font-bold text-center text-white">
                Affiliate Program
              </h1>
              <p className="text-sm text-gray-400 text-center">
                Generate your unique affiliate code to share and earn rewards!
              </p>
            </div>

            {affiliateCode ? (
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Input 
                    readOnly 
                    value={affiliateCode} 
                    className="bg-gray-800 text-white border-gray-700"
                  />
                  <Button onClick={copyToClipboard} variant="secondary" className="min-w-10">
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                  </Button>
                </div>
                <Button 
                  onClick={generateCode} 
                  variant="outline" 
                  className="w-full border-gray-700 text-gray-300 hover:text-white"
                >
                  Generate New Code
                </Button>
              </div>
            ) : (
              <Button
                onClick={generateCode}
                disabled={loading}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin mr-2" size={16} />
                    Generating...
                  </>
                ) : (
                  "Generate Affiliate Code"
                )}
              </Button>
            )}

            <div className="space-y-4 bg-gray-800/50 p-4 rounded-lg">
              <h2 className="font-medium text-white">Benefits:</h2>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>Earn 10% commission on each successful referral</li>
                <li>Your friends get 5% discount on their first purchase</li>
                <li>Track performance in your affiliate dashboard</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AffiliatePage;
