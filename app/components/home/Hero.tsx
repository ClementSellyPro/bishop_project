import Background from "./Background";
import RotatingWords from "./RotatingWords";

export default function Hero() {
  return (
    <div className="min-h-screen pt-10">
      <Background />

      <div className="flex flex-col justify-center gap-6 pt-40 px-4 lg:px-28 py-2 lg:py-30 h-screen">
        <RotatingWords
          words={[
            "Animations",
            "Initiations",
            "Perfectionnement",
            "Tournois",
            "Jeunes et adultes",
          ]}
          visibleCount={5}
        />

        <div className="flex items-end justify-between mt-42">
          <div>
            <h1 className="text-4xl lg:text-7xl font-bold text-white">
              Les fous de Sin-Dni
            </h1>
            <p className="text-2xl lg:text-3xl font-light tracking-[14px] text-white">
              Club d'échecs à Saint-Denis
            </p>
          </div>

          <div className="font-semibold text-white text-xl bg-lime-700 w-fit px-6 py-3 rounded-lg">
            Ouvert à TOUS
          </div>
        </div>
      </div>
    </div>
  );
}
