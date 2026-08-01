"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/images";

const SEASONAL = [
  { name: "Iced Matcha Latte", note: "Stone-ground, shaken over ice", image: IMAGES.matchaIced },
  { name: "Sweet Cream Cold Brew", note: "Slow-steeped, finished with cream", image: IMAGES.coldBrew },
  { name: "Caramel Macchiato", note: "Vanilla, espresso, caramel drizzle", image: IMAGES.latteHeart },
  { name: "Cappuccino", note: "Deep foam, bold espresso", image: IMAGES.heroCappuccino },
];

export default function SeasonalPicks() {
  return (
    <section className="overflow-hidden bg-pine-900 py-24 text-cream-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col gap-2">
          <SectionHeading eyebrow="Staff picks" title="Drag to explore this season" light />
          <span data-aos="fade-up" data-aos-delay="150" className="text-sm text-cream-100/60">
            ← Swipe or drag the row →
          </span>
        </div>
      </div>

      <div className="mt-10 cursor-grab overflow-hidden active:cursor-grabbing">
        <motion.div
          drag="x"
          dragConstraints={{ left: -560, right: 0 }}
          dragElastic={0.12}
          className="flex gap-6 px-6 lg:px-10"
        >
          {SEASONAL.map((drink) => (
            <motion.div
              key={drink.name}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative w-64 shrink-0 select-none overflow-hidden rounded-3xl bg-pine-950/40 sm:w-72"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={drink.image}
                  alt={drink.name}
                  fill
                  draggable={false}
                  sizes="288px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="font-display text-lg">{drink.name}</p>
                <p className="text-xs text-cream-100/70">{drink.note}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
