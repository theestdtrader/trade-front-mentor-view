import React, { useState, useEffect } from "react";
import { X, Zap, Clock } from "lucide-react";

const SALE_END = new Date("2026-07-31T23:59:59");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
  const difference = +SALE_END - +new Date();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center min-w-[3rem] sm:min-w-[4rem]">
    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-white tabular-nums leading-none">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);

const FlashSaleBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`w-full bg-[#1A1F2C] border-y-2 border-[#892BFC]/40 relative overflow-hidden transition-all duration-700 ease-out ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#892BFC]/25 via-[#892BFC]/15 to-[#892BFC]/25 animate-pulse" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-2 left-1/4 w-3 h-3 bg-[#892BFC] rounded-full opacity-40 animate-bounce" style={{ animationDelay: "0s" }} />
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-[#892BFC] rounded-full opacity-30 animate-bounce" style={{ animationDelay: "0.5s" }} />
        <div className="absolute bottom-2 left-1/2 w-2 h-2 bg-[#892BFC] rounded-full opacity-50 animate-bounce" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5 flex-1 w-full">
            <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#892BFC] to-[#6B21A8] shadow-lg shadow-[#892BFC]/30 flex-shrink-0 animate-pulse">
              <Zap className="w-8 h-8 text-white" fill="currentColor" />
            </div>

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#892BFC] text-white text-sm font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" fill="currentColor" />
                  Flash Sale
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#892BFC] text-sm font-semibold">
                  <Clock className="w-4 h-4" />
                  July 29-31, 2026
                </span>
              </div>
              <p className="text-white font-extrabold text-lg sm:text-xl md:text-2xl lg:text-3xl">
                <span className="text-[#892BFC]">1 Step</span> for{" "}
                <span className="text-[#892BFC]">$1</span>, gets you a{" "}
                <span className="text-[#892BFC]">$1,000 Account</span>
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-1">
                Limited time offer — grab your funded account before it is gone!
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-shrink-0">
            <div className="flex items-center gap-2 sm:gap-3">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#892BFC] -mt-4">:</span>
              <CountdownUnit value={timeLeft.hours} label="Hrs" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#892BFC] -mt-4">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Min" />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#892BFC] -mt-4">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Sec" />
            </div>

            <button
              onClick={() => setIsVisible(false)}
              className="hidden sm:flex flex-shrink-0 p-2.5 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
              aria-label="Close flash sale banner"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <button
          onClick={() => setIsVisible(false)}
          className="sm:hidden absolute top-2 right-2 p-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-200"
          aria-label="Close flash sale banner"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
