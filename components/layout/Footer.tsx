import Link from "next/link";
import { Coffee, Camera, MessageCircle, AtSign, MapPin } from "lucide-react";
import { NAV_LINKS } from "@/lib/data";
import NewsletterForm from "./NewsletterForm";
import SteamMotif from "@/components/ui/SteamMotif";

const SOCIALS = [
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "#", label: "Facebook" },
  { icon: AtSign, href: "#", label: "X (Twitter)" },
];

const COMPANY_LINKS = ["Careers", "Press", "Investor Relations", "Sustainability"];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-pine-950 text-cream-100">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl blob-shape"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 gap-12 border-b border-cream-50/10 pb-14 md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex flex-col gap-4 lg:col-span-1">
            <div className="flex items-center gap-2">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-brand-600">
                <Coffee className="h-4.5 w-4.5 text-cream-50" strokeWidth={2.25} />
              </span>
              <span className="font-display text-xl text-cream-50">Starbucks</span>
              <SteamMotif className="h-8 w-6 text-gold-400/70" />
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-cream-100/70">
              A cup, a counter, a few quiet minutes — handcrafted daily across every neighborhood we call home.
            </p>
            <div className="flex gap-3 pt-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-cream-50/15 text-cream-100/80 transition-all duration-300 hover:-translate-y-1 hover:border-gold-400 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm uppercase tracking-[0.2em] text-gold-300">Explore</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-cream-100/75 transition-colors hover:text-cream-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 font-display text-sm uppercase tracking-[0.2em] text-gold-300">Company</h3>
            <ul className="flex flex-col gap-3">
              {COMPANY_LINKS.map((item) => (
                <li key={item}>
                  <a href="#" className="text-sm text-cream-100/75 transition-colors hover:text-cream-50">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-display text-sm uppercase tracking-[0.2em] text-gold-300">Stay in the loop</h3>
            <p className="text-sm text-cream-100/70">
              Seasonal drinks, rewards drops, and the occasional free-cup day.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-cream-100/50 md:flex-row">
          <p>© {new Date().getFullYear()} Starbucks-inspired demo build. Crafted for portfolio purposes.</p>
          <div className="flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" />
            <span>Find a store near you</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
