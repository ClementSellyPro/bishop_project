import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav className="bg-transparent text-black p-4">
      <ul className="flex h-10 px-4">
        <NavItem href="/" label="Accueil" />
        <NavItem href="/cours" label="Cours" />
        <NavItem href="/evenements" label="Événements" />
        <NavItem href="/contact" label="Contact" />
        <NavItem href="/about" label="À propos" />
      </ul>
    </nav>
  );
}
