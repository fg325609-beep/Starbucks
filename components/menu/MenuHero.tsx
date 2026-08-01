import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import Marquee from "@/components/ui/Marquee";
import { IMAGES } from "@/lib/images";

const TICKER = ["HOT COFFEES", "COLD COFFEES", "FRAPPÉ & BLENDED", "TEA", "BAKERY"];

export default function MenuHero() {
  return (
    <section className="relative flex h-[70vh] min-h-[520px] items-end overflow-hidden bg-pine-950">
      <Image
        src={IMAGES.beansPile}
        alt="Close-up of roasted coffee beans"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pine-950 via-pine-950/60 to-pine-950/70" />

      <div className="relative w-full pt-28">
        <div className="mx-auto max-w-7xl px-6 pb-14 lg:px-10">
          <span
            data-aos="fade-up"
            className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.25em] text-gold-300"
          >
            The full lineup
          </span>
          <AnimatedText
            as="h1"
            text="Something for every craving"
            className="font-display text-4xl leading-[1.08] text-cream-50 sm:text-5xl lg:text-6xl"
          />
        </div>
        <div className="border-t border-cream-50/10 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-cream-100/50">
          <Marquee items={TICKER} speed={28} />
        </div>
      </div>
    </section>
  );
}
