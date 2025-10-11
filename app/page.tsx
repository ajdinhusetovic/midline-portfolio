import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import OurProcess from "@/components/OurProcess";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Services />
      <AboutUs />
      <OurProcess />
      <Footer />
    </main>
  );
}
