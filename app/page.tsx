import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";
import WhyDigitalMatters from "@/components/WhyDigitalMatters";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <WhyDigitalMatters />
      <AboutUs />
      <OurProcess />
      <Footer />
    </main>
  );
}
