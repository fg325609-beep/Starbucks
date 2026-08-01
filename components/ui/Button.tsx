"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
};

const VARIANT_CLASSES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary: "bg-brand-600 text-cream-50 hover:bg-brand-500 shadow-lg shadow-brand-600/20",
  secondary:
    "border border-pine-900/25 text-pine-900 hover:border-pine-900 hover:bg-pine-900 hover:text-cream-50",
  ghost: "text-cream-50/90 hover:text-gold-300",
};

const springTransition = { type: "spring", stiffness: 400, damping: 24 } as const;

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-300 ${VARIANT_CLASSES[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        className="inline-block"
        whileHover={{ scale: 1.035 }}
        whileTap={{ scale: 0.97 }}
        transition={springTransition}
      >
        <Link href={href} className={classes}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={classes}
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={springTransition}
    >
      {children}
    </motion.button>
  );
}
