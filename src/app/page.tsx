import { HomepageHero } from "@/components/features/homepage-hero";
import { HomepageSections } from "@/components/features/homepage-sections";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HomepageHero />
      <HomepageSections />
    </main>
  );
}
