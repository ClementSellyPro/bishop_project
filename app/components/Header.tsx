import Image from "next/image";
import Nav from "./Nav";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0">
      <div className="flex items-center justify-between bg-white text-gray-800 py-6 px-28">
        <Link href="/" className="hover:opacity-80">
          <Image src="/logo.png" alt="Logo" width={80} height={80} />
        </Link>

        <Nav />
      </div>
    </header>
  );
}
