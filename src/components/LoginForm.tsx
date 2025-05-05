import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Mail, Lock } from "lucide-react";

// Define form schema with Zod
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type FormValues = z.infer<typeof formSchema>;

interface LoginFormProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const LoginForm = ({ isOpen, onOpenChange }: LoginFormProps) => {
  // Initialize form
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // This is where you would handle form submission
    console.log("Login form submitted:", data);

    // Show success toast and close dialog
    toast.success("Login successful!");
    onOpenChange(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-[#2A2D3E] to-[#2E2B36] text-white border border-[#892BFC]/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Login
          </DialogTitle>
          <DialogDescription className="text-gray-300">
            Enter your credentials to access your account
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                    <div className="relative">
                      <Lock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <Input
                        placeholder="Enter your password"
                        className="pl-10 bg-[#38225b]/50 border-[#892BFC]/20 text-white placeholder:text-gray-500"
                        type="password"
                        {...field}
                      />
                    </div>
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
                Login
              </Button>
            </DialogFooter>
          </form>
        </Form>

        {/* <div className="text-center text-sm text-gray-400 mt-2">
          <span>Don't have an account? </span>
          <button
            className="text-[#892BFC] hover:underline font-medium"
            onClick={() => {
              onOpenChange(false);
              // Here you could trigger sign up dialog if needed
            }}
          >
            Sign Up
          </button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
