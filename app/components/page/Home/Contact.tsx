import Image from "next/image";
import Container from "../../shared/Container";

export default function Contact() {
  return (
    <Container theme="light">
      <div className="ml-20 mt-14 w-7/12 relative">
        <h2 className="kaisei-opti-regular text-7xl font-semibold mb-12">
          CONTACT
        </h2>
        <div className="mt-14 flex flex-col gap-8 text-4xl font-light tracking-wide">
          <div className="flex items-center gap-6">
            <Image src="/icon/email.png" alt="Email" width={50} height={50} />
            <a
              href="mailto:lesfous2sindni@gmail.com"
              className="hover:underline"
            >
              lesfous2sindni@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Image
              src="/icon/telephone.png"
              alt="Téléphone"
              width={50}
              height={50}
            />
            <a href="tel:+262693820174" className="hover:underline">
              +262 6 93 820 174
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Image
              src="/icon/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
            />
            <a
              href="https://www.instagram.com/lesfous.sindni_974"
              target="_blank"
              className="hover:underline"
            >
              @lesfous.sindni_974
            </a>
          </div>

          <div className="flex items-center gap-6">
            <Image
              src="/icon/facebook.png"
              alt="Facebook"
              width={50}
              height={50}
            />
            <a
              href="https://www.facebook.com/people/Les-Fous-Sin-Dni/61583722233152/"
              target="_blank"
              className="hover:underline"
            >
              Les Fous Sin-Dni
            </a>
          </div>
        </div>

        <Image
          src="/illustration_2.png"
          alt="Contact"
          width={800}
          height={800}
          className="absolute -right-150 top-20"
        />
      </div>
    </Container>
  );
}
