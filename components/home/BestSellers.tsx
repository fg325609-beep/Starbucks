import SectionHeading from "@/components/ui/SectionHeading";
import ProductCard from "@/components/ui/ProductCard";
import Button from "@/components/ui/Button";
import { BESTSELLERS } from "@/lib/data";

export default function BestSellers() {
  return (
    <section className="bg-cream-50 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Fan favorites"
            title="What everyone's ordering"
            subcopy="The four drinks that keep our regulars coming back — hot, cold, blended, and everything in between."
          />
          <div data-aos="fade-left" className="hidden md:block">
            <Button href="/menu" variant="secondary">
              View Full Menu
            </Button>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {BESTSELLERS.map((item, i) => (
            <ProductCard key={item.id} item={item} index={i} />
          ))}
        </div>

        <div data-aos="fade-up" className="mt-10 flex justify-center md:hidden">
          <Button href="/menu" variant="secondary">
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
