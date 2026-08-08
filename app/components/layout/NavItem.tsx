import Link from "next/link";

export default function NavItem({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <li className="space-x-2" onClick={onClick}>
      <Link
        href={href}
        className="flex items-center text-lg lg:text-2xl px-6 hover:scale-110 
        transition-all duration-150 ease-in-out h-full
        shadow-sm rounded-xl py-2 lg:py-0 lg:shadow-none"
      >
        {label}
      </Link>
    </li>
  );
}
