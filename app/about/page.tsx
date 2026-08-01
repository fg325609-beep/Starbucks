import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import StoryTimeline from "@/components/about/StoryTimeline";
import Values from "@/components/about/Values";
import Community from "@/components/about/Community";

export const metadata: Metadata = {
  title: "Our Story | Starbucks",
  description: "How a single roaster grew into a neighborhood coffeehouse, told in four chapters.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StoryTimeline />
      <Values />
      <Community />
    </>
  );
}
