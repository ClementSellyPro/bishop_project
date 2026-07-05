import Image from "next/image";
import Link from "next/link";

export default function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li className="group flex flex-col items-center space-x-2 w-24">
      <Link href={href} className="group-hover:font-semibold">
        {label}
      </Link>
      <Image
        className="hidden group-hover:block transition-all duration-300 ease-in-out"
        src="/triangle.svg"
        alt="Logo"
        width={14}
        height={14}
      />
    </li>
  );
}
