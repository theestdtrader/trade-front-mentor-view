import React, { useState, useEffect } from "react";
import { X, Zap, Clock } from "lucide-react";

const FlashSaleBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`w-full bg-[#1A1F2C] border-y border-[#892BFC]/30 relative overflow-hidden transition-all duration-700 ease-out ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#892BFC]/20 via-[#892BFC]/10 to-[#892BFC]/20 animate-pulse" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-2 h-2 bg-[#892BFC] rounded-full opacity-40 animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-[#892BFC] rounded-full opacity-30 animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#892BFC] rounded-full opacity-50 animate-bounce" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-4 relative z-10">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#892BFC] to-[#6B21A8] shadow-lg shadow-[#892BFC]/30 flex-shrink-0 animate-pulse">
              <Zap className="w-6 h-6 text-white" fill="currentColor" />
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#892BFC] text-white text-xs font-bold uppercase tracking-wider">
                  <Zap className="w-3 h-3" fill="currentColor" />
                  Flash Sale
                </span>
                <span className="inline-flex items-center gap-1 text-[#892BFC] text-xs font-semibold">
                  <Clock className="w-3 h-3" />
                  July 29-31, 2026
                </span>
              </div>
              <p className="text-white font-bold text-sm sm:text-base md:text-lg">
                <span className="text-[#892BFC]">1 Step</span> for{" "}
                <span className="text-[#892BFC]">$1</span>, gets you a{" "}
                <span className="text-[#892BFC]">$1,000 Account</span>
              </p>
              <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                Limited time offer — grab your funded account before it is gone!
              </p>
            </div>
          </div>

          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
            aria-label="Close flash sale banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
