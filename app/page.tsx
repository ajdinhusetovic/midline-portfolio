import Hero from "@/components/Hero";
import Services from "@/components/Services";
import FeaturedWork from "@/components/FeaturedWork";
import AboutUs from "@/components/AboutUs";
import OurProcess from "@/components/OurProcess";
import StudioCTA from "@/components/StudioCTA";
import StructuredData from "@/components/StructuredData";
import { organizationSchema } from "@/lib/structured-data";
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={organizationSchema} />
      <Hero />
      <div className="wrap service-strip">
        <span>
          <i aria-hidden="true">✳</i> Websites with intention
        </span>
        <span>
          <i aria-hidden="true">✳</i> Design with personality
        </span>
        <span>
          <i aria-hidden="true">✳</i> Social with a strategy
        </span>
        <span>Made for your next chapter ↗</span>
      </div>
      <Services />
      <FeaturedWork />
      <AboutUs />
      <OurProcess />
      <StudioCTA />
    </main>
  );
}
