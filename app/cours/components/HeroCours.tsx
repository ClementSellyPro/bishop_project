export default function HeroCours() {
  return (
    <div
      className="min-h-screen flex flex-col gap-10 justify-center items-center"
      style={{
        backgroundImage: "url('/cours_bg.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-gray-50/30 py-6 rounded-xl w-3/5 backdrop-blur-md">
        <h1 className="kaisei-opti-regular text-7xl font-bold text-center">
          LES COURS DU CLUB
        </h1>
      </div>
      <section className="flex flex-col gap-8 text-lg px-12 py-10 bg-[#282828] border-[#229B3C] border-2 text-[#F2F2F2] rounded-xl w-3/5">
        <h2 className="kaisei-opti-regular text-5xl">Cours d'échecs Adultes</h2>

        <p>
          Le club propose des cours adultes, pour tout les niveaux, les
          dimanches soirs (à partir du 5 avril), au 3 brasseurs de Sainte-Marie.
        </p>
        <p>
          Les séances auront lieu les jeudis soirs (19h à 20h30) et les
          dimanches soirs après le tournoi ChessBar (20h à 21h30)
        </p>
        <p>
          Venez apprendre et booster votre élo avec nos coach dans une ambiance
          conviviale !
        </p>
        <p>
          Les prix affichés correspondent à ceux de la fin de saison, nous
          feront des prix au prorata le cas échéant.
        </p>
        <p>
          Pour toutes informations complémentaires, contactez nous sur notre
          mail ou sur nos réseaux.
        </p>
        <p>Nous vous attendons nombreuses et nombreux !</p>
      </section>
    </div>
  );
}
