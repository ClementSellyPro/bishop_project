export default function HeroAbout() {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
        backgroundImage: "url('/about_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-gray-50/30 px-10 py-30 rounded-xl w-3/5 backdrop-blur-md">
        <h1 className="kaisei-opti-regular text-7xl font-bold mb-10 text-center">
          À PROPOS
        </h1>
        <p className="text-center text-xl">
          Le club a été créé en 2025 par quelques passionnés du jeu d'échecs.{" "}
          <br />
          L'objectif est de créer un espace bienveillant et de transmettre la
          passion pour ce jeu millénaire !{" "}
        </p>
      </div>
    </div>
  );
}
