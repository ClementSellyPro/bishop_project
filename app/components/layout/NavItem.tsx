import Link from "next/link";

export default function NavItem({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  return (
    <li className="space-x-2">
      <Link
        href={href}
        className="flex items-center text-lg lg:text-2xl px-6 hover:scale-110 transition-all duration-150 ease-in-out h-full"
      >
        {label}
      </Link>
    </li>
  );
}
