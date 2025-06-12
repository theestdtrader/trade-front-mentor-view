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
      answer:
        "The rules for the Funded Account are exactly the same as your Assessment account. However, with a Funded Account, there is no profit target.",
    },
    {
      id: "item-5",
      category: "funded-account",
      question:
        "If I have a hard breach in my Funded Account and there are gains in the account, do I forfeit those gains?",
      answer: `If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains.

For example, if you have a $100,000 account and you grow that account to $110,000. Should you then have a hard breach we would close the account. Of the $10,000 in gains in your funded account, you would be paid your portion thereof.`,
    },
    {
      id: "item-10",
      category: "funded-account",
      question: "Am I subject to any position limits?",
      answer: `The maximum position that you may open is determined by your available margin.

We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the Funded Account will be halted. We or the Broker reserve the right to refuse to accept any order.`,
    },
    {
      id: "item-11",
      category: "funded-account",
      question:
        "Do we manipulate the pricing or executions you receive in your Funded Account?",
      answer:
        "No. We do not have any control over pricing from the liquidity provider or on the executions on your trades.",
    },
    {
      id: "item-12",
      category: "funded-account",
      question: "How do I withdraw the gains in my Funded Account?",
      answer: `Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal.

When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.`,
    },
    {
      id: "item-13",
      category: "funded-account",
      question: "How Long does it take to receive my Funded Account?",
      answer: `Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your "Know Your Customer" verification and your "Trader Agreement". Once both are completed and supporting documentation is provided, your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.`,
    },
    {
      id: "item-14",
      category: "funded-account",
      question:
        "Once I pass the Assessment am I provided with a demo or live account?",
      answer: `Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a Funded Account use of notional funding does not impact your trading conditions in any way.`,
    },
    {
      id: "item-15",
      category: "funded-account",
      question:
        "When can I withdraw the gains in my Funded Account and how does that affect my maximum drawdown?",
      answer:
        "Your first withdrawal can be requested at any time. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains, and your max drawdown will remain unaffected. The drawdown does not reset when you request a withdrawal.",
    },
    {
      id: "item-16",
      category: "funded-account",
      question: "Who is the counterparty to my trades?",
      answer:
        "For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by arm’s length third parties. This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.",
    },

    // General Questions FAQs
    {
      id: "item-2",
      category: "general",
      question: "Can I use an Automated Strategy?",
      answer:
        "Subject to our policy on Prohibited Trading as described below, you can trade using an automated strategy.",
    },
    {
      id: "item-6",
      category: "general",
      question: "How are taxes handled?",
      answer:
        "When trading a Funded Account for our firm, you are treated as an independent contractor. As a result, you are responsible for any and all taxes on your gains.",
    },
    {
      id: "item-9",
      category: "general",
      question: "Can I trade during News Events?",
      answer:
        "Opening a position within 3 minutes before or after a News Event is prohibited. Any traders identified as having opened a position during a News Event are subject to having that position closed and the associated P&L removed from their account, having the leverage on their account reduced or having their account breached altogether. The Company has sole and absolute discretion in determining what constitutes a News Event. This rule is intended to protect the integrity of our program and is not meant to penalize traders who inadvertently trade through a news event.",
    },
    {
      id: "item-10",
      category: "general",
      question:
        "Do I have to use one of your accounts for the Assessment or can I use my own?",
      answer:
        "We have risk management software that is synced with the accounts we create. This allows us to analyze your performance in real time for achievements or rule violations. As such, you must use an account that we provide to you.",
    },
    {
      id: "item-11",
      category: "general",
      question: "Do your accounts charge commissions?",
      answer:
        "Funded accounts receive the same pricing and commissions as charged by our Liquidity Provider to other, self-funded, retail trading accounts.",
    },
    {
      id: "item-16",
      category: "general",
      question: "How are affiliates credited?",
      answer:
        "Affiliates are credited for referrals when a user creates an account using a link or discount code provided by the Affiliate.",
    },
    {
      id: "item-7",
      category: "general",
      question: "How will I see the charge on my Statement?",
      answer: "Charges come across in the name of dashboardanalytx.com.",
    },
    {
      id: "item-8",
      category: "general",
      question: "What is the minimum age I must be to be part of your program?",
      answer:
        "You must be at least 18 years of age, or the applicable minimum legal age in your country, to purchase an assessment.",
    },
    {
      id: "item-18",
      category: "general",
      question: "What are the trading hours?",
      answer:
        "Trading hours are generally set by the Liquidity Provider, unless set by our rules. We do not have any control over the trading hours. You can see the trading hours for each product by using the following methods: DXtrade – Right click symbol, select “Instrument Info” MatchTrader – Click symbol to expand, select “Info” cTrader – Navigate to Symbol Window, scroll down to see “Market Hours” for selected symbol",
    },
    {
      id: "item-20",
      category: "general",
      question: "What Countries are accepted?",
      answer:
        "Subject to compliance with applicable laws and regulations, traders from all countries, excluding OFAC listed countries, can take part in our program, unless otherwise limited at the Company’s discretion.",
    },
    {
      id: "item-21",
      category: "general",
      question: "What is the leverage?",
      answer:
        "We offer up to 50:1 leverage on Forex and Metals, up to 10:1 leverage on Indices, up to 5:1 leverage on Oil and up to 2:1 leverage on Cryptocurrencies.",
    },
    {
      id: "item-22",
      category: "general",
      question: "What is the policy on Prohibited Trading Activity?",
      answer:
        " You are prohibited from using any trading strategy expressly prohibited by the Company or its Liquidity Providers. Prohibited Trading includes but is not limited to:\n" +
        "  - Exploiting errors or latency in the pricing and/or platform(s) provided by the Liquidity Provider.\n" +
        "  - Utilizing non-public and/or insider information.\n" +
        "  - Front-running of trades placed elsewhere.\n" +
        "  - Trading in any way that jeopardizes the relationship between the Company and a Liquidity Provider or may result in trade cancellations.\n" +
        "  - Trading in any way that creates regulatory issues for the Liquidity Provider.\n" +
        "  - Utilizing third-party strategies, off-the-shelf strategies, or strategies marketed to pass challenge accounts.\n" +
        "  - Using one strategy to pass an assessment and switching to a different strategy in a funded account (as determined by the Company and Prop Account, LLC).\n" +
        "  - Attempting to arbitrage an assessment account with another account (with the Company or any third-party), as determined by the Company.\n" +
        "  - Opening a position within 3 minutes before or after a News Event. If this occurs:\n" +
        "    - The position may be closed.\n" +
        "    - Associated P&L may be removed.\n" +
        "    - Account leverage may be reduced.\n" +
        "    - The account may be breached.\n" +
        "    - The Company has sole discretion in defining what constitutes a News Event.\n" +
        "- If the Company detects Prohibited Trading:\n" +
        "  - Participation in the program will be terminated.\n" +
        "  - Any fees paid may be forfeited.\n" +
        "  - Before receiving a funded account, trading activity will be reviewed by the Company and the Liquidity Provider.\n" +
        "  - If deemed Prohibited Trading, the Trader will not receive a funded account.\n" +
        "- The Company reserves the right to disallow or block any Trader from participating in the program at its sole and absolute discretion.\n" +
        "- For full details, review the Terms and Conditions: https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396",
    },
    {
      id: "item-43",
      category: "general",
      question: "What Platform can I trade on?",
      answer:
        "Our technology is currently integrated with DXtrade, MatchTrader & cTrader platforms via GooeyTrade.",
    },
    {
      id: "item-23",
      category: "general",
      question: "What products can I trade?",
      answer:
        "You can trade any products streamed by the Liquidity Provider into the available platforms, as such products may change from time to time. This includes FX pairs and CFD Indices, Commodities, Metals, and Cryptocurrencies.",
    },
    {
      id: "item-24",
      category: "general",
      question: "Where do I track the progress of my account?",
      answer:
        "Upon purchasing an Assessment, you will receive access to a trader dashboard where you can monitor your Assessment and Funded Accounts. The dashboard is updated every time we calculate metrics, which occurs roughly every 60 seconds. It is your responsibility to monitor your breach levels.",
    },
    {
      id: "item-28",
      category: "general",
      question:
        "How many Assessments and/or Funded accounts may I have active at one time",
      answer:
        "Evaluation Limits:\n" +
        "● You are allowed to take only one evaluation of a specific account size and a specific plan tier at a time across all trading platforms.\n" +
        "● Example: You can have one 100k One Step Plan and one 100k Two Step Plan active simultaneously. However, you cannot have one 100k One Step Plan on DXTrade and another 100k One Step Plan on cTrader, or 2+ 100k 1 Step plans on any combination of platforms.\n" +
        "Maximum Assessment Limits:\n" +
        "● A maximum of $1 million in active evaluation plans per person is permitted. This can be composed of multiple assessments, provided that none are the same account size and are within the same Step framework as described above.\n" +
        "Maximum Funded Limits:\n" +
        "● A maximum of $1 million in active funded plans per person is permitted.\n" +
        "● If a customer passes multiple assessments and has 2 active funded accounts of the same account size, they will have 2 options:\n" +
        "1. Only have one funded account of that size open at a time and wait for the account to be breached before making the other funded account active.\n" +
        "2. If no trading has taken place in either account, the customer can opt to combine the 2 accounts into a s ingleaccount of double the size.\n" +
        "Compounding Limits:\n" +
        "● There are no limits on compounding.\n" +
        "● You can start with up to $1 million of initial funding and grow the account to any balance you desire, including $10 million, $20 million, and beyond.",
    },

    // Trading Rules FAQs
    {
      id: "item-30",
      category: "trading-rules",
      question: "What is 1 lot equal to on the Trading Platform?",
      answer:
        "Forex: 1 lot = $100k notional\n" +
        "● Index: 1 lot = 1 Contract\n" +
        "Exceptions:\n" +
        "● SPX500: 1 lot = 10 contracts\n" +
        "● JPN225: 1 lot = 500 contracts\n" +
        "● Cryptos: 1 lot = 1 coin\n" +
        "● Silver: 1 lot = 5000 ounces\n" +
        "● Gold: 1 lot = 100 ounces\n" +
        "● Oil: 1 lot = 100 barrels",
    },
    {
      id: "item-31",
      category: "trading-rules",
      question: "What is 1 lot equal to on the Trading Platform?",
      answer:
        "Forex: 1 lot = $100k notional\n" +
        "● Index: 1 lot = 1 Contract\n" +
        "Exceptions:\n" +
        "● SPX500: 1 lot = 10 contracts\n" +
        "● JPN225: 1 lot = 500 contracts\n" +
        "● Cryptos: 1 lot = 1 coin\n" +
        "● Silver: 1 lot = 5000 ounces\n" +
        "● Gold: 1 lot = 100 ounces\n" +
        "● Oil: 1 lot = 100 barrels",
    },
    {
      id: "item-existing-6",
      category: "trading-rules",
      question: "Is there a breach for inactivity?",
      answer:
        "Yes. If you do not place a trade at least once every 30 days on your account, we will consider you inactive and your account will be breached.",
    },
    {
      id: "item-3",
      category: "trading-rules",
      question: "How do you calculate the Daily Loss Limit?",
      answer: `The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. Unlike other firms, we do NOT base our calculations on previous day equity since the balance only model allows you to scale profits without fear of losing your account. The Daily Stop compounds with the increase in your account.

Example: If your prior day's end of day balance (5pm EST) was $100,000, your account would violate the daily stop loss limit if your equity reached $95,000 during the day. If your floating equity is +$5,000 on a $100,000 account, your new-day (5pm EST) max loss is based on your balance from the previous day ($100,000). So, your daily loss limit would still be $95,000.`,
    },
    {
      id: "item-4",
      category: "trading-rules",
      question: "How do you calculate the Max Drawdown (STATIC)?",
      answer: `Maximum drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Maximum Drawdown is set at a defined % of your starting balance. This % is static and does not trail.

If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains.`,
    },
    {
      id: "item-9",
      category: "trading-rules",
      question: "Is there a breach for inactivity?",
      answer:
        "Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days.",
    },
    {
      id: "item-existing-1",
      category: "trading-rules",
      question:
        "What is the difference between a Hard Breach and Soft Breach rule?",
      answer: `Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded Account.

Hard breach means that you violated either the Daily Loss Limit or Max Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded Account taken away.`,
    },
    {
      id: "item-existing-2",
      category: "trading-rules",
      question: "How do you calculate the 4% Daily Loss Limit?",
      answer:
        "The Daily Loss Limit is the maximum your account can lose in any given day. Daily Loss Limit is calculated using the previous day balance which resets at 5 PM EST. Unlike other firms, we do NOT base our calculations on previous day equity since the balance only model allows you to scale profits without fear of losing your account. The Daily Stop compounds with the increase in your account.",
    },
    {
      id: "item-existing-3",
      category: "trading-rules",
      question: "How do you calculate the 8% Max Drawdown?",
      answer: `Maximum drawdown is the maximum your account can drawdown before you would hard breach your account. When you open the account, your Maximum Drawdown is set at 8% of your starting balance. This 8% is static and does not trail.

The Maximum Trailing Drawdown is initially set at 6% and trails (using CLOSED BALANCE - NOT equity) your account until you have achieved a 6% return in your account. Once you have achieved a 6% return the Maximum Trailing Drawdown no longer trails and is permanently locked in at your starting balance. This allows for more trading flexibility.`,
    },
    {
      id: "item-existing-4",
      category: "trading-rules",
      question: "Why do I have to place a stop loss on trades?",
      answer:
        "We believe in sound risk management using stop losses. To that end, we require a stop loss on every trade. If you fail to place a stop loss at the time of placing the trade/order, we will close the trade. This is only a soft breach rule, so you can continue trading in your account.",
    },
    {
      id: "item-existing-5",
      category: "trading-rules",
      question: "Can I hold positions over the weekend?",
      answer: "Positions can be held over the weekend",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "funded-account", label: "Funded Account" },
    { id: "general", label: "General Questions" },
    { id: "trading-rules", label: "Trading Rules" },
  ];

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
