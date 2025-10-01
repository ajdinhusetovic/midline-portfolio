import Hero from "@/components/Hero";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main
      className="h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/background.jpg')",
      }}
    >
      <Hero />
      <Services />
    </main>
  );
}
