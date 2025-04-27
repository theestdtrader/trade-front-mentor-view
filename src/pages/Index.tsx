
import React from 'react';
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { User, Home, ArrowRight, FileText } from "lucide-react";
import Banner1 from "@/assets/banner1.jpg";
import TabComponent from "@/components/Tabs";
import TypewriterText from "@/components/TypewriterText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="bg-gradient-to-br from-[#1A1F2C] via-[#221F26] to-[#2C2A31] flex flex-col">
      <Navbar />
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
              <TypewriterText text="The Established" repeat={true} /> <span className="text-indigo-500"><TypewriterText text="Trader" speed={150} repeat={true} /></span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Fast funding for the New Age Trader
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="px-8 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg hover:scale-105 transition"
              >
                Start Now
                <ArrowRight size={22} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="container mx-auto my-16 px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#2A2D3E] to-[#2E2B36] rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-all duration-300 border border-[#892BFC]/20 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <span className="rounded-full bg-[#892BFC]/10 p-4">
                <Home className="text-[#892BFC]" size={32} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-white">
              1. Choose your Program
            </h3>
            <p className="text-gray-300">
              We offer 1-step evolutions for both futures & Forex.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2A2D3E] to-[#2E2B36] rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-all duration-300 border border-[#892BFC]/20 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <span className="rounded-full bg-[#892BFC]/10 p-4">
                <User className="text-[#892BFC]" size={32} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-white">
              2. Pick an Account
            </h3>
            <p className="text-gray-300">
              Our Account size ranges from 5,000 - 200,000.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2A2D3E] to-[#2E2B36] rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-all duration-300 border border-[#892BFC]/20 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <span className="rounded-full bg-[#892BFC]/10 p-4">
                <ArrowRight className="text-[#892BFC]" size={32} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-white">
              3. Trade & Meet the Objectives
            </h3>
            <p className="text-gray-300">
              Understand the loss limit rules & hit the 10% profit target.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#2A2D3E] to-[#2E2B36] rounded-xl shadow-lg p-8 text-center hover:scale-105 transition-all duration-300 border border-[#892BFC]/20 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              <span className="rounded-full bg-[#892BFC]/10 p-4">
                <Home className="text-[#892BFC]" size={32} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-3 text-white">
              4. Go Live
            </h3>
            <p className="text-gray-300">
              Trade the same way & request a healthy withdrawal every 30 days.
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-10 mt-2">
          <button
            onClick={() => {
              const programsSection = document.getElementById("programs");
              programsSection?.scrollIntoView({ behavior: "smooth" });
            }}
            className=" rounded-full px-8 font-bold bg-gradient-to-r from-primary to-indigo-500 shadow hover-scale text-white   py-3   hover:bg-primary/80 transition"
          >
            Select a Program
          </button>
        </div>
      </section>

      <section
        id="programs"
        className="container from-[#cfcfcf] to-[#d7d7d7]  mx-auto my-16 px-4"
      >
        <h2 className="text-3xl font-bold mb-8 text-[#892BFC] text-center">
          Access trading capital in record time.... and take your trading to the
          next level
        </h2>

        <TabComponent />
      </section>

      <section className="container mx-auto px-4 py-16 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
          Frequently Asked Questions
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-8">
            <Button
              variant="outline"
              className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border-[#892BFC]/30 hover:border-[#892BFC]"
              onClick={() => window.open('/faq-document.pdf', '_blank')}
            >
              <FileText className="w-5 h-5" />
              Download Complete FAQ Guide
            </Button>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6">
              <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
                What is The Established Trader program?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                The Established Trader program is designed to provide fast funding for new age traders. We offer various account sizes and flexible trading conditions to help traders grow their portfolios.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6">
              <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
                How do I qualify for funding?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                To qualify for funding, you need to complete our 1-step evaluation process. Meet the profit target of 10% while respecting the loss limits, and you'll be eligible for a funded account.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6">
              <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
                What are the available account sizes?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                We offer account sizes ranging from $5,000 to $200,000. You can choose the size that best fits your trading style and experience level.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6">
              <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
                How often can I request withdrawals?
              </AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Traders can request withdrawals of their profits once every 30 days through their trader dashboard. There's no minimum withdrawal amount.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <footer
        id="about"
        className="bg-gradient-to-t from-[#d6bcfa]/60 py-12 mt-auto"
      >
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
            className="rounded-full px-8 font-bold bg-gradient-to-r from-primary to-indigo-500 shadow hover-scale text-white   py-3   hover:bg-primary/80 transition"
          >
            Get Started Now
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
