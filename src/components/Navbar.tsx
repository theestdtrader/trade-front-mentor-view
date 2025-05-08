import { LogIn, Trophy, ChevronDown, Link, Menu, X } from "lucide-react";
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
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

const Navbar = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

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

        {/* Mobile Menu with Black Background and Animation */}
        {isMobile && (
          <div
            className={`fixed inset-0 bg-black backdrop-blur-sm z-50 transition-all duration-300 ease-in-out ${
              isMobileMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="flex justify-end p-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary transition-colors"
              >
                <X size={24} />
              </Button>
            </div>
            <ul className="flex flex-col items-center gap-6 bg-black font-medium text-white py-8">
              {[
                { title: "Home", path: "/" },
                { title: "Forex", path: "#daily-challenge" },
                { title: "Future", path: "#weekly-challenge" },
                { title: "Competition", path: "#pricing" },
                { title: "FAQs", path: "#about" },
                { title: "Affiliate", path: "/affiliate" },
              ].map((item, i) => (
                <li
                  key={item.title}
                  className="hover:text-primary transition text-lg transform hover:scale-105"
                  style={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen
                      ? "translateY(0)"
                      : "translateY(20px)",
                    transition: `all 0.3s ease-in-out ${i * 0.1}s`,
                  }}
                >
                  {item.path.startsWith("#") ? (
                    <a
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="nav-link-hover"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <RouterLink
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="nav-link-hover"
                    >
                      {item.title}
                    </RouterLink>
                  )}
                </li>
              ))}
              <li
                className="mt-8"
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `all 0.3s ease-in-out 0.6s`,
                }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:text-primary gap-1 hover:scale-105 transition-all"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <LogIn size={18} />
                  Login
                </Button>
              </li>
              <li
                style={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `all 0.3s ease-in-out 0.7s`,
                }}
              >
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
            className="text-white hover:text-primary gap-1 transition-all hover:scale-105"
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
