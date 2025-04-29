
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Home, User, ArrowRight } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="container mx-auto my-16 px-4 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
        How It Works
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        <Card className="p-8 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-[#892BFC]/10 p-4">
              <Home className="text-[#892BFC]" size={32} />
            </span>
          </div>
          <CardContent className="p-0">
            <h3 className="font-semibold text-xl mb-3 text-white">
              1. Choose your Program
            </h3>
            <p className="text-gray-300">
              We offer 1-step evolutions for both futures & Forex.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-[#892BFC]/10 p-4">
              <User className="text-[#892BFC]" size={32} />
            </span>
          </div>
          <CardContent className="p-0">
            <h3 className="font-semibold text-xl mb-3 text-white">
              2. Pick an Account
            </h3>
            <p className="text-gray-300">
              Our Account size ranges from 5,000 - 200,000.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-[#892BFC]/10 p-4">
              <ArrowRight className="text-[#892BFC]" size={32} />
            </span>
          </div>
          <CardContent className="p-0">
            <h3 className="font-semibold text-xl mb-3 text-white">
              3. Trade & Meet the Objectives
            </h3>
            <p className="text-gray-300">
              Understand the loss limit rules & hit the 10% profit target.
            </p>
          </CardContent>
        </Card>

        <Card className="p-8 text-center hover:scale-105 transition-all duration-300">
          <div className="flex justify-center mb-6">
            <span className="rounded-full bg-[#892BFC]/10 p-4">
              <Home className="text-[#892BFC]" size={32} />
            </span>
          </div>
          <CardContent className="p-0">
            <h3 className="font-semibold text-xl mb-3 text-white">
              4. Go Live
            </h3>
            <p className="text-gray-300">
              Trade the same way & request a healthy withdrawal every 30 days.
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="flex justify-center mb-10 mt-2">
        <button
          onClick={() => {
            const programsSection = document.getElementById("programs");
            programsSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className=" rounded-full px-8 font-bold bg-gradient-to-r from-primary to-indigo-500 shadow hover-scale text-white py-3 hover:bg-primary/80 transition"
        >
          Select a Program
        </button>
      </div>
    </section>
  );
};

export default FeaturesSection;
