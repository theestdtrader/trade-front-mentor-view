import React from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              The Established Trader Disclaimer
            </h3>
            <p className="text-gray-400 text-sm">
              The Established Trader is an affiliate of Forest Park FX LTD.
              Forest Park FX LTD offers fee-based simulated trading assessments
              for Potential Traders. All funding assessments are provided by
              Forest Park FX LTD and all assessment fees are paid to Forest Park
              FX LTD. If you qualify for a Funded Account, you will be required
              to enter into a Trader Agreement with Forest Park FX LTD. Forest
              Park FX LTD does not provide any trading education or other
              services.
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
                  href="#faqs"
                  className="hover:text-[#892BFC] transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@theestdtrader.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with our latest news and offers.
            </p>

            <div className="flex gap-4 items-center">
              <a
                href="https://www.instagram.com/estdtrader?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://x.com/TheESTDtrader"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} The Established Trader. All rights
            reserved.
          </p>
          <div className="flex justify-center gap-4 mt-4">
            <a
              href="https://dashboardanalytix.com/client-terms-and-policies/"
              className="hover:text-[#892BFC]"
            >
              Terms of Service
            </a>
            <a
              href="https://dashboardanalytix.com/client-terms-and-policies/"
              className="hover:text-[#892BFC]"
            >
              Privacy Policy
            </a>
            <a
              href="https://dashboardanalytix.com/client-terms-and-policies/"
              className="hover:text-[#892BFC]"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
