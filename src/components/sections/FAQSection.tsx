import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Simplified categories
const categories = [
  { id: "all", label: "All Questions" },
  { id: "funded-account", label: "Funded Account" },
  { id: "general", label: "General Questions" },
  { id: "trading-rules", label: "Trading Rules" },
];

// Moved FAQ data to a separate constant for clarity and removed duplicates
const faqData = [
  {
    id: "faq-1",
    category: "funded-account",
    question: "What are the rules for the Funded Account?",
    answer:
      "The rules for the Funded Account are exactly the same as your Assessment account. However, with a Funded Account, there is no profit target.",
  },
  {
    id: "faq-2",
    category: "general",
    question: "Can I use an Automated Strategy?",
    answer:
      "Subject to our policy on Prohibited Trading as described below, you can trade using an automated strategy.",
  },
  {
    id: "faq-3",
    category: "trading-rules",
    question: "How do the phases work?",
    answer:
      "Phase 1 begins once you purchase an account. Once you hit your profit target; while maintaining a 25% consistency, you will be able to request a payout and then advance to the next Phase. At each new Phase your account will begin with a fresh starting balance.",
  },
  {
    id: "faq-4",
    category: "trading-rules",
    question: "What is the Daily Loss Limit?",
    answer:
      "The Daily Loss Limit is the maximum your account can lose in any given day. It is based on your prior day's balance at 5 PM EST and is fixed throughout the next trading day.",
  },
  {
    id: "faq-5",
    category: "funded-account",
    question: "How do I withdraw the gains in my Funded Account?",
    answer:
      "Traders can request a withdrawal in their dashboard every 30 days. Once approved, the payout will be processed through the available withdrawal options.",
  },
];

const FAQSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredFAQs =
    selectedCategory === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

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
            onClick={() => setSelectedCategory(category.id)}
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
