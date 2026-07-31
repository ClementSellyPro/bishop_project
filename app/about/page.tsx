import Membres from "./components/Membre";
import Partenaire from "./components/Partenaire";

export default function About() {
  return (
    <div className="pt-28">
      {/* 
        <div className="px-4 py-6">
          <h1 className="kaisei-opti-regular text-7xl font-bold mb-4">
            À propos
          </h1>
          <h2 className="text-4xl font-semibold mb-4">Un peu d'histoire</h2>
          <p>
            Le club a été créé en 2025 par quelques passionnés du jeu d'échecs.
            L'objectif est de créer un espace bienveillant et de transmettre la
            passion pour ce jeu millénaire !{" "}
          </p>
        </div>
      */}
      <Partenaire />
      <Membres />
    </div>
  );
}
