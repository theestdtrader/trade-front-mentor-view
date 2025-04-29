
import React from "react";
import TypewriterText from "@/components/TypewriterText";
import SignUpForm from "@/components/SignUpForm";
import Banner1 from "@/assets/banner1.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-32 min-h-screen flex items-center justify-center">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${Banner1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 relative z-10">
        <div className="flex-1 text-center md:text-left max-w-xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
            <TypewriterText text="The Established" repeat={true} />{" "}
            <span className="text-indigo-500">
              <TypewriterText text="Trader" speed={150} repeat={true} />
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            Fast funding for the New Age Trader
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
            <SignUpForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
