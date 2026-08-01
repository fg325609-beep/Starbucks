"use client";

import { motion } from "framer-motion";
import RevealImage from "@/components/ui/RevealImage";
import AnimatedText from "@/components/ui/AnimatedText";
import { STORY_TIMELINE } from "@/lib/data";

export default function StoryTimeline() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto flex max-w-7xl flex-col gap-24 px-6 lg:px-10">
        {STORY_TIMELINE.map((chapter, i) => {
          const reversed = i % 2 === 1;
          return (
            <div
              key={chapter.chapter}
              className={`grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                reversed ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <RevealImage
                src={chapter.image}
                alt={chapter.title}
                className="relative aspect-[4/3] rounded-[2rem]"
              />

              <div className="flex flex-col items-start gap-4">
                <motion.span
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.6 }}
                  transition={{ duration: 0.5 }}
                  className="font-display text-6xl text-gold-500/40 lg:text-7xl"
                >
                  {chapter.chapter}
                </motion.span>
                <AnimatedText
                  as="h3"
                  text={chapter.title}
                  className="font-display text-3xl leading-tight text-pine-950 sm:text-4xl"
                />
                <p
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="max-w-md text-base leading-relaxed text-ink-700"
                >
                  {chapter.copy}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
