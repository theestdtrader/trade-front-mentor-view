import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { User, Home, ArrowRight } from "lucide-react";
import Banner1 from "@/assets/banner1.jpg";
import trading from "@/assets/trading.jpg";
import TabComponent from "@/components/Tabs";
//from-[#f1f0fb] via-[#3c3842] to-[#5f5964]
const Index = () => {
  return (
    <div className=" bg-gradient-to-br bg-[#ffffff] flex flex-col">
      <Navbar />
      {/* Hero Section with Background Image */}
      <section className="relative pt-32 pb-32 min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${Banner1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black/80" /> {/* Dark overlay */}
        </div>

        <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4 relative z-10">
          {/* Left content */}
          <div className="flex-1 text-center md:text-left max-w-xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
              The Established<span className="text-indigo-500"> Trader</span>
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

      {/* Features Section */}
      <section id="features" className="container bg-[#ccc] mx-auto my-16 px-4">
        <h2 className="text-3xl font-bold mb-8 text-[#892BFC] text-center">
          How It Works
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Card 1 */}

          <div className="bg-white border-r-[#892BFC]  shadow-md p-7 text-center hover:scale-105 transition">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3">
                <Home className="text-primary" size={28} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-2">
              1. Choose your Program
            </h3>
            <p className="text-gray-600">
              We offer 1-step evolutions for both futures & Forex.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border-r-[#892BFC] rounded-1xl shadow-md p-7 text-center hover:scale-105 transition">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3">
                <User className="text-primary" size={28} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-2">2. Pick an Account</h3>
            <p className="text-gray-600">
              Our Account size ranges from 5,000 - 200,000.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border-r-[#892BFC]  shadow-md p-7 text-center hover:scale-105 transition">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3">
                <ArrowRight className="text-primary" size={28} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-2">
              3. Trade & Meet the Objectives
            </h3>
            <p className="text-gray-600">
              Understand the loss limit rules & hit the 10% profit target.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border-r-[#892BFC] shadow-md p-7 text-center hover:scale-105 transition">
            <div className="flex justify-center mb-3">
              <span className="rounded-full bg-primary/10 p-3">
                <Home className="text-primary" size={28} />
              </span>
            </div>
            <h3 className="font-semibold text-xl mb-2">4. Go Live</h3>
            <p className="text-gray-600">
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

      {/* About/CTA Footer */}
      <footer
        id="about"
        className="bg-gradient-to-t from-[#d6bcfa]/60   py-12 mt-auto"
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
