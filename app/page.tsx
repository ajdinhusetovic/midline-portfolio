import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="mb-20">
      <Hero />
      <Services />
      <AboutUs />
    </main>
  );
}
