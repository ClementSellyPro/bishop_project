import Image from "next/image";

export default function Calendar() {
  return (
    <div
      className="min-h-screen pt-20 flex items-center justify-center relative bg-[#F2F2F2] text-[#121212]"
      style={{
        backgroundImage: "url('/event_bg.png')",
        backgroundRepeat: "repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        className={`bg-white border-[#305BD4] flex flex-col border-2 rounded-4xl p-4 pb-12 w-8/12 md:w-6/12 lg:w-9/12 h-10/12 md:h-6/12 lg:h-8/12`}
      >
        <h1 className="kaisei-opti-regular text-5xl text-center mt-8">
          LE PROGRAMME DU MOIS
        </h1>

        {/* Programme du mois */}
        <div className="flex flex-col gap-4 mt-14 text-2xl px-0 md:px-8 lg:px-16">
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">01/01/2000 :</p>
            <p>Cours/entrainement du club</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">02/01/2000 :</p>
            <p>Animation médiathèque</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">01/01/2000 :</p>
            <p>Cours/entrainement du club</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">02/01/2000 :</p>
            <p>Animation médiathèque</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">01/01/2000 :</p>
            <p>Cours/entrainement du club</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">02/01/2000 :</p>
            <p>Animation médiathèque</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">01/01/2000 :</p>
            <p>Cours/entrainement du club</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">02/01/2000 :</p>
            <p>Animation médiathèque</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">01/01/2000 :</p>
            <p>Cours/entrainement du club</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">02/01/2000 :</p>
            <p>Animation médiathèque</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">01/01/2000 :</p>
            <p>Cours/entrainement du club</p>
          </div>
          <div className="flex gap-4">
            <p className="text-[#305BD4] font-bold">02/01/2000 :</p>
            <p>Animation médiathèque</p>
          </div>
        </div>
      </div>
    </div>
  );
}
