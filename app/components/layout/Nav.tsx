"use client";

import Image from "next/image";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  useEffect(() => {
    window.addEventListener("scroll", closeMenu);

    return () => {
      window.removeEventListener("scroll", closeMenu);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className="bg-transparent text-black p-4 relative">
        <Image
          src="/icon/hamburger.png"
          alt="Bouton de menu"
          width={70}
          height={70}
          className="w-10 lg:w-20 lg:hidden cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />

        <ul className="hidden lg:flex gap-4 lg:h-10 px-4 bg-transparent w-auto">
          <NavItem href="/" label="Accueil" onClick={closeMenu} />
          <NavItem href="/cours" label="Cours" onClick={closeMenu} />
          <NavItem href="/evenements" label="Événements" onClick={closeMenu} />
          <NavItem href="/contact" label="Contact" onClick={closeMenu} />
          <NavItem href="/about" label="À propos" onClick={closeMenu} />
        </ul>

        {isMenuOpen && (
          <ul
            className="lg:hidden flex flex-col gap-4 px-4 pt-4 pb-8 
          bg-white absolute top-18 -right-4 w-screen h-auto
            shadow-lg z-50 rounded-xl"
          >
            <NavItem href="/" label="Accueil" onClick={closeMenu} />
            <NavItem href="/cours" label="Cours" onClick={closeMenu} />
            <NavItem
              href="/evenements"
              label="Événements"
              onClick={closeMenu}
            />
            <NavItem href="/contact" label="Contact" onClick={closeMenu} />
            <NavItem href="/about" label="À propos" onClick={closeMenu} />
          </ul>
        )}
      </nav>
    </>
  );
}
