"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setIsMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-ivory/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link to="/" className="font-display text-2xl tracking-widest uppercase text-midnight">
          Ilaria Rubei
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm tracking-wide text-midnight/80">
          <a href="/#about" className="hover:text-dusty-rose transition-colors">Rencontre</a>
          <Link to="/accompagnement" className="hover:text-dusty-rose transition-colors">Accompagnements</Link>
          <a href="/#outils" className="hover:text-dusty-rose transition-colors">Outils</a>
          <a href="/#parcours" className="hover:text-dusty-rose transition-colors">Tarifs</a>
          <a href="/#book" className="hover:text-dusty-rose transition-colors">Livre</a>
          <Link to="/blog" className="hover:text-dusty-rose transition-colors">Journal</Link>
          <a href="#contact" className="hover:text-dusty-rose transition-colors">Contact</a>
          <a
            href="https://calendly.com/ilariarubei/rdv-decouverte"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-6 py-2.5 rounded-full border border-midnight/20 hover:bg-midnight hover:text-ivory transition-all duration-300"
          >
            Réserver
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-midnight"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-ivory shadow-lg py-8 px-6 flex flex-col gap-6 font-sans text-lg text-midnight border-t border-linen">
          <a href="/#about" onClick={closeMobile}>Rencontre</a>
          <Link to="/accompagnement" onClick={closeMobile}>Accompagnements</Link>
          <a href="/#outils" onClick={closeMobile}>Outils</a>
          <a href="/#parcours" onClick={closeMobile}>Tarifs</a>
          <a href="/#book" onClick={closeMobile}>Livre</a>
          <Link to="/formations" onClick={closeMobile}>Formations</Link>
          <Link to="/blog" onClick={closeMobile}>Journal</Link>
          <a href="#contact" onClick={closeMobile}>Contact</a>
          <a
            href="https://calendly.com/ilariarubei/rdv-decouverte"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="inline-block text-center mt-4 px-6 py-3 rounded-full bg-midnight text-ivory"
          >
            Réserver
          </a>
        </div>
      )}
    </header>
  );
}
