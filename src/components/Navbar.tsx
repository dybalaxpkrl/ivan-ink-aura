import { useState, useEffect } from "react";

const navItems = [
  { id: "portfolio", label: "Portfólio" },
  { id: "sobre", label: "Sobre" },
  { id: "processo", label: "Processo" },
  { id: "cuidados", label: "Cuidados" },
  { id: "contato", label: "Contato" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#hero" className="font-display text-xl tracking-wider text-foreground">
          IVAN TATTO
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-[1px] bg-foreground transition-transform duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-[1px] bg-foreground transition-opacity duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-[1px] bg-foreground transition-transform duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 bg-background/95 backdrop-blur-lg ${
          menuOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMenuOpen(false)}
              className="block text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
