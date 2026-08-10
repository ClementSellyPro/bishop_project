import Image from "next/image";
import Container from "../../components/shared/Container";

export default function Membres() {
  return (
    <Container>
      <div className="py-8">
        <h2 className="kaisei-opti-regular text-3xl lg:text-6xl font-semibold mb-14 text-center">
          L'équipe dirigeante
        </h2>

        <div className="flex justify-around flex-col lg:flex-row gap-10 lg:gap-0">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/membre0.png"
              alt="dirigeant"
              width={180}
              height={180}
            />
            <div className="relative">
              <Image
                src="/name_bg.png"
                alt="dirigeant"
                width={350}
                height={200}
              />
              <span className="absolute top-1/2 left-20 text-xl font-semibold">
                fljqsdkfj LSQKDFJ
              </span>
            </div>
            <span className="kaisei-opti-regular text-xl">Président</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/membre1.png"
              alt="dirigeant"
              width={175}
              height={175}
            />
            <div className="relative">
              <Image
                src="/name_bg.png"
                alt="dirigeant"
                width={350}
                height={200}
              />
              <span className="absolute top-1/2 left-15 text-xl font-semibold">
                qskjdfh QSKJDFHQS
              </span>
            </div>
            <span className="kaisei-opti-regular text-xl">Trésorière</span>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/membre0.png"
              alt="dirigeant"
              width={180}
              height={180}
            />
            <div className="relative">
              <Image
                src="/name_bg.png"
                alt="dirigeant"
                width={350}
                height={200}
              />
              <span className="absolute top-1/2 left-15 text-xl font-semibold">
                jkqshdfj QSLOIEUR
              </span>
            </div>
            <span className="kaisei-opti-regular text-xl">Secrétaire</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
