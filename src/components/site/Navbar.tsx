import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/o-nas", label: "O nas" },
  { to: "/uslugi", label: "Usługi" },
  { to: "/realizacje", label: "Realizacje" },
  { to: "/cennik", label: "Cennik" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3 backdrop-blur-xl bg-background/70 border-b border-border" : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="shrink-0">
          <Logo />
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="relative text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors group"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label.toUpperCase()}
              <span className="absolute -bottom-1.5 left-0 right-0 h-0.5 bg-gradient-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>

        <Link
          to="/kontakt"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-secondary/40 backdrop-blur-md text-xs font-semibold tracking-wider hover:border-primary hover:glow transition-all"
        >
          DARMOWA WYCENA
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>

        <button
          aria-label="Menu"
          className="lg:hidden p-2 rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden absolute top-full inset-x-0 glass border-t border-border">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground"
              >
                {l.label.toUpperCase()}
              </Link>
            ))}
            <Link
              to="/kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gradient-primary text-xs font-semibold tracking-wider"
            >
              DARMOWA WYCENA <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}