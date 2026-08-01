import SectionHeading from "@/components/ui/SectionHeading";
import RevealImage from "@/components/ui/RevealImage";
import Counter from "@/components/ui/Counter";
import Button from "@/components/ui/Button";
import { IMAGES } from "@/lib/images";

const STATS = [
  { to: 100, suffix: "%", label: "Arabica beans" },
  { to: 30, suffix: "+", label: "Origins sourced" },
  { to: 20, suffix: "s", label: "Avg. pour time" },
];

export default function Craft() {
  return (
    <section className="overflow-hidden bg-cream-100/60 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <RevealImage
          src={IMAGES.baristaLatteArt}
          alt="Barista pouring latte art into a cup"
          className="relative aspect-[4/5] rounded-[2.5rem] lg:order-1"
        />

        <div className="flex flex-col items-start gap-6 lg:order-2">
          <SectionHeading
            eyebrow="Our craft"
            title="Every cup gets a barista's full attention"
            subcopy="From the grind size to the milk temperature, nothing is automated away. It's the same care whether it's your first cup of the day or your fifth."
          />

          <div data-aos="fade-up" data-aos-delay="200" className="grid grid-cols-3 gap-6 py-2">
            {STATS.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1">
                <Counter
                  to={stat.to}
                  suffix={stat.suffix}
                  className="font-display text-3xl text-pine-950 sm:text-4xl"
                />
                <span className="text-xs leading-snug text-ink-500">{stat.label}</span>
              </div>
            ))}
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <Button href="/about" variant="secondary">
              Meet Our Roasters
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
