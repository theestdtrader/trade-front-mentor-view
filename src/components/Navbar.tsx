
import { LogIn, Trophy, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LoginForm";
import { useState } from "react";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  
  return (
    <nav className="w-full bg-black/40 backdrop-blur-sm border-b border-white/10 fixed top-0 left-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Company Logo"
            className="h-10 w-auto object-contain"
          />
        </div>
        <ul className="hidden md:flex gap-8 items-center font-medium text-white">
          <li className="hover:text-primary transition">
            <a href="#features">Home</a>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-1 hover:text-primary transition bg-transparent border-none p-0">
                  Programs
                  <ChevronDown size={16} className="ml-1" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="z-50 bg-white shadow-lg border rounded-md mt-2 w-40"
              >
                <DropdownMenuItem>
                  <a href="#daily-challenge" className="w-full block">
                    Forex
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#weekly-challenge" className="w-full block">
                    Future
                  </a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li>
          <li className="hover:text-primary transition">
            <a href="#pricing">Competition</a>
          </li>
          <li className="hover:text-primary transition">
            <a href="#about">FAQs</a>
          </li>
        </ul>
        <div className="flex gap-3 items-center">
          <Button
            variant="ghost"
            size="sm"
            className="text-white hover:text-primary gap-1"
            onClick={() => setIsLoginOpen(true)}
          >
            <LogIn size={18} />
            Login
          </Button>
          <div className="hidden md:block">
            <SignUpForm />
          </div>
          
          <LoginForm isOpen={isLoginOpen} onOpenChange={setIsLoginOpen} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
