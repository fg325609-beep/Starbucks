"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Check, Gift } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import TiltCard from "@/components/ui/TiltCard";
import { IMAGES } from "@/lib/images";

const BENEFITS = [
  "Earn a star on every purchase, in-store or in-app",
  "Free birthday drink, on us, every single year",
  "Order ahead and skip the line entirely",
];

export default function RewardsBanner() {
  return (
    <section className="relative overflow-hidden bg-pine-900 py-24 text-cream-50">
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-brand-500/20 blur-3xl blob-shape" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="flex flex-col items-start gap-6">
          <SectionHeading
            eyebrow="Green Apron Rewards"
            title="Your next cup is closer than you think"
            subcopy="Join free and start earning stars today — every order gets you closer to a drink on the house."
            light
          />

          <ul className="flex flex-col gap-4">
            {BENEFITS.map((benefit, i) => (
              <motion.li
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex items-center gap-3 text-sm text-cream-100/85 sm:text-base"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/90 text-pine-950">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                {benefit}
              </motion.li>
            ))}
          </ul>

          <div data-aos="fade-up" data-aos-delay="250">
            <Button href="/menu" variant="primary" className="bg-gold-500 text-pine-950 hover:bg-gold-400">
              Join Free Today
            </Button>
          </div>
        </div>

        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[5/4] overflow-hidden rounded-[2.5rem]"
          >
            <Image
              src={IMAGES.friendsCafe}
              alt="Friends chatting over coffee at a café"
              fill
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>

          <TiltCard
            intensity={8}
            className="absolute -bottom-8 -left-6 w-56 rounded-2xl bg-cream-50 p-4 text-pine-950 shadow-2xl shadow-pine-950/40 sm:-left-10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-500 float-slow">
                <Gift className="h-5 w-5 text-pine-950" />
              </span>
              <div>
                <p className="font-display text-sm leading-tight">2 Stars away from</p>
                <p className="font-display text-sm leading-tight text-brand-600">a free drink</p>
              </div>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
