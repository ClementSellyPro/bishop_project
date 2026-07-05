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
    <li className="group space-x-2 w-24">
      <Link
        href={href}
        className="flex flex-col items-center group-hover:font-semibold"
      >
        {label}
        <Image
          className="hidden group-hover:block transition-all duration-300 ease-in-out"
          src="/triangle.svg"
          alt="Logo"
          width={14}
          height={14}
        />
      </Link>
    </li>
  );
}
