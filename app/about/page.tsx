import HeroAbout from "./components/HeroAbout";
import Membres from "./components/Membre";
import Partenaire from "./components/Partenaire";

export default function About() {
  return (
    <div className="pt-28">
      <HeroAbout />

      <Partenaire />

      <Membres />
    </div>
  );
}
