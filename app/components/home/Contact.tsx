import Image from "next/image";
import Container from "../shared/Container";

export default function Contact() {
  return (
    <Container theme="light">
      <div className="px-4 sm:px-6 lg:px-0 lg:ml-20 mt-8 lg:mt-14 w-full lg:w-7/12 relative">
        <h2 className="kaisei-opti-regular text-3xl sm:text-4xl lg:text-7xl font-semibold mb-4 lg:mb-12">
          CONTACT
        </h2>
        <div className="mt-6 lg:mt-14 flex flex-col gap-4 lg:gap-8 text-lg sm:text-xl lg:text-4xl font-light tracking-wide">
          <div className="flex items-center gap-2 lg:gap-6">
            <Image
              src="/icon/email.png"
              alt="Email"
              width={50}
              height={50}
              className="w-8 lg:w-13"
            />
            <a
              href="mailto:lesfous2sindni@gmail.com"
              className="hover:underline"
            >
              lesfous2sindni@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <Image
              src="/icon/telephone.png"
              alt="Téléphone"
              width={50}
              height={50}
              className="w-8 lg:w-13"
            />
            <a href="tel:+262693820174" className="hover:underline">
              +262 6 93 820 174
            </a>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <Image
              src="/icon/instagram.png"
              alt="Instagram"
              width={50}
              height={50}
              className="w-8 lg:w-13"
            />
            <a
              href="https://www.instagram.com/lesfous.sindni_974"
              target="_blank"
              className="hover:underline"
            >
              @lesfous.sindni_974
            </a>
          </div>

          <div className="flex items-center gap-4 lg:gap-6">
            <Image
              src="/icon/facebook.png"
              alt="Facebook"
              width={50}
              height={50}
              className="w-8 lg:w-13"
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
          src="/contact.png"
          alt="Contact"
          width={800}
          height={800}
          className="hidden lg:block absolute -right-150 top-20"
        />
      </div>
    </Container>
  );
}
