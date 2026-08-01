"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const newsletterSchema = z.object({
  email: z.string().min(1, "Email is required").email("Enter a valid email address"),
});

type NewsletterValues = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  const onSubmit = async () => {
    // Simulated network delay — wire up to a real endpoint when ready.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-2">
      <div className="flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 py-1.5 pl-5 pr-1.5 transition-colors focus-within:border-gold-400">
        <input
          {...register("email")}
          type="email"
          placeholder="Your email address"
          className="w-full bg-transparent text-sm text-cream-50 outline-none placeholder:text-cream-100/40"
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gold-500 text-pine-950 disabled:opacity-60"
          aria-label="Subscribe"
        >
          <AnimatePresence mode="wait" initial={false}>
            {submitted ? (
              <motion.span
                key="check"
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0 }}
              >
                <Check className="h-4 w-4" />
              </motion.span>
            ) : (
              <motion.span
                key="send"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
              >
                <Send className="h-3.5 w-3.5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <AnimatePresence>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -4, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="pl-4 text-xs text-gold-300"
          >
            {errors.email.message}
          </motion.p>
        )}
      </AnimatePresence>
    </form>
  );
}
