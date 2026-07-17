import React, { useState, useEffect } from "react";
import { X, Zap, Clock, TrendingUp, BarChart3, CandlestickChart, ArrowRight } from "lucide-react";

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

const TradingIllustration = () => (
  <div className="relative hidden lg:flex items-center justify-center w-28 h-28 flex-shrink-0">
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#892BFC]/30 to-[#6B21A8]/20 rotate-6" />
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#892BFC]/20 to-[#6B21A8]/30 -rotate-3" />
    <div className="relative z-10 flex flex-col items-center gap-2">
      <div className="flex items-end gap-1 h-12">
        <div className="w-2 bg-[#892BFC] rounded-t-sm h-5" />
        <div className="w-2 bg-[#892BFC] rounded-t-sm h-8" />
        <div className="w-2 bg-[#892BFC] rounded-t-sm h-6" />
        <div className="w-2 bg-[#892BFC] rounded-t-sm h-10" />
        <div className="w-2 bg-[#892BFC] rounded-t-sm h-12" />
      </div>
      <TrendingUp className="w-8 h-8 text-[#892BFC]" />
    </div>
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

      {/* Decorative trading icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <BarChart3 className="absolute top-4 left-[10%] w-16 h-16 text-[#892BFC]" />
        <CandlestickChart className="absolute bottom-4 right-[12%] w-20 h-20 text-[#892BFC]" />
        <TrendingUp className="absolute top-1/2 right-[30%] w-12 h-12 text-[#892BFC]" />
      </div>

      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6 flex-1 w-full">
            <div className="hidden sm:flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#892BFC] to-[#6B21A8] shadow-lg shadow-[#892BFC]/30 flex-shrink-0 animate-pulse">
              <Zap className="w-10 h-10 text-white" fill="currentColor" />
            </div>

            <TradingIllustration />

            <div className="flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#892BFC] text-white text-sm font-bold uppercase tracking-wider">
                  <Zap className="w-4 h-4" fill="currentColor" />
                  Flash Sale
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#892BFC] text-sm font-semibold">
                  <Clock className="w-4 h-4" />
                  July 29-31, 2026
                </span>
              </div>
              <p className="text-white font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl leading-tight">
                <span className="text-[#892BFC]">1 Step</span> for{" "}
                <span className="text-[#892BFC]">$1</span>, gets you a{" "}
                <span className="text-[#892BFC]">$1,000 Account</span>
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Limited time offer — grab your funded account before it is gone!
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 flex-shrink-0">
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
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#892BFC] hover:bg-[#9F4BFF] text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-[#892BFC]/30 hover:shadow-[#892BFC]/50 hover:scale-105"
              onClick={() => {
                const element = document.getElementById("programs");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Claim My Account
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

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
