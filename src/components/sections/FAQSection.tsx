
import React from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
        Trading Rules - Frequently Asked Questions
      </h2>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="item-1"
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
          >
            <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
              What is the difference between a Hard Breach and Soft Breach
              rule?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Soft breach means that we will close all trades that have
              violated the rule. However, you can continue trading in your
              Assessment or Funded Account.
              <br />
              <br></br>
              Hard breach means that you violated either the Daily Loss Limit
              or Max Drawdown rule. Both rules constitute a hard breach. In
              the event you have a hard breach, you will fail the Assessment
              or have your Funded Account taken away.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-2"
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
          >
            <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
              How do you calculate the 4% Daily Loss Limit?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              The Daily Loss Limit is the maximum your account can lose in any
              given day. Daily Loss Limit is calculated using the previous day
              balance which resets at 5 PM EST. Unlike other firms, we do NOT
              base our calculations on previous day equity since the balance
              only model allows you to scale profits without fear of losing
              your account. The Daily Stop compounds with the increase in your
              account.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-3"
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
          >
            <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
              How do you calculate the 8% Max Drawdown?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Maximum drawdown is the maximum your account can drawdown before
              you would hard breach your account. When you open the account,
              your Maximum Drawdown is set at 8% of your starting balance.
              This 8% is static and does not trail.<br></br> <br></br>The
              Maximum Trailing Drawdown is initially set at 6% and trails
              (using CLOSED BALANCE - NOT equity) your account until you have
              achieved a 6% return in your account. Once you have achieved a
              6% return the Maximum Trailing Drawdown no longer trails and is
              permanently locked in at your starting balance. This allows for
              more trading flexibility.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="item-4"
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
          >
            <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
              Why do I have to place a stop loss on trades?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              We believe in sound risk management using stop losses. To that
              end, we require a stop loss on every trade. If you fail to place
              a stop loss at the time of placing the trade/order, we will
              close the trade. This is only a soft breach rule, so you can
              continue trading in your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
          >
            <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
              Can I hold positions over the weekend?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              We require all trades to be closed by 3:45pm EST on Friday. Any
              trades left open after this time will automatically be closed.
              Note, this is only a soft breach and you will be able to
              continue trading once the markets reopen
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
          >
            <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
              Is there a breach for inactivity?
            </AccordionTrigger>
            <AccordionContent className="text-gray-300">
              Yes. If you do not place a trade at least once every 30 days on
              your account, we will consider you inactive and your account
              will be breached.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex justify-center mb-8 mt-3">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border-[#892BFC]/30 hover:border-[#892BFC]"
            onClick={() => window.open("/faq-document.pdf", "_blank")}
          >
            <FileText className="w-5 h-5" />
            Download the Complete Guidelines
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
