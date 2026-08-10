import Image from "next/image";

const variants = {
  light: {
    section: "bg-[#F2F2F2] text-[#121212]",
    box: "bg-white border-[#305BD4]",
    banner: "echiquier_bleu.svg",
  },
  dark: {
    section: "bg-[#121212] text-[#F2F2F2]",
    box: "bg-[#282828] border-[#229B3C]",
    banner: "echiquier_vert.svg",
  },
};

export default function Container({
  theme = "light",
  children,
}: {
  theme?: "light" | "dark";
  children?: React.ReactNode;
}) {
  const variant = variants[theme];

  return (
    <div
      className={`min-h-[70vh] lg:h-screen flex items-center justify-center relative pb-8 pt-20 lg:pt-0 ${variant.section}`}
    >
      {/* Echiquier banner on the top */}
      <div className="absolute top-0 inset-x-0 h-16 sm:h-20 lg:h-24">
        <Image
          src={`/${variant.banner}`}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* content */}
      <div
        className={`${variant.box} flex flex-col border-2 rounded-2xl lg:rounded-4xl p-0 pb-8 lg:p-4 w-11/12 md:w-6/12 lg:w-9/12 h-10/12 md:h-6/12 lg:h-8/12`}
      >
        {children}
      </div>
    </div>
  );
}
