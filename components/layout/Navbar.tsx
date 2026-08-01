"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Coffee } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import SteamMotif from "@/components/ui/SteamMotif";
import Button from "@/components/ui/Button";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer on route change. Adjusted during render
  // (React's recommended pattern for resetting state when a prop
  // changes) rather than in an Effect, which would cost an extra render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        solid ? "bg-cream-50/95 shadow-sm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Link href="/" className="group relative flex items-center gap-2">
          <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-600 text-cream-50">
            <Coffee className="h-4.5 w-4.5" strokeWidth={2.25} />
            <span className="absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <SteamMotif className="h-8 w-8 text-brand-500" />
            </span>
          </span>
          <span
            className={`font-display text-xl font-medium tracking-tight transition-colors duration-500 ${
              solid ? "text-pine-950" : "text-cream-50"
            }`}
          >
            Starbucks
          </span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-500 ${
                  solid ? "text-ink-700 hover:text-pine-950" : "text-cream-100/90 hover:text-cream-50"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-current transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "scale-x-100" : ""
                  }`}
                />
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button href="/menu" variant={solid ? "primary" : "ghost"} className={solid ? "" : "border border-cream-50/40"}>
            Order Now
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors md:hidden ${
            solid ? "text-pine-950" : "text-cream-50"
          }`}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream-50 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 pb-8 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -16, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.08 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className="block border-b border-pine-900/10 py-4 font-display text-2xl text-pine-950"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ x: -16, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.08 * NAV_LINKS.length, duration: 0.4 }}
                className="pt-6"
              >
                <Button href="/menu" className="w-full justify-center">
                  Order Now
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
