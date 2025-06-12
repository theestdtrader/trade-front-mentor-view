
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQCategory = "all" | "funded-account" | "general" | "trading-rules";

interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  answer: string;
}

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<FAQCategory>("all");

  const faqData: FAQItem[] = [
    // Funded Account FAQs
    {
      id: "item-1",
      category: "funded-account",
      question: "What are the rules for the Funded Account?",
      answer: "The rules for the Funded Account are exactly the same as your Assessment account. However, with a Funded Account, there is no profit target."
    },
    {
      id: "item-5",
      category: "funded-account",
      question: "If I have a hard breach in my Funded Account and there are gains in the account, do I forfeit those gains?",
      answer: `If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains.

For example, if you have a $100,000 account and you grow that account to $110,000. Should you then have a hard breach we would close the account. Of the $10,000 in gains in your funded account, you would be paid your portion thereof.`
    },
    {
      id: "item-10",
      category: "funded-account",
      question: "Am I subject to any position limits?",
      answer: `The maximum position that you may open is determined by your available margin.

We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the Funded Account will be halted. We or the Broker reserve the right to refuse to accept any order.`
    },
    {
      id: "item-11",
      category: "funded-account",
      question: "Do we manipulate the pricing or executions you receive in your Funded Account?",
      answer: "No. We do not have any control over pricing from the liquidity provider or on the executions on your trades."
    },
    {
      id: "item-12",
      category: "funded-account",
      question: "How do I withdraw the gains in my Funded Account?",
      answer: `Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal.

When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.`
    },
    {
      id: "item-13",
      category: "funded-account",
      question: "How Long does it take to receive my Funded Account?",
      answer: `Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your "Know Your Customer" verification and your "Trader Agreement". Once both are completed and supporting documentation is provided, your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.

Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded account ranges from $25,000 to $300,000, depending on the Assessment level that you selected and successfully completed.`
    },
    
    // General Questions FAQs
    {
      id: "item-2",
      category: "general",
      question: "Can I use an Automated Strategy?",
      answer: "Subject to our policy on Prohibited Trading as described below, you can trade using an automated strategy."
    },
    {
      id: "item-6",
      category: "general",
      question: "How are taxes handled?",
      answer: "When trading a Funded Account for our firm, you are treated as an independent contractor. As a result, you are responsible for any and all taxes on your gains."
    },
    {
      id: "item-7",
      category: "general",
      question: "How will I see the charge on my Statement?",
      answer: "Charges come across in the name of dashboardanalytx.com."
    },
    {
      id: "item-8",
      category: "general",
      question: "What is the minimum age I must be to be part of your program?",
      answer: "You must be at least 18 years of age, or the applicable minimum legal age in your country, to purchase an assessment."
    },
    {
      id: "item-existing-6",
      category: "general",
      question: "Is there a breach for inactivity?",
      answer: "Yes. If you do not place a trade at least once every 30 days on your account, we will consider you inactive and your account will be breached."
    },
    
    // Trading Rules FAQs
    {
      id: "item-3",
      category: "trading-rules",
      question: "How do you calculate the Daily Loss Limit?",
      answer: `The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. Unlike other firms, we do NOT base our calculations on previous day equity since the balance only model allows you to scale profits without fear of losing your account. The Daily Stop compounds with the increase in your account.

Example: If your prior day's end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new-day (5pm EST) max loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000.`
    },
    {
      id: "item-4",
      category: "trading-rules",
      question: "How do you calculate the Max Drawdown (STATIC)?",
      answer: `Maximum drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Maximum Drawdown is set at a defined % of your starting balance. This % is static and does not trail.

If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains.`
    },
    {
      id: "item-9",
      category: "trading-rules",
      question: "Is there a breach for inactivity?",
      answer: "Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days."
    },
    {
      id: "item-existing-1",
      category: "trading-rules",
      question: "What is the difference between a Hard Breach and Soft Breach rule?",
      answer: `Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded Account.

Hard breach means that you violated either the Daily Loss Limit or Max Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded Account taken away.`
    },
    {
      id: "item-existing-2",
      category: "trading-rules",
      question: "How do you calculate the 4% Daily Loss Limit?",
      answer: "The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. Unlike other firms, we do NOT base our calculations on previous day equity since the balance only model allows you to scale profits without fear of losing your account. The Daily Stop compounds with the increase in your account."
    },
    {
      id: "item-existing-3",
      category: "trading-rules",
      question: "How do you calculate the 8% Max Drawdown?",
      answer: `Maximum drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Maximum Drawdown is set at 8% of your starting balance. This 8% is static and does not trail.

The Maximum Trailing Drawdown is initially set at 6% and trails (using CLOSED BALANCE - NOT equity) your account until you have achieved a 6% return in your account. Once you have achieved a 6% return the Maximum Trailing Drawdown no longer trails and is permanently locked in at your starting balance. This allows for more trading flexibility.`
    },
    {
      id: "item-existing-4",
      category: "trading-rules",
      question: "Why do I have to place a stop loss on trades?",
      answer: "We believe in sound risk management using stop losses. To that end, we require a stop loss on every trade. If you fail to place a stop loss at the time of placing the trade/order, we will close the trade. This is only a soft breach rule, so you can continue trading in your account."
    },
    {
      id: "item-existing-5",
      category: "trading-rules",
      question: "Can I hold positions over the weekend?",
      answer: "We require all trades to be closed by 3:45pm EST on Friday. Any trades left open after this time will automatically be closed. Note, this is only a soft breach and you will be able to continue trading once the markets reopen"
    }
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "funded-account", label: "Funded Account" },
    { id: "general", label: "General Questions" },
    { id: "trading-rules", label: "Trading Rules" }
  ];

  const filteredFAQs = selectedCategory === "all" 
    ? faqData 
    : faqData.filter(faq => faq.category === selectedCategory);

  return (
    <section className="container mx-auto px-4 py-16 relative z-10">
      <h2 className="text-3xl font-bold mb-12 text-[#892BFC] text-center">
        Trading Rules - Frequently Asked Questions
      </h2>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "outline"}
            className={`${
              selectedCategory === category.id
                ? "bg-[#892BFC] hover:bg-[#892BFC]/90 text-white"
                : "bg-white/5 hover:bg-white/10 text-white border-[#892BFC]/30 hover:border-[#892BFC]"
            }`}
            onClick={() => setSelectedCategory(category.id as FAQCategory)}
          >
            {category.label}
          </Button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {filteredFAQs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 px-6"
            >
              <AccordionTrigger className="text-white hover:text-[#892BFC] text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 whitespace-pre-line">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        
        {filteredFAQs.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            No FAQs found for the selected category.
          </div>
        )}

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
