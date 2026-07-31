import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="flex flex-col justify-center items-center bg-[#151515] text-white py-4 px-8 min-h-100 relative">
        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{
            backgroundImage: "url('/footer_bg.svg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="flex gap-10 items-center mb-4">
            <Image src="/ffe.jpg" alt="Logo FFE" width={150} height={150} />
            <Image src="/lrje.png" alt="Logo LRJE" width={150} height={150} />
          </div>
          <p>
            &copy; {new Date().getFullYear()} Les fous de Sin-Dni. Tous droits
            réservés.
          </p>
        </div>

        <Image
          src="/echiquier_vert.svg"
          alt="Club d'échecs saint denis"
          width={500}
          height={100}
          className="absolute top-0 left-0 w-full"
        />
      </footer>
      <div className="bg-[#229B3C] py-24 px-20">
        <Image
          src="/fous_text.svg"
          alt="Logo du club"
          width={200}
          height={100}
          className="w-full"
        />
      </div>
    </>
  );
}
