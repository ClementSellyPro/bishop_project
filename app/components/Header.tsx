import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between bg-white text-gray-800 py-5 px-28">
        <Link href="/" className="hover:opacity-80">
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
        </Link>

        <Nav />
      </div>
    </header>
  );
}
