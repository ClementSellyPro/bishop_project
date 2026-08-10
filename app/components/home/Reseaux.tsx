import Container from "../shared/Container";
import Image from "next/image";

export default function Reseaux() {
  return (
    <Container theme="dark">
      <div className="py-10 px-6 lg:px-14 w-full relative">
        <h2 className="kaisei-opti-regular text-3xl lg:text-6xl font-semibold text-center">
          Retrouvez nous sur nos réseaux
        </h2>
        <div className="flex flex-col lg:flex-row justify-end gap-10 lg:gap-20 px-2 lg:px-0 mt-10 lg:mt-18 mr-10">
          <a
            href="https://www.facebook.com/people/Les-Fous-Sin-Dni/61583722233152/"
            target="_blank"
          >
            <div className="w-68 h-87.5 border rounded-2xl bg-white/15 hover:bg-white/30"></div>
          </a>
          <a
            href="https://www.instagram.com/lesfous.sindni_974"
            target="_blank"
          >
            <div className="w-68 h-87.5 border rounded-2xl bg-white/15 hover:bg-white/30"></div>
          </a>
        </div>
        <Image
          src="/illustration.png"
          alt="Réseaux"
          width={750}
          height={750}
          className="block lg:absolute -left-60 top-5"
        />
      </div>
    </Container>
  );
}
