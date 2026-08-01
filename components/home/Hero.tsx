"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Star } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import SteamMotif from "@/components/ui/SteamMotif";
import TiltCard from "@/components/ui/TiltCard";
import Counter from "@/components/ui/Counter";
import { IMAGES } from "@/lib/images";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-pine-950 pt-24">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: 1.12 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src={IMAGES.heroCappuccino}
          alt="Cappuccino in a bed of roasted coffee beans"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-pine-950 via-pine-950/85 to-pine-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-transparent to-pine-950/30" />

      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-10">
        <div className="flex flex-col items-start gap-7">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="flex items-center gap-2 rounded-full border border-cream-50/20 bg-cream-50/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300"
          >
            <SteamMotif className="h-4 w-3" color="currentColor" />
            Handcrafted daily
          </motion.span>

          <AnimatedText
            as="h1"
            text="Your coffee ritual, reimagined"
            className="font-display text-5xl leading-[1.05] text-cream-50 sm:text-6xl lg:text-7xl"
            wordClassName="[&:nth-child(1)]:italic"
            delay={0.25}
          />

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="max-w-md text-base leading-relaxed text-cream-100/75 sm:text-lg"
          >
            Ethically-sourced beans, roasted in small batches, and poured by hand at every counter — order ahead and skip straight to the good part.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button href="/menu" variant="primary">
              Order Now
            </Button>
            <Button href="/about" variant="ghost" className="border border-cream-50/25">
              Our Story
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex items-center gap-1 text-gold-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="text-sm text-cream-100/70">
              <Counter to={52000} suffix="+" className="font-display text-lg text-cream-50" /> five-star orders this year
            </div>
          </motion.div>
        </div>

        <div className="relative hidden justify-self-center lg:block">
          <TiltCard className="relative w-72 rounded-[2rem] border border-cream-50/10 bg-cream-50/5 p-4 shadow-2xl shadow-pine-950/50 backdrop-blur-sm">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem]">
              <Image
                src={IMAGES.icedCoffeeHand}
                alt="Hand holding an iced coffee"
                fill
                sizes="320px"
                className="object-cover"
              />
              <div className="absolute -top-1 right-6">
                <SteamMotif className="h-14 w-10 text-cream-50/80" />
              </div>
            </div>
            <div className="flex items-center justify-between px-1 pt-4">
              <div>
                <p className="font-display text-lg text-cream-50">Iced Caramel Latte</p>
                <p className="text-xs text-cream-100/60">Grande · Oat milk</p>
              </div>
              <span className="rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-pine-950">
                $4.95
              </span>
            </div>
          </TiltCard>
          <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-brand-500/30 blur-2xl blob-shape" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 }, y: { delay: 1.5, duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-cream-100/60"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4" />
      </motion.div>
    </section>
  );
}
