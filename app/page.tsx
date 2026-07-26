import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/page/Home/Hero";
import Container from "./components/shared/Container";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <Container theme="light">
        <div className="ml-20 mt-14 w-7/12 relative">
          <h2 className="kaisei-opti-regular text-7xl font-semibold mb-12">
            PRESENTATION
          </h2>
          <section className="flex flex-col gap-4 text-xl tracking-wide">
            <p>
              Nous proposons des cours d'initiation, de perfectionnement ouvert
              à tous, enfants et adultes 🧒👧
            </p>
            <p>
              Nous organisons aussi diverses animations : Tournois, Ateliers
              d'initiation, Rencontres amicales etc. 🔥
            </p>
            <p>
              Notre club est affilié à la Fédération Française des Échecs (FFE)
              et à la Ligue Réunionnaise du Jeu d’Échecs (LRJE) 🤝 ♟️
            </p>
            <p>
              Le club est une association loi 1901 qui a pour but de promouvoir
              la pratique, ainsi que le développement du jeu d'échecs ♟️
            </p>
          </section>
          <Image
            src="/illustration_0.png"
            alt="Présentation"
            width={800}
            height={800}
            className="absolute -right-170 -top-30"
          />
        </div>
      </Container>

      <Container theme="dark">
        <p>TEST</p>
      </Container>

      <Container theme="light">
        <p>TEST</p>
      </Container>
    </div>
  );
}
