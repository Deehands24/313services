import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { LeadCapture } from "@/components/home/LeadCapture";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FeaturedListings } from "@/components/home/FeaturedListings";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <LeadCapture />
        <CategoryGrid />
        <FeaturedListings />
      </main>
      <Footer />
    </div>
  );
}
