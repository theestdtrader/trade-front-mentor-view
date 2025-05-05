// pages/affiliate.tsx
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Copy, Loader2 } from "lucide-react";
import Navbar from "../components/Navbar";

const AffiliatePage: React.FC = () => {
  const [affiliateCode, setAffiliateCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateCode = async () => {
    setLoading(true);
    try {
      // Replace with your API route
      const res = await fetch("/api/generate-affiliate-code", {
        method: "POST",
      });
      const data = await res.json();
      setAffiliateCode(data.code);
    } catch (err) {
      alert("Error generating code.");
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    if (!affiliateCode) return;
    navigator.clipboard.writeText(affiliateCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <Card className="max-w-md w-full p-6 shadow-2xl rounded-2xl">
          <CardContent className="space-y-4">
            <h1 className="text-2xl font-bold text-center">
              Affiliate Program
            </h1>
            <p className="text-sm text-gray-600 text-center">
              Generate your unique affiliate code to share and earn rewards!
            </p>

            {affiliateCode ? (
              <div className="flex items-center space-x-2">
                <Input readOnly value={affiliateCode} />
                <Button onClick={copyToClipboard} variant="secondary">
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </Button>
              </div>
            ) : (
              <Button
                onClick={generateCode}
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <Loader2 className="animate-spin" size={16} />
                ) : (
                  "Generate Code"
                )}
              </Button>
            )}

            <div className="text-sm text-gray-500 text-center pt-4">
              New users can enter this code during sign-up to get a discount!
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default AffiliatePage;
