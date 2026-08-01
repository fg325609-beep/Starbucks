"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import TiltCard from "./TiltCard";
import type { MenuItem } from "@/lib/data";

type ProductCardProps = {
  item: MenuItem;
  index?: number;
};

export default function ProductCard({ item, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <TiltCard
        intensity={6}
        className="group relative flex flex-col overflow-hidden rounded-3xl bg-cream-50 shadow-[0_1px_0_rgba(27,24,17,0.06)] ring-1 ring-pine-900/5 transition-shadow duration-500 hover:shadow-xl hover:shadow-pine-950/10"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          {item.tag && (
            <span className="absolute left-3 top-3 rounded-full bg-pine-950/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-300 backdrop-blur-sm">
              {item.tag}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-1.5 p-5">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg leading-snug text-pine-950">{item.name}</h3>
            <motion.button
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              aria-label={`Add ${item.name}`}
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-600 text-cream-50"
            >
              <Plus className="h-4 w-4" />
            </motion.button>
          </div>
          <p className="text-sm leading-relaxed text-ink-500">{item.description}</p>
          <p className="pt-2 font-display text-base text-brand-600">${item.price.toFixed(2)}</p>
        </div>
      </TiltCard>
    </motion.div>
  );
}
