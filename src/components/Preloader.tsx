
import React, { useEffect, useState } from "react";
import { LoaderCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading progress
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 10;
          if (newProgress >= 100) {
            clearInterval(interval);
            setTimeout(() => setLoading(false), 500); // Small delay before hiding
            return 100;
          }
          return newProgress;
        });
      }, 150); // Interval between progress increments
      
      return () => clearInterval(interval);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A1F2C] transition-opacity duration-500 ${
        progress === 100 ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        <LoaderCircle 
          className="text-[#892BFC] animate-spin h-16 w-16" 
          strokeWidth={2}
        />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2 text-white">
            <span className="text-[#892BFC]">The Established</span> Trader
          </h1>
          <p className="text-gray-400 text-sm mb-4">Loading your experience...</p>
        </div>
        <div className="w-64">
          <Progress value={progress} className="h-2 bg-gray-800">
            <div className="h-full bg-gradient-to-r from-[#892BFC] to-indigo-500"></div>
          </Progress>
          <p className="text-xs text-gray-400 text-right mt-1">{progress}%</p>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
