import Header from "./components/Header";
import Hero from "./components/page/Home/Hero";
import Container from "./components/shared/Container";
import Presentation from "./components/page/Home/Presentation";
import Reseaux from "./components/page/Home/Reseaux";
import Contact from "./components/page/Home/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <Presentation />

      <Reseaux />

      <Contact />
    </div>
  );
}
