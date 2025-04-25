
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { User, Home, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f1f0fb] via-[#d6bcfa] to-[#fff] flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <section className="flex flex-1 items-center justify-center relative pt-28 pb-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 mb-6">
              Guide Your <span className="text-primary">Financial Journey</span><br /> with <span className="text-indigo-500">Confidence</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Access powerful, AI-driven trading insights and portfolio tracking to make smarter investments—beginner or pro.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="px-8 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg hover-scale transition">
                Start Now
                <ArrowRight size={22} className="ml-2" />
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

      {/* Features Section */}
      <section id="features" className="container mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-gray-900 text-center">Platform Features</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          <div className="bg-white rounded-2xl shadow-md p-7 flex-1 text-center hover-scale">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3"><Home className="text-primary" size={28} /></span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Live Portfolio Tracker</h3>
            <p className="text-gray-600">Real-time data and analytics for all your investments.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 flex-1 text-center hover-scale">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3"><User className="text-primary" size={28} /></span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Mentor Guidance</h3>
            <p className="text-gray-600">Connect with experienced traders and get actionable advice.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-7 flex-1 text-center hover-scale">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3"><ArrowRight className="text-primary" size={28} /></span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Easy Onboarding</h3>
            <p className="text-gray-600">Simple signup, clear dashboard, and smooth integrations.</p>
          </div>
        </div>
      </section>

      {/* About/CTA Footer */}
      <footer id="about" className="bg-gradient-to-t from-[#d6bcfa]/60 to-white/90 py-12 mt-auto">
        <div className="container mx-auto flex flex-col items-center justify-center gap-3 px-4">
          <span className="uppercase text-xs text-gray-400 tracking-widest mb-1">About TradeMentor</span>
          <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">Empowering Your Path to Smarter Investing</h4>
          <p className="text-gray-600 text-center mb-4 max-w-2xl">
            Our mission is to demystify trading by providing transparent analytics, expert advice, and intuitive tools—so you can take charge, learn, and grow every day.
          </p>
          <Button
            size="lg"
            className="rounded-full px-8 font-bold bg-gradient-to-r from-primary to-indigo-500 text-white shadow hover-scale"
          >
            Get Started Now
          </Button>
        </div>
      </footer>
    </div>
  );
};

export default Index;
