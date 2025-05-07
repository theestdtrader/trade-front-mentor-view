
import { LogIn, Trophy, ChevronDown, Link, Menu } from "lucide-react";
import logo from "@/assets/logo.png";
import { Link as RouterLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/drawer";
import SignUpForm from "@/components/SignUpForm";
import LoginForm from "@/components/LoginForm";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <nav className="w-full bg-black/40 backdrop-blur-sm border-b border-white/10 fixed top-0 left-0 z-40">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Company Logo"
            className="h-8 md:h-10 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-white">
          <li className="hover:text-primary transition">
            <RouterLink to="/">Home</RouterLink>
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
          <li className="hover:text-primary transition">
            <RouterLink to="/affiliate">Affiliate</RouterLink>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        {isMobile && (
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={24} />
          </Button>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="flex justify-end p-4">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white"
              >
                <ChevronDown size={24} />
              </Button>
            </div>
            <ul className="flex flex-col items-center gap-6 font-medium text-white py-12">
              <li className="hover:text-primary transition text-lg">
                <RouterLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</RouterLink>
              </li>
              <li className="hover:text-primary transition text-lg">
                <a href="#daily-challenge" onClick={() => setIsMobileMenuOpen(false)}>Forex</a>
              </li>
              <li className="hover:text-primary transition text-lg">
                <a href="#weekly-challenge" onClick={() => setIsMobileMenuOpen(false)}>Future</a>
              </li>
              <li className="hover:text-primary transition text-lg">
                <a href="#pricing" onClick={() => setIsMobileMenuOpen(false)}>Competition</a>
              </li>
              <li className="hover:text-primary transition text-lg">
                <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>FAQs</a>
              </li>
              <li className="hover:text-primary transition text-lg">
                <RouterLink to="/affiliate" onClick={() => setIsMobileMenuOpen(false)}>Affiliate</RouterLink>
              </li>
              <li className="mt-6">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-primary gap-1"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogIn size={18} />
                  Login
                </Button>
              </li>
              <li>
                <SignUpForm />
              </li>
            </ul>
          </div>
        )}

        {/* Desktop Login/Signup */}
        <div className="hidden md:flex gap-3 items-center">
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
