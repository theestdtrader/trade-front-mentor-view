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
      id: "item-2",
      category: "funded-account",
      question:
        "If I have a hard breach in my Funded Account and there are gains in the account, do I forfeit those gains?",
      answer: `If you have gains in your funded account at the time of a hard breach, you will still receive your portion of those gains.\n\n For example, if you have a $100,000 account and you grow that account to $110,000. Should you then have a hard breach we would close the account. Of the $10,000 in gains in your funded account, you would be paid your portion thereof.`,
    },
    {
      id: "item-3",
      category: "funded-account",
      question: "Am I subject to any position limits?",
      answer:
        `The maximum position that you may open is determined by your available margin.\n\n` +
        `We reserve the right to increase the margin requirement, limit the number of open positions you may enter or maintain in the Funded Account at any time, and to revise in response to market conditions the drawdown levels at which trading in the Funded Account will be halted. We or the Broker reserve the right to refuse to accept any order.`,
    },
    {
      id: "item-4",
      category: "funded-account",
      question:
        "Do we manipulate the pricing or executions you receive in your Funded Account?",
      answer:
        "No. We do not have any control over pricing from the liquidity provider or on the executions on your trades.",
    },
    {
      id: "item-5",
      category: "funded-account",
      question: "How do I withdraw the gains in my Funded Account?",
      answer:
        `Traders can request a withdrawal of the gains in their funded account at any time in their trader dashboard, but no more frequently than once per thirty (30) days. So, if you make gain in your funded account, you can request a withdrawal.\n\n` +
        `When you are ready to withdraw the gains from your funded account, click the Withdraw Profits button in your trader dashboard and enter the amount to withdraw. All such gains are distributed via the available outbound payment solutions offered from time to time. Once your withdrawal request is approved, we will pay the monies owed to you. We reserve the right to change the withdrawal methods and options at any time.`,
    },
    {
      id: "item-6",
      category: "funded-account",
      question: "How Long does it take to receive my Funded Account?",
      answer: `Upon passing your Assessment, you will receive an email with instructions on how to access and complete both your "Know Your Customer" verification and your "Trader Agreement". Once both are completed and supporting documentation is provided, your Funded Account will be created, funded and issued to you typically within 24-48 business hours. You will receive a confirmation email once this account is being enabled.`,
    },
    {
      id: "item-7",
      category: "funded-account",
      question:
        "Once I pass the Assessment am I provided with a demo or live account?",
      answer: `Once you pass the Assessment, we provide you with a funded account, backed by our capital. The capital in your funded Account is notional and may not match the amount of capital on deposit with the Liquidity Provider. A Funded Account is notionally funded when actual funds in the account (i.e., the equity in a Funded Account represented by the amount of capital) differs from the nominal account size (i.e., the size of the Funded Account that establishes the initial account value and level of trading). Notional funds are the difference between nominal account size and actual capital in a Funded Account use of notional funding does not impact your trading conditions in any way.`,
    },
    {
      id: "item-8",
      category: "funded-account",
      question:
        "When can I withdraw the gains in my Funded Account and how does that affect my maximum drawdown?",
      answer:
        "Your first withdrawal can be requested at any time, subject to an 80/20 profit split. Thereafter, you can request a withdrawal of the gains in your account every 30 days. When a withdrawal is approved, we will also withdraw our share of the gains. The drawdown does not reset when you request a withdrawal.
Example: You have taken an account from $100,000 to $120,000. You then request a withdrawal of $16,000. In this scenario, you will receive $12,800 and we would retain $3,200. This would also take the balance of the account down to $104,000, and your Maximum Drawdown will lock at the starting balance of the account unless you have purchased the add-on to disable it. If you withdraw all of your profits you will violate the Maximum Drawdown rule and lose the account.",
    },
    {
      id: "item-9",
      category: "funded-account",
      question: "Who is the counterparty to my trades?",
      answer:
        "For purposes of managing risk and minimizing transaction costs, we may offset or negate market risk and act as the direct counterparty to certain trades initiated in the Account. Such trades are executed at prices provided by arm’s length third parties. This framework is intended to ensure you receive real market execution on your trades, while simultaneously allowing us to manage risk dynamically by routing existing positions or future orders to third parties for execution as we deem appropriate. We believe that such real market execution and dynamic risk management would not be possible or as cost-effective if trades were executed in simulated accounts. Regardless of whether we act as counterparty to your trades, the gain or loss on your funded account is not calculated differently. However, when we act as the counterparty to your trades, there is an inherent potential conflict of interest because your trades do not result in net gain or loss to us, as your trades would if we were not the direct counterparty.",
    },

    // General Questions FAQs
    {
      id: "item-10",
      category: "general",
      question: "Can I use an Automated Strategy?",
      answer:
        "Subject to our policy on Prohibited Trading as described below, you can trade using an automated strategy.",
    },
    {
      id: "item-11",
      category: "general",
      question: "How are taxes handled?",
      answer:
        "When trading a Funded Account for our firm, you are treated as an independent contractor. As a result, you are responsible for any and all taxes on your gains.",
    },
    {
      id: "item-12",
      category: "general",
      question: "Can I trade during News Events?",
      answer:
        "Opening a position within 3 minutes before or after a News Event is prohibited. Any traders identified as having opened a position during a News Event are subject to having that position closed and the associated P&L removed from their account, having the leverage on their account reduced or having their account breached altogether. The Company has sole and absolute discretion in determining what constitutes a News Event. This rule is intended to protect the integrity of our program and is not meant to penalize traders who inadvertently trade through a news event.",
    },
    {
      id: "item-13",
      category: "general",
      question:
        "Do I have to use one of your accounts for the Assessment or can I use my own?",
      answer:
        "We have risk management software that is synced with the accounts we create. This allows us to analyze your performance in real time for achievements or rule violations. As such, you must use an account that we provide to you.",
    },
    {
      id: "item-14",
      category: "general",
      question: "Do your accounts charge commissions?",
      answer:
        "Funded accounts receive the same pricing and commissions as charged by our Liquidity Provider to other, self-funded, retail trading accounts.",
    },
    {
      id: "item-15",
      category: "general",
      question: "How are affiliates credited?",
      answer:
        "Affiliates are credited for referrals when a user creates an account using a link or discount code provided by the Affiliate.",
    },
    {
      id: "item-16",
      category: "general",
      question: "How will I see the charge on my Statement?",
      answer: "Charges come across in the name of dashboardanalytx.com.",
    },
    {
      id: "item-17",
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
      id: "item-19",
      category: "general",
      question: "What Countries are accepted?",
      answer:
        "Subject to compliance with applicable laws and regulations, traders from all countries, excluding OFAC listed countries, can take part in our program, unless otherwise limited at the Company’s discretion.",
    },
    {
      id: "item-20",
      category: "general",
      question: "What is the leverage?",
      answer:
        "We offer up to 50:1 leverage on Forex and Metals, up to 10:1 leverage on Indices, up to 5:1 leverage on Oil and up to 2:1 leverage on Cryptocurrencies.",
    },
    {
      id: "item-21",
      category: "general",
      question: "What is the policy on Prohibited Trading Activity?",
      answer:
        " You are prohibited from using any trading strategy expressly prohibited by the Company or its Liquidity Providers. Prohibited Trading includes but is not limited to:" +
        "  - Exploiting errors or latency in the pricing and/or platform(s) provided by the Liquidity Provider.\n\n" +
        "  - Utilizing non-public and/or insider information.\n\n" +
        "  - Front-running of trades placed elsewhere.\n\n" +
        "  - Trading in any way that jeopardizes the relationship between the Company and a Liquidity Provider or may result in trade cancellations.\n\n" +
        "  - Trading in any way that creates regulatory issues for the Liquidity Provider.\n\n" +
        "  - Utilizing third-party strategies, off-the-shelf strategies, or strategies marketed to pass challenge accounts.\n\n" +
        "  - Using one strategy to pass an assessment and switching to a different strategy in a funded account (as determined by the Company).\n\n" +
        "  - Attempting to arbitrage an assessment account with another account (with the Company or any third-party), as determined by the Company.\n\n" +
        "  - Opening a position within 3 minutes before or after a News Event. If this occurs:\n\n" +
        "    - The position may be closed.\n\n" +
        "    - Associated P&L may be removed.\n\n" +
        "    - Account leverage may be reduced.\n\n" +
        "    - The account may be breached.\n\n" +
        "    - The Company has sole discretion in defining what constitutes a News Event.\n\n" +
        "- If the Company detects Prohibited Trading:\n\n" +
        "  - Participation in the program will be terminated.\n\n" +
        "  - Any fees paid may be forfeited.\n\n" +
        "  - Before receiving a funded account, trading activity will be reviewed by the Company and the Liquidity Provider.\n\n" +
        "  - If deemed Prohibited Trading, the Trader will not receive a funded account.\n\n" +
        "- The Company reserves the right to disallow or block any Trader from participating in the program at its sole and absolute discretion.\n\n" +
        "- For full details, review the Terms and Conditions: https://dashboardanalytix.com/client-terms-and-policies/?v=3acf83834396",
    },
    {
      id: "item-22",
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
      id: "item-25",
      category: "general",
      question:
        "How many Assessments and/or Funded accounts may I have active at one time",
      answer:
        "Evaluation Limits:\n\n" +
        "● You are allowed to take only one evaluation of a specific account size and a specific plan tier at a time across all trading platforms.\n\n" +
        "● Example: You can have one 100k One Step Plan and one 100k Two Step Plan active simultaneously. However, you cannot have one 100k One Step Plan on DXTrade and another 100k One Step Plan on cTrader, or 2+ 100k 1 Step plans on any combination of platforms.\n\n" +
        "Maximum Assessment Limits:\n\n" +
        "● A maximum of $1 million in active evaluation plans per person is permitted. This can be composed of multiple assessments, provided that none are the same account size and are within the same Step framework as described above.\n\n" +
        "Maximum Funded Limits:\n\n" +
        "● A maximum of $1 million in active funded plans per person is permitted.\n\n" +
        "● If a customer passes multiple assessments and has 2 active funded accounts of the same account size, they will have 2 options:\n\n" +
        "1. Only have one funded account of that size open at a time and wait for the account to be breached before making the other funded account active.\n\n" +
        "2. If no trading has taken place in either account, the customer can opt to combine the 2 accounts into a s ingleaccount of double the size.\n\n" +
        "Compounding Limits:\n\n" +
        "● There are no limits on compounding.\n\n" +
        "● You can start with up to $1 million of initial funding and grow the account to any balance you desire, including $10 million, $20 million, and beyond.",
    },

    // Futures
    {
      id: "item-54",
      category: "trading-rules",
      question: "How do the phases work?",
      answer:
        " Phase 1 begins once you purchase an account. Once you hit your profit target; while maintaining a 25% consistency, you will be able to request a payout and then advance to the next Phase.\n\n" +
        " At each new Phase, your account will begin with a fresh starting balance.",
    },
         {
      id: "item-53",
      category: "trading-rules",
      question: "How does the Live Funded account phase differ from Phase 1-4?",
      answer:
        "The Live Funded Futures account operates under a different set of rules compared to Phases 1-4. Once you reach this level, the following changes apply:\n\n\n\n" +
        " • Risk Parameters: The Max Loss is capped at 50% of your starting balance. There are no longer any profit targets, consistency rules, or time limits.\n\n\n\n" +
        " • Inactivity Rule: You must place at least one executed trade every 7 calendar days to retain your account.\n\n\n\n" +
        " • Live Market Conditions: You are now trading in a live environment, which means you may encounter real-market factors such as slippage, partial fills, and varying liquidity.\n\n\n\n" +
        "• Profit Split: You no longer have a fixed payout and are eligible to keep 90% of your profits in the Live Funded Futures phase.",
    },
    {
      id: "item-52",
      category: "trading-rules",
      question: "How do I withdraw my Payout once I complete each Phase?",
      answer:
        "If you achieve the profit target for your current phase and meet the consistency requirements, you’ll be eligible to request that phase’s payout. This payout must be completed before your account is upgraded to the next phase.",
    },
    {
      id: "item-51",
      category: "trading-rules",
      question:
        "If I have a breach in my Live Funded Account and there are gains in the account, do I forfeit those gains?",
      answer:
        "If you have gains in your Live Funded Futures (Phase 5) account at the time of a breach, you will still receive your portion of those gains.",
    },
    {
      id: "item-50",
      category: "trading-rules",
      question: "Am I subject to any position limits?",
      answer:
        "The total number of contracts you can hold at one time is limited by both your account size and the exchange margin requirements for each product. Your account balance must be sufficient to cover the required margin for all open positions. Refer to Appendix A for a full breakdown of per-product margin requirements.",
    },

    {
      id: "item-49",
      category: "trading-rules",
      question:
        "Do we manipulate the pricing or executions you receive in your Funded Futures accounts?",
      answer:
        "No. We operate at arm's lengths with the liquidity providers/Exchanges. All market pricing and trade executions are provided by third parties and are not changed or modified by us. Additionally, we do not markup transaction costs established through adjusting bid-offer spreads, markups/markdowns, commission charges or swaps.",
    },
    {
      id: "item-48",
      category: "trading-rules",
      question: "What happens if I do not pass KYC?",
      answer:
        "If you do not pass the KYC process, your account will be closed.",
    },
    {
      id: "item-47",
      category: "trading-rules",
      question:
        "Do I need to complete KYC or sign a trader contract to start trading in a Funded Futures Plan?",
      answer:
        "You will be required to complete our Know Your Customer (KYC) program and sign our Trader Agreement prior to requesting a payout.",
    },
    {
      id: "item-55",
      category: "trading-rules",
      question: "Who is the counterparty to my trades?",
      answer:
        "During the simulated phases, trades are executed against the liquidity provided by your trading platform and are designed to closely mimic real-market pricing and execution. Once you receive your live funded account, the pricing and execution will come directly from the exchange(s) on which you trade",
    },
    {
      id: "item-46",
      category: "trading-rules",
      question: "Can I pause the inactivity timer at any account Phase?",
      answer:
        "No, unfortunately we cannot pause the inactivity timer at any account phase.",
    },
    {
      id: "item-45",
      category: "trading-rules",
      question: "Is there a breach for inactivity in the Funded Account?",
      answer:
        "If you reach the Live Funded account level, you must place an executed trade once every 7 days to retain the account.",
    },
    {
      id: "item-44",
      category: "trading-rules",
      question: "What is the 60 Day Maximum Time rule?",
      answer:
        "Each Phase (1-4) has a maximum time limit of 60 calendar days. This means you must meet all the requirements for a given phase within 60 days of starting that phase. If you do not complete a phase within the 60-day window, your account will be deactivated, regardless of your progress or profit level at that point. You will need to purchase a new Futures plan to continue.\n\n\n\n" +
        "The timer begins on the day you place your first trade and continues uninterrupted. There are no extensions or pauses.\n\n\n\n" +
        "Please plan your trading accordingly to stay on track throughout all four phases.\n\n\n\n" +
        "Is there a breach for inactivity in Phases 1-4? For Phases 1-4, you must place an executed trade once every 14 days to retain the account.",
    },
    {
      id: "item-43",
      category: "trading-rules",
      question: "What are the Market Data Fees?",
      answer:
        "Market data fees cover the cost of accessing real-time price data from the exchanges. These fees are included in your purchase price during Phases 1 through 4. Once you reach the Live Funded Futures phase, any applicable market data or platform fees will be deducted from your account balance on a monthly basis.",
    },
    {
      id: "item-42",
      category: "trading-rules",
      question:
        "How do I complete the CME market data attestation for Rithmic?",
      answer:
        "You must complete the CME market data attestation using the R | Trader Pro desktop app—this cannot be done through mobile or web platforms. Once you've completed the attestation in R | Trader Pro, you'll be able to log in and trade through mobile or web apps. Please note: you must attest as a non- professional; we do not accept professional status in this program.",
    },
    {
      id: "item-41",
      category: "trading-rules",
      question: "What is a Futures contract?",
      answer:
        "A futures contract represents a standardized amount of an underlying asset. For example, one E-mini S&P 500 futures contract (ES) represents $50 times the index price, while one crude oil (CL) contract represents 1,000 barrels of oil.\n\n\n\n" +
        "Download the Complete Guidelines for the product table",
    },
    {
      id: "item-40",
      category: "trading-rules",
      question: "Can I hold positions over the weekend?",
      answer:
        "No. All positions must be closed and all open orders cancelled at 1510 CST each weekday.",
    },
    {
      id: "item-39",
      category: "trading-rules",
      question: "Can I reset my account if I lose it?",
      answer:
        "No. You will need to purchase a new account if you breach it for any reason.",
    },
    {
      id: "item-38",
      category: "trading-rules",
      question: "How do you calculate the Maximum Trailing Loss?",
      answer:
        "The Maximum Trailing Loss for each phase trails using End of Day Balance. Example: If your starting balance is $100,000, and there is a 5% Max Trailing Loss, you can drawdown to $95,000 before you violate the Maximum Trailing Loss rule. Then for example let's say you take your end of day balance to $102,000.\n\n\n\n" +
        "This is your new End of Day High-Water Mark, which would mean your new Maximum Trailing Loss would be $97,000. Once you generate a 5% return in the account, the Max Trailing Loss will lock at the starting balance (i.e. the Max Loss Limit will never increase above your starting balance). For the purpose of all calculations, the end of day is defined as 1600 CST.",
    },
    {
      id: "item-37",
      category: "trading-rules",
      question: "Is there a Daily Loss Limit?",
      answer:
        "There is no specific Daily Loss Limit, but traders must always stay within the Max Trailing Loss.",
    },
    {
      id: "item-36",
      category: "trading-rules",
      question: "If I have a breach in my Live Funded Account and there are gains in the account, do I forfeit those gains?",
      answer:
        "If you have gains in your Live Funded Futures (Phase 5) account at the time of a breach, you will still receive your portion of those gains.",
    },
    {
      id: "item-35",
      category: "trading-rules",
      question: "What is a Profit Target?",
      answer:
        "This is the predetermined profit amount you need to achieve in order to pass to the next phase of the program and be eligible to receive the payout.",
    },
    {
      id: "item-34",
      category: "trading-rules",
      question:
        "Do I lose my account if I don’t meet the Consistency Requirement?",
      answer:
        "Once you complete a Phase and meet the 25% consistency rule you will be eligible to make a request for that Phase’s payout. You will not be able to advance to the next phase until the payout is requested and completed.No. But in order to complete the phase and be entitled to receive the payout, you will need to achieve both the profit target and the consistency requirement.",
    },
    {
      id: "item-33",
      category: "trading-rules",
      question: "What is the Consistency Requirement**?",
      answer:
        "We have a Consistency Requirement to ensure traders aren't hitting profit targets through a few lucky trades. This promotes consistent behavior and punishes YOLO style trading. The calculation is: (best trading day PnL/Total PnL) x 100.\n\n\n\n" +
        "A lower value means profits are generated more consistently across multiple trading days. A higher value means profits are concentrated on fewer trading days. For example, a consistency requirement of 25% means you cannot achieve your entire profit target in less than 4 days (100% / 25% = 4).\n\n\n\n" +
        "You must meet both the profit target and the consistency requirement — maintaining a consistency ratio at or below 25% — to hit your profit target, be eligible for a payout, and to advance to the next Phase.\n\n\n\n" +
        "• Example 1: On a $100k account with a profit target of $8,000, if you earn $2,000 per day over 4 days, you meet the consistency requirement. Your best day is $2,000, and total profit is $8,000 — resulting in a consistency ratio of 25% ($2,000 / $8,000).\n\n\n\n" +
        "• Example 2: On a $100k account with a profit target of $8,000, if your profits across 4 days are $3,000, $1,000, $2,000, and $2,000, you violate the consistency requirement. Your best day is $3,000, and total profit is $8,000 — which gives a consistency ratio of 37.5% ($3,000 / $8,000).\n\n" +
        "To meet the consistency requirement of 25%, you would now need to reach a total profit of $12,000 while keeping your best day at or below $3,000.\n\n",
    },
    {
      id: "item-32",
      category: "trading-rules",
      question: "When do I get the payout for each Phase?",
      answer:
        "Once you complete a Phase and meet the 25% consistency rule you will be eligible to make a request for that Phase’s payout. You will not be able to advance to the next phase until the payout is requested and completed.",
    },
   
    {
      id: "item-30",
      category: "trading-rules",
      question: "What is 1 lot equal to on the Trading Platform?",
      answer:
        "Forex: 1 lot = $100k notional\n\n" +
        "● Index: 1 lot = 1 Contract\n\n" +
        "Exceptions:\n\n" +
        "● SPX500: 1 lot = 10 contracts\n\n" +
        "● JPN225: 1 lot = 500 contracts\n\n" +
        "● Cryptos: 1 lot = 1 coin\n\n" +
        "● Silver: 1 lot = 5000 ounces\n\n" +
        "● Gold: 1 lot = 100 ounces\n\n" +
        "● Oil: 1 lot = 100 barrels",
    },
    {
      id: "item-31",
      category: "trading-rules",
      question: "What is 1 lot equal to on the Trading Platform?",
      answer:
        "Forex: 1 lot = $100k notional\n\n" +
        "● Index: 1 lot = 1 Contract\n\n" +
        "Exceptions:\n\n" +
        "● SPX500: 1 lot = 10 contracts\n\n" +
        "● JPN225: 1 lot = 500 contracts\n\n" +
        "● Cryptos: 1 lot = 1 coin\n\n" +
        "● Silver: 1 lot = 5000 ounces\n\n" +
        "● Gold: 1 lot = 100 ounces\n\n" +
        "● Oil: 1 lot = 100 barrels",
    },
    {
      id: "item-63",
      category: "trading-rules",
      question: "Is there a breach for inactivity?",
      answer:
        "Yes. If you do not place a trade at least once every 30 days on your account, we will consider you inactive and your account will be breached.",
    },
    {
      id: "item-67",
      category: "trading-rules",
      question: "How do you calculate the Daily Loss Limit?",
      answer: `The Daily Loss Limit is the maximum amount an account may lose in a single trading day. This limit resets each day at 5:00 PM EST. The Daily Loss Limit is calculated using the greater of the prior day’s end of day balance, which includes closed P&L only, OR the prior day’s end of day equity, which includes both balance and any open P&L. This approach ensures that unrealized gains at the end of the trading day are properly reflected when determining the allowable loss for the following session.

If a trader finishes the day with open positions that are in profit, the account equity will be higher than the balance, and equity will be used to calculate the Daily Loss Limit. If a trader finishes the day with no open positions, balance and equity are the same, and the balance will be used. If a trader finishes the day with open positions that are in a loss, equity will be lower than balance, and the balance will be used.


Example: A trader has a $100,000 account with a 5 percent Daily Loss Limit. At the 5:00 PM EST reset, the account balance is $100,000 and there are open positions in profit, resulting in account equity of $102,000. Because the equity is higher than the balance, the Daily Loss Limit is calculated using the $102,000 equity value. Five percent of $102,000 is $5,100, meaning the account will violate the Daily Loss Limit if intraday equity reaches $96,900 at any point during the next trading day. If the trader had no open positions, or open positions that were in a loss, the Daily Loss Limit would instead be based on the $100,000 balance, resulting in a breach level of $95,000.`,
    },
    {
      id: "item-69",
      category: "trading-rules",
      question: "How do you calculate the Max Drawdown (STATIC)?",
      answer: `The Maximum Drawdown is initially set at 6% and is static (using CLOSED BALANCE) and will therefore remain at the same value for as long as the account will remain active.

Example: If your starting balance is $100,000, you can drawdown to $94,000 before you would violate
the Maximum Drawdown rule. Then for example let's say you take your account to $102,000 in CLOSED BALANCE, your Maximum Drawdown would remain locked at $94,000. So, regardless of how high your account goes, your drawdown will remain the same (note, you can still violate the daily drawdown).

**All plans will have “Lock Upon Payout” enabled by default.  However, traders can elect to purchase an add-on for 25% of the purchase price to disable this feature.

Example: using the “Lock Upon Payout” default
A trader has a $100,000 account and grows the balance to $110,000. When the trader submits a payout request, the maximum drawdown becomes permanently locked at the original starting balance of $100,000. From that point forward, the account balance may not fall below $100,000. If it does, the account will be considered breached.`,
    },
    {
      id: "item-83",
      category: "trading-rules",
      question: "Is there a breach for inactivity?",
      answer:
        "Yes. We will consider you inactive and your account will be breached if you do not have any trading activity on your account for 30 consecutive days.",
    },
    {
      id: "item-90",
      category: "trading-rules",
      question:
        "What is the difference between a Hard Breach and Soft Breach rule?",
      answer: `Soft breach means that we will close all trades that have violated the rule. However, you can continue trading in your Assessment or Funded Account.

Hard breach means that you violated either the Daily Loss Limit or Max Drawdown rule. Both rules constitute a hard breach. In the event you have a hard breach, you will fail the Assessment or have your Funded Account taken away.`,
    },
    {
      id: "item-93",
      category: "trading-rules",
      question: "Why do I have to place a stop loss on trades?",
      answer:
        "We believe in sound risk management using stop losses. To that end, we require a stop loss on every trade. If you fail to place a stop loss at the time of placing the trade/order, we will close the trade. This is only a soft breach rule, so you can continue trading in your account.",
    },
  ];

  const categories = [
    { id: "all", label: "All Questions" },
    { id: "funded-account", label: "General Questions" },
    { id: "general", label: "Forex" },
    { id: "trading-rules", label: "Futures" },
  ];

  const filteredFAQs =
    selectedCategory === "all"
      ? faqData
      : faqData.filter((faq) => faq.category === selectedCategory);

  return (
    <section id="faqs" className="container mx-auto px-4 py-16 relative z-10">
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
      </div>
    </section>
  );
};

export default FAQSection;
