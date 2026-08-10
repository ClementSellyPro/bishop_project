import Container from "../../components/shared/Container";
import Image from "next/image";

export default function Partenaire() {
  return (
    <Container theme="dark">
      <div className="m-3 lg:m-0 px-0 lg:px-4 py-4 lg:py-10 h-full bg-[#229b3c] rounded-xl lg:rounded-2xl">
        <h2 className="kaisei-opti-regular text-3xl lg:text-6xl font-semibold mb-10 lg:mb-14 text-center">
          Nos Partenaires
        </h2>

        <div className="flex flex-col gap-16 lg:gap-20 mt-6">
          <div className="flex justify-around gap-4">
            <Image
              src="/ffe.jpg"
              alt="Partenaire 1"
              className="rounded-xl w-24 lg:w-50 h-18 lg:h-39"
              width={200}
              height={100}
            />
            <Image
              src="/lrje.png"
              alt="Partenaire 2"
              className="rounded-xl w-24 lg:w-50 h-18 lg:h-39"
              width={200}
              height={100}
            />
          </div>

          <div className="flex justify-around gap-4">
            <Image
              src="/3b.png"
              alt="Partenaire 3"
              width={250}
              height={100}
              className="rounded-xl w-24 lg:w-50 h-16 lg:h-39"
            />
            <Image
              src="/media.png"
              alt="Partenaire 4"
              className="rounded-xl w-24 lg:w-50 h-18 lg:h-39"
              width={200}
              height={100}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
