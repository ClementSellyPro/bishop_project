import Image from "next/image";

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10">
      <Image
        src="/bg_0.jpg"
        alt="Background"
        fill
        sizes="100vw"
        className=" object-cover lg:object-fill"
      />
      <div className="absolute inset-0 bg-black/15"></div>
    </div>
  );
}
