import Hero from "@/components/Hero";
import About from "@/components/About";
import Service from "@/components/Service";
import Work from "@/components/Work";
import Review from "@/components/Review";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Work />
      {/* <Review /> */}
      <Cta />
    </main>
  );
}
