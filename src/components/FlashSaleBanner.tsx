import React, { useState, useEffect } from "react";
import { X, Zap, Clock, Star, ArrowRight, TrendingUp, CandlestickChart } from "lucide-react";

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
    <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#F7EF8A] tabular-nums leading-none drop-shadow-[0_0_10px_rgba(247,239,138,0.25)]">
      {value.toString().padStart(2, "0")}
    </span>
    <span className="text-[10px] sm:text-xs text-[#F7EF8A]/70 uppercase tracking-wider mt-1">
      {label}
    </span>
  </div>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
    <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dotGrid" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#D4AF37" opacity="0.4" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dotGrid)" />
    </svg>
    <div className="absolute left-0 bottom-0 w-1/2 h-full opacity-30">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 180 L40 140 L80 160 L120 100 L160 120 L200 60 L240 80 L280 40 L320 70 L360 30 L400 50" 
          stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.5" />
      </svg>
    </div>
    <div className="absolute right-0 top-0 w-1/2 h-full opacity-30">
      <svg viewBox="0 0 400 200" className="w-full h-full" preserveAspectRatio="none">
        <path d="M0 120 L40 100 L80 140 L120 80 L160 110 L200 50 L240 90 L280 60 L320 100 L360 40 L400 70" 
          stroke="#D4AF37" strokeWidth="2" fill="none" opacity="0.5" />
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
      className={`w-full relative overflow-hidden transition-all duration-700 ease-out bg-gradient-to-br from-[#0a0e17] via-[#0d1320] to-[#0a0e17] ${
        isMounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      {/* Top and bottom gold accent borders */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      
      <BackgroundPattern />
      
      {/* Animated gold glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-[#D4AF37]/10 to-[#D4AF37]/5 animate-pulse" />

      <div className="container mx-auto px-4 py-10 sm:py-12 md:py-14 lg:py-16 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          {/* Trust badge */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="hidden sm:block h-px w-12 md:w-20 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7EF8A] fill-[#F7EF8A]" />
              ))}
            </div>
            <span className="text-[#F7EF8A]/90 text-xs sm:text-sm font-medium tracking-wide uppercase">
              Rated 4.9/5 | Used by over 150,000 traders
            </span>
            <div className="hidden sm:block h-px w-12 md:w-20 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>

          {/* Main headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold uppercase tracking-tight leading-[1.1] mb-6 sm:mb-8">
            <span className="bg-gradient-to-r from-[#F7EF8A] via-[#D4AF37] to-[#F7EF8A] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Get Your $1000 Instant
            </span>
            <br />
            <span className="bg-gradient-to-r from-[#F7EF8A] via-[#D4AF37] to-[#F7EF8A] bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]">
              Funded Account For $1
            </span>
          </h2>

          {/* Countdown Timer */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-8">
            <div className="flex items-center gap-1.5 sm:gap-2 px-4 py-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#F7EF8A]" />
              <span className="text-[#F7EF8A] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Flash Sale Ends In
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <CountdownUnit value={timeLeft.days} label="Days" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#F7EF8A] -mt-4">:</span>
              <CountdownUnit value={timeLeft.hours} label="Hrs" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#F7EF8A] -mt-4">:</span>
              <CountdownUnit value={timeLeft.minutes} label="Min" />
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-[#F7EF8A] -mt-4">:</span>
              <CountdownUnit value={timeLeft.seconds} label="Sec" />
            </div>
          </div>

          {/* CTA Button */}
          <button
            className="group inline-flex items-center gap-2 px-8 sm:px-10 py-4 sm:py-5 rounded-lg bg-gradient-to-r from-[#F7EF8A] via-[#D4AF37] to-[#B8860B] hover:from-[#FFF8B0] hover:via-[#E5C048] hover:to-[#C99A1E] text-[#0a0e17] font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] hover:scale-105"
            onClick={() => {
              const element = document.getElementById("programs");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <Zap className="w-5 h-5 fill-current" />
            Claim Your $1 Account Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Subheading */}
          <p className="mt-4 sm:mt-6 text-[#D4AF37]/80 text-sm sm:text-base font-medium tracking-wide uppercase">
            Start Your Trading Journey For Just One Dollar
          </p>
        </div>

        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full text-[#D4AF37]/60 hover:text-[#F7EF8A] hover:bg-[#D4AF37]/10 transition-colors duration-200"
          aria-label="Close flash sale banner"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default FlashSaleBanner;
