
import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer id="about" className="bg-gradient-to-t from-[#d6bcfa]/60 py-12 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-4">
        <span className="uppercase text-xs text-gray-400 tracking-widest mb-1">
          About TradeMentor
        </span>
        <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
          Pay Outs
        </h4>
        <p className="text-gray-600 text-center mb-4 max-w-2xl">
          Traders can request a withdrawal of the gains in their funded
          account at anytime through their trader dashboard, but no more
          frequently than once every (30) days...
        </p>
        <Button
          size="lg"
          className="rounded-full px-8 font-bold bg-gradient-to-r from-primary to-indigo-500 shadow hover-scale text-white py-3 hover:bg-primary/80 transition"
        >
          Get Started Now
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
