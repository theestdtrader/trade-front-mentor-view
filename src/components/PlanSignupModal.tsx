
import React, { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useIsMobile } from "@/hooks/use-mobile";

interface PlanSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  planType: "forex" | "futures";
  planSize: string;
  planFee: string;
}

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});

const PlanSignupModal: React.FC<PlanSignupModalProps> = ({
  isOpen,
  onClose,
  planType,
  planSize,
  planFee,
}) => {
  const isMobile = useIsMobile();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      terms: false,
    },
  });

  // Prevent body scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    toast.success("Application submitted successfully!");
    onClose();
    form.reset();
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 z-50 animate-fade-in"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <Card 
        className={`w-full ${isMobile ? 'max-w-[95%] sm:max-w-xs' : 'max-w-md'} bg-gradient-to-br from-[#35208f] to-[#12032e] border-purple-500/30 shadow-xl overflow-hidden rounded-xl animate-[fadeIn_0.3s,scaleIn_0.3s]`}
        onClick={e => e.stopPropagation()}
      >
        <CardHeader className="relative pb-2 sm:pb-3">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 sm:right-2 top-1 sm:top-2 text-white hover:bg-white/10"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
          <CardTitle className={`${isMobile ? 'text-base sm:text-lg' : 'text-xl'} text-white flex items-center gap-2`}>
            <span className="text-[#892BFC]">Apply for</span> {planType === "forex" ? "Forex" : "Futures"} Plan
          </CardTitle>
          <div className="flex justify-between items-center mt-1 sm:mt-2">
            <div className="text-white">
              <div className="text-xs sm:text-sm opacity-80">Account Size</div>
              <div className={`font-bold ${isMobile ? 'text-sm sm:text-base' : 'text-lg'}`}>{planSize}</div>
            </div>
            <div className="text-white">
              <div className="text-xs sm:text-sm opacity-80">Fee</div>
              <div className={`font-bold ${isMobile ? 'text-sm sm:text-base' : 'text-lg'}`}>{planFee}</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="py-1 sm:py-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 sm:space-y-3">
              <FormField
                control={form.control}
                name="fullName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xs sm:text-sm">Full Name</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-2 sm:px-3 py-1.5 bg-white/10 text-white border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
                        placeholder="John Doe"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xs sm:text-sm">Email</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-2 sm:px-3 py-1.5 bg-white/10 text-white border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
                        placeholder="johndoe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-white text-xs sm:text-sm">Phone Number</FormLabel>
                    <FormControl>
                      <input
                        {...field}
                        className="w-full px-2 sm:px-3 py-1.5 bg-white/10 text-white border border-purple-500/30 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs sm:text-sm"
                        placeholder="(555) 123-4567"
                      />
                    </FormControl>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-2 sm:space-x-3 space-y-0 py-0 sm:py-1">
                    <FormControl>
                      <input
                        type="checkbox"
                        checked={field.value}
                        onChange={field.onChange}
                        className="h-3 w-3 sm:h-4 sm:w-4 accent-[#892BFC]"
                      />
                    </FormControl>
                    <FormLabel className="text-xs text-white font-normal">
                      I agree to the terms and conditions
                    </FormLabel>
                    <FormMessage className="text-xs" />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="w-full bg-[#892BFC] hover:bg-[#892BFC]/90 text-white py-1 sm:py-1.5 text-xs sm:text-sm"
              >
                Submit Application
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanSignupModal;
