import Hero from "@/components/home/Hero";
import BestSellers from "@/components/home/BestSellers";
import Craft from "@/components/home/Craft";
import RewardsBanner from "@/components/home/RewardsBanner";
import Testimonials from "@/components/home/Testimonials";
import VisitUs from "@/components/home/VisitUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BestSellers />
      <Craft />
      <RewardsBanner />
      <Testimonials />
      <VisitUs />
    </>
  );
}
