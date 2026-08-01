import Image from "next/image";
import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

export default function Community() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24">
      <Image
        src={IMAGES.farmHarvest}
        alt="Farmer harvesting coffee cherries"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-pine-950/55" />

      <div
        data-aos="zoom-in"
        data-aos-duration="800"
        className="relative mx-4 flex max-w-xl flex-col items-center gap-6 rounded-[2.5rem] border border-cream-50/15 bg-pine-950/40 p-10 text-center backdrop-blur-xl sm:p-14"
      >
        <AnimatedText
          as="h2"
          text="Grown, roasted, and poured with someone in mind"
          className="font-display text-3xl leading-tight text-cream-50 sm:text-4xl"
        />
        <p className="text-sm leading-relaxed text-cream-100/75 sm:text-base">
          Every relationship — with a farmer, a roaster, a regular — is one we intend to keep for a very long time.
        </p>
        <Button href="/menu" variant="primary" className="bg-gold-500 text-pine-950 hover:bg-gold-400">
          Explore the Menu
        </Button>
      </div>
    </section>
  );
}
