
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f0fb] via-[#d6bcfa] to-[#fff] flex flex-col">
      <Navbar />
      <section className="flex flex-1 items-center justify-center relative pt-28 pb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Textual Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Take Control of Your <span className="text-primary">Financial Future</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Simple, powerful trading insights and portfolio management at your fingertips.
              Track performance, gain knowledge, and make smarter decisions – whether you’re a beginner or pro.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="px-8 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg animate-scale-in">
                Get Started
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-5 rounded-full font-bold text-lg border-primary text-primary hover:bg-primary/10">
                Learn More
              </Button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=540&q=80"
              alt="Trading dashboard"
              className="w-full max-w-md rounded-3xl shadow-2xl border-2 border-white/70 animate-fade-in"
            />
          </div>
        </div>
      </section>
      {/* Features Placeholder */}
      <section id="features" className="container mx-auto my-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-gray-900 text-center">Features</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white rounded-2xl shadow-md p-6 flex-1 text-center">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-2"><BarChart2 className="text-primary" size={28} /></span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Real-Time Analytics</h3>
            <p className="text-gray-600">Track your portfolio and trades with live charts and stats.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex-1 text-center">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-2"><User className="text-primary" size={28} /></span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Mentor Advice</h3>
            <p className="text-gray-600">Get actionable insights and education directly from top traders.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-6 flex-1 text-center">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-2"><Home className="text-primary" size={28} /></span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Easy Management</h3>
            <p className="text-gray-600">Seamlessly manage positions and funds with a beautiful interface.</p>
          </div>
        </div>
      </section>
      {/* ... more sections if needed ... */}
    </div>
  );
};

import { BarChart2, User, Home } from "lucide-react";
export default Index;
