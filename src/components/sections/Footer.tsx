
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">TradeMentor</h3>
            <p className="text-sm text-gray-400 mt-1">Your path to trading excellence</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <div>
              <h4 className="text-sm font-semibold mb-2">Quick Links</h4>
              <ul className="text-xs text-gray-400">
                <li className="mb-1"><a href="/" className="hover:text-[#892BFC] transition">Home</a></li>
                <li className="mb-1"><a href="#about" className="hover:text-[#892BFC] transition">About</a></li>
                <li className="mb-1"><a href="#programs" className="hover:text-[#892BFC] transition">Programs</a></li>
                <li className="mb-1"><a href="#features" className="hover:text-[#892BFC] transition">Features</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Contact</h4>
              <ul className="text-xs text-gray-400">
                <li className="mb-1">Email: support@tradementor.com</li>
                <li className="mb-1">Phone: +1 (555) 123-4567</li>
                <li className="mb-1">Address: 123 Trading St, New York, NY</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold mb-2">Legal</h4>
              <ul className="text-xs text-gray-400">
                <li className="mb-1"><a href="#" className="hover:text-[#892BFC] transition">Privacy Policy</a></li>
                <li className="mb-1"><a href="#" className="hover:text-[#892BFC] transition">Terms of Service</a></li>
                <li className="mb-1"><a href="#" className="hover:text-[#892BFC] transition">Risk Disclosure</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-6 pt-6 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} TradeMentor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
