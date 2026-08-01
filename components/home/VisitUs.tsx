import AnimatedText from "@/components/ui/AnimatedText";
import Button from "@/components/ui/Button";
import SteamMotif from "@/components/ui/SteamMotif";
import Marquee from "@/components/ui/Marquee";

const TICKER = ["FRESHLY ROASTED", "ETHICALLY SOURCED", "HANDCRAFTED DAILY", "MADE FOR YOU"];

export default function VisitUs() {
  return (
    <section className="relative overflow-hidden bg-pine-950 text-cream-50">
      <div className="border-y border-cream-50/10 py-4 text-xs font-semibold uppercase tracking-[0.3em] text-cream-100/50">
        <Marquee items={TICKER} />
      </div>

      <div className="relative mx-auto flex max-w-4xl flex-col items-center gap-8 px-6 py-28 text-center">
        <div className="absolute left-1/2 top-8 -translate-x-1/2 opacity-70">
          <SteamMotif className="h-20 w-14 text-gold-400/50" />
        </div>

        <span
          data-aos="fade-up"
          className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-300"
        >
          Visit a store near you
        </span>

        <AnimatedText
          as="h2"
          text="Good coffee is better shared"
          className="font-display text-4xl leading-tight sm:text-5xl lg:text-6xl"
        />

        <p data-aos="fade-up" data-aos-delay="150" className="max-w-lg text-cream-100/70">
          Over 300 neighborhood corners, always with a warm seat and a familiar face behind the counter.
        </p>

        <div data-aos="fade-up" data-aos-delay="250" className="flex flex-wrap justify-center gap-4 pt-2">
          <Button href="/menu" variant="primary" className="bg-gold-500 text-pine-950 hover:bg-gold-400">
            Order Ahead
          </Button>
          <Button href="/about" variant="ghost" className="border border-cream-50/25">
            Find a Store
          </Button>
        </div>
      </div>
    </section>
  );
}
