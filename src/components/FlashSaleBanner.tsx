import React, { useState, useEffect } from "react";
import { X, Zap, Clock, ArrowRight } from "lucide-react";

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
  <div className="flex flex-col items-center min-w-[2.5rem] sm:min-w-[3.5rem]">
    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#A855F7] tabular-nums leading-none drop-shadow-[0_0_10px_rgba(168,85,247,0.25)]">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs text-[#A855F7]/70 uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#892BFC" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid)" />
    </svg>
    <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-30">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 180 L40 140 L80 160 L120 100 L160 120 L200 60 L240 80 L280 40 L320 70 L360 30 L400 50" 
          stroke="#892BFC" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
    </div>
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 120 L40 100 L80 140 L120 80 L160 110 L200 50 L240 90 L280 60 L320 100 L360 40 L400 70" 
          stroke="#892BFC" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
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
      className={`w-full relative overflow-hidden transition-all duration-700 ease-out bg-gradient-to-br from-[#1A1F2C] via-[#1F2330] to-[#1A1F2C] ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Top and bottom purple accent borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#892BFC] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#892BFC] to-transparent" />
      
      <BackgroundPattern />
      
      {/* Animated purple glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#892BFC]/5 via-[#892BFC]/10 to-[#892BFC]/5 animate-pulse" />

      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[1.1] mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#A855F7] via-[#892BFC] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(137,43,252,0.2)]">
              Get Your $1000 Instant
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#A855F7] via-[#892BFC] to-[#A855F7] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(137,43,252,0.2)]">
              Funded Account For $1
            </span>
          </h2>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-lg bg-[#892BFC]/10 border border-[#892BFC]/30">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#A855F7]" />
              <span className="text-[#A855F7] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Flash Sale Ends In
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#A855F7] -mt-4">:</span>
              <CountdownUnit value={timeLeft.hours} label="Hrs" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#A855F7] -mt-4">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Min" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#A855F7] -mt-4">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Sec" />
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="https://theestablishedtraderdashboard.propaccount.com/en/sign-up"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-lg bg-gradient-to-r from-[#A855F7] via-[#892BFC] to-[#7C3AED] hover:from-[#B46BFF] hover:via-[#9B4DFF] hover:to-[#8B5CF6] text-white font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(137,43,252,0.35)] hover:shadow-[0_0_40px_rgba(137,43,252,0.55)] hover:scale-105"
          >
            <Zap className="w-5 h-5 fill-current" />
            Claim Your $1 Account Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-[#A855F7]/80 text-sm sm:text-base font-medium tracking-wide uppercase">
            Start Your Trading Journey For Just One Dollar
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full text-[#A855F7]/60 hover:text-[#A855F7] hover:bg-[#892BFC]/10 transition-colors duration-200"
          aria-label="Close flash sale banner"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
