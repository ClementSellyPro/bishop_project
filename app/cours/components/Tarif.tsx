import Container from "@/app/components/shared/Container";
import Image from "next/image";

export default function Tarif() {
  return (
    <Container>
      <div className="ml-20 mt-14 w-7/12 relative">
        <h2 className="kaisei-opti-regular text-7xl font-semibold mb-12">
          TARIFS
        </h2>

        <section className="flex flex-col gap-8">
          <p>
            <span className="text-3xl">Adultes plein tarif :</span>{" "}
            <span className="text-[#305BD4] text-4xl font-bold">
              55€ (4,50€/Séance)
            </span>
          </p>

          <p>
            <span className="text-3xl">Adultes tarif solidaire* :</span>{" "}
            <span className="text-[#305BD4] text-4xl font-bold">
              40€ (3,30€/Séance)
            </span>
          </p>

          <p>
            <span className="text-3xl">Cours à la carte :</span>{" "}
            <span className="text-[#305BD4] text-4xl font-bold">
              10€/Séance
            </span>
          </p>

          <p>
            <span className="text-3xl">
              Option: Licence B (permet de jouer en tournoi homologués rapides)
            </span>{" "}
            <span className="text-[#305BD4] text-4xl font-bold">
              8€ pour la séance
            </span>
          </p>
        </section>

        <p className="text-sm mt-4">
          *Etudiant-e-s, bénéficiaires du RSA, ASS, CCAS, AAH, Demandeurs
          d'emplois, réfugié-e-s, <br /> 2e membre de la famille
        </p>

        <p className="mt-8 text-xl font-semibold text-[#229B3C]">
          Paiement sur place (espèces, chèque, carte bancaire ou par virement)
        </p>

        <Image
          src="/illustration_2.png"
          alt="Contact"
          width={800}
          height={800}
          className="absolute -right-160 top-20"
        />
      </div>
    </Container>
  );
}
