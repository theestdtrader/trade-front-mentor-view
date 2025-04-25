
import { Home, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="w-full bg-white/80 backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-40 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-gradient-to-tr from-primary to-indigo-400 p-2">
            <Home size={24} className="text-white" />
          </span>
          <span className="font-extrabold text-2xl text-primary tracking-tight">TradeMentor</span>
        </div>
        <ul className="hidden md:flex gap-8 items-center font-medium text-gray-700">
          <li className="hover:text-primary transition"><a href="#features">Features</a></li>
          <li className="hover:text-primary transition"><a href="#pricing">Pricing</a></li>
          <li className="hover:text-primary transition"><a href="#about">About</a></li>
        </ul>
        <div className="flex gap-3 items-center">
          <Button variant="ghost" size="sm" className="text-gray-700 hover:text-primary gap-1">
            <LogIn size={18} />
            Login
          </Button>
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-block px-5 rounded-full shadow-md bg-gradient-to-r from-primary to-indigo-500 text-white"
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
