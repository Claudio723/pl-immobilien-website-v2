import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Properties from "@/components/Properties";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Services />
      <Properties />
      <About />
      <Contact />
    </main>
  );
}
