import type { Metadata } from "next";
import MenuHero from "@/components/menu/MenuHero";
import MenuExplorer from "@/components/menu/MenuExplorer";
import SeasonalPicks from "@/components/menu/SeasonalPicks";

export const metadata: Metadata = {
  title: "Menu | Starbucks",
  description: "Browse hot and cold coffees, frappés, tea, and bakery favorites.",
};

export default function MenuPage() {
  return (
    <>
      <MenuHero />
      <MenuExplorer />
      <SeasonalPicks />
    </>
  );
}
