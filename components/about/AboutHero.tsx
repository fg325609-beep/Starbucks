import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import SteamMotif from "@/components/ui/SteamMotif";
import { IMAGES } from "@/lib/images";

export default function AboutHero() {
  return (
    <section className="relative flex h-[85vh] min-h-[560px] items-center justify-center overflow-hidden bg-pine-950 text-center">
      <Image
        src={IMAGES.shopInterior}
        alt="Warm, cozy coffee shop interior"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-pine-950/40 via-pine-950/70 to-pine-950" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 pt-16">
        <SteamMotif className="h-16 w-12 text-gold-400/70" />
        <span
          data-aos="fade-up"
          className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300"
        >
          Est. one cup at a time
        </span>
        <AnimatedText
          as="h1"
          text="A story brewed slowly, on purpose"
          className="font-display text-4xl leading-[1.1] text-cream-50 sm:text-5xl lg:text-6xl"
        />
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          className="max-w-xl text-base leading-relaxed text-cream-100/75 sm:text-lg"
        >
          From a single roaster to thousands of neighborhood corners — here&apos;s the short version of how we got here.
        </p>
      </div>
    </section>
  );
}
