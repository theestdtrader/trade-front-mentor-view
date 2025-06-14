import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const SignUpForm = () => {
  return (
    <a
      href="https://theestablishedtraderdashboard.propaccount.com/sign-up"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Button
        size="lg"
        className="px-8 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-[#892BFC] to-indigo-500 text-white shadow-lg shadow-[#892BFC]/20 hover:scale-105 transition-all duration-300"
      >
        Start Now
        <ArrowRight size={22} className="ml-2" />
      </Button>
    </a>
  );
};

export default SignUpForm;
