"use client";

import { motion } from "framer-motion";
import { Sprout, Flame, Armchair, Recycle, type LucideIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { VALUES } from "@/lib/data";

const ICONS: LucideIcon[] = [Sprout, Flame, Armchair, Recycle];

export default function Values() {
  return (
    <section className="bg-cream-100/50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeading
          eyebrow="What we stand for"
          title="Four things we won't compromise on"
          align="center"
          className="mx-auto"
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {VALUES.map((value, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="group flex flex-col items-start gap-4 rounded-3xl border border-pine-900/8 bg-white/70 p-7 transition-shadow duration-300 hover:shadow-lg"
              >
                <span className="bean-spin-hover flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-600/10 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-cream-50">
                  <Icon className="bean-spin-target h-5 w-5" />
                </span>
                <h3 className="font-display text-lg text-pine-950">{value.title}</h3>
                <p className="text-sm leading-relaxed text-ink-500">{value.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
