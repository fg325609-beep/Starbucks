"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProductCard from "@/components/ui/ProductCard";
import { MENU } from "@/lib/data";

export default function MenuExplorer() {
  const [activeId, setActiveId] = useState(MENU[0].id);
  const activeCategory = MENU.find((c) => c.id === activeId) ?? MENU[0];

  return (
    <section className="bg-cream-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div
          data-aos="fade-up"
          className="mx-auto flex w-fit max-w-full flex-wrap justify-center gap-1.5 rounded-full border border-pine-900/10 bg-white/60 p-1.5 shadow-sm"
        >
          {MENU.map((category) => {
            const active = category.id === activeId;
            return (
              <button
                key={category.id}
                onClick={() => setActiveId(category.id)}
                className={`relative rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 sm:px-5 ${
                  active ? "text-cream-50" : "text-ink-700 hover:text-pine-950"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className="absolute inset-0 rounded-full bg-brand-600"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{category.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {activeCategory.items.map((item, i) => (
              <ProductCard key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
