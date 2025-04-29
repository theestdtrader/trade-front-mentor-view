
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { ArrowRight, Mail, User } from "lucide-react";

// Define form schema with Zod
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    .regex(/[0-9]/, { message: "Password must contain at least one number" }),
});

type FormValues = z.infer<typeof formSchema>;

const SignUpForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This is where you would handle form submission
    console.log("Form submitted:", data);
    
    // Show success toast and close dialog
    toast.success("Account created successfully!");
    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="px-8 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-primary to-indigo-500 text-white shadow-lg hover:scale-105 transition"
        >
          Start Now
          <ArrowRight size={22} className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-[#2A2D3E] to-[#2E2B36] text-white border border-[#892BFC]/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">Sign Up</DialogTitle>
          <DialogDescription className="text-gray-300">
            Create your account to get started with The Established Trader
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Full Name</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Enter your name"
                        className="pl-10 bg-[#38225b]/50 border-[#892BFC]/20 text-white placeholder:text-gray-500"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Enter your email"
                        className="pl-10 bg-[#38225b]/50 border-[#892BFC]/20 text-white placeholder:text-gray-500"
                        type="email"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Create a secure password"
                      className="bg-[#38225b]/50 border-[#892BFC]/20 text-white placeholder:text-gray-500"
                      type="password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />
            
            <DialogFooter className="pt-4">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[#892BFC] to-indigo-500 hover:from-[#9b87f5] hover:to-indigo-400 text-white"
              >
                Sign Up
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpForm;
