import { Home, User, LogIn, Trophy, Image } from "lucide-react";
import { logo } from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  return (
    <nav className="w-full bg-black/80 backdrop-blur-md border-b  fixed top-0 left-0 z-40 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <div className="flex items-center gap-3">
          <span className="inline-block rounded-full bg-gradient-to-tr from-primary to-indigo-400 p-2">
            <Home size={24} className="text-white" />
          </span>

          <span className="font-extrabold text-2xl text-primary tracking-tight"></span>
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
                  <Trophy size={16} className="ml-1" />
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
                    Futures
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
          >
            <LogIn size={18} />
            Login
          </Button>
          <Button
            variant="default"
            size="sm"
            className="hidden md:inline-block px-5 rounded-full shadow-md bg-gradient-to-r from-primary to-indigo-500 text-white"
          >
            Take Action
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
