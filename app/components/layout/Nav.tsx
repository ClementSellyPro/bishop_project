import NavItem from "./NavItem";

export default function Nav() {
  return (
    <nav className="text-lg bg-transparent text-black p-4">
      <ul className="flex h-10 px-4">
        <NavItem href="/" label="Accueil" />
        <NavItem href="/" label="Cours" />
        <NavItem href="/actualité" label="Actualités" />
        <NavItem href="/contact" label="Contact" />
        <NavItem href="/about" label="À propos" />
      </ul>
    </nav>
  );
}
