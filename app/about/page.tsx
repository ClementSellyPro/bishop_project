import HeroAbout from "./components/HeroAbout";
import Membres from "./components/Membre";
import Partenaire from "./components/Partenaire";

export default function About() {
  return (
    <div>
      <HeroAbout />

      <Partenaire />

      <Membres />
    </div>
  );
}
