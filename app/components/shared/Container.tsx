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
  theme,
  children,
}: {
  theme: "light" | "dark";
  children?: React.ReactNode;
}) {
  const variant = variants[theme];

  return (
    <div
      className={`h-screen flex items-center justify-center relative ${variant.section}`}
    >
      <div className="absolute top-0 inset-x-0 h-24">
        <Image
          src={`/${variant.banner}`}
          alt=""
          fill
          className="object-cover"
        />
      </div>
      <div
        className={`${variant.box} border-2  rounded-lg p-4 w-8/12 md:w-6/12 lg:w-9/12 h-10/12 md:h-6/12 lg:h-8/12 flex items-center justify-center`}
      >
        {children}
      </div>
    </div>
  );
}
