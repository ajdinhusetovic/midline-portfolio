import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";
import WhyDigitalMatters from "@/components/WhyDigitalMatters";
import ServiceAreas from "@/components/ServiceAreas";
import StructuredData from "@/components/StructuredData";
import { organizationSchema } from "@/lib/structured-data";
import FeaturedWork from "@/components/FeaturedWork";
export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      <StructuredData data={organizationSchema} />
      <Hero />
      <FeaturedWork />
      <Services />
      <WhyDigitalMatters />
      <ServiceAreas />
      <AboutUs />
      <OurProcess />
    </main>
  );
}
