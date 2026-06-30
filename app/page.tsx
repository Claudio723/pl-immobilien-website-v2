import Hero from "@/components/Hero";
import USPStrip from "@/components/USPStrip";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <USPStrip />
      <Services />
      <Properties />
      <About />
      <Contact />
    </main>
  );
}
