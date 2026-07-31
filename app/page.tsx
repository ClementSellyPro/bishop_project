import Hero from "./components/home/Hero";
import Presentation from "./components/home/Presentation";
import Reseaux from "./components/home/Reseaux";
import Contact from "./components/home/Contact";

export default function Home() {
  return (
    <div>
      <Hero />

      <Presentation />

      <Reseaux />

      <Contact />
    </div>
  );
}
