import React from "react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              The Established Trader
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering traders with the resources and support they need to
              succeed in the financial markets.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-[#892BFC] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-[#892BFC] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#programs"
                  className="hover:text-[#892BFC] transition-colors"
                >
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#payouts"
                  className="hover:text-[#892BFC] transition-colors"
                >
                  Payouts
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-[#892BFC] transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#892BFC] transition-colors">
                  Affiliate
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: support@The Established Trader.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Hours: Mon-Fri, 9am-5pm EST</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and offers.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-md px-3 py-2 text-sm bg-gray-800 border border-gray-700 text-white flex-grow focus:outline-none focus:ring-1 focus:ring-[#892BFC]"
              />
              <Button size="sm" className="bg-[#892BFC] hover:bg-[#892BFC]/80">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} The Established Trader. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a href="#" className="hover:text-[#892BFC]">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#892BFC]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#892BFC]">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
