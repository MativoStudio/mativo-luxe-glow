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

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "py-3 backdrop-blur-xl bg-background/80 border-b border-border"
          : "py-4 md:py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
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
          aria-expanded={open}
          className="lg:hidden inline-flex items-center justify-center h-11 w-11 rounded-lg border border-border bg-secondary/40 backdrop-blur-md active:scale-95 transition-transform"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <>
          <div
            className="lg:hidden fixed inset-0 top-[64px] bg-background/85 backdrop-blur-xl -z-[1]"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden absolute top-full inset-x-0 border-t border-primary/20 bg-background/95 backdrop-blur-2xl shadow-2xl animate-fade-up">
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3.5 rounded-lg text-base font-medium tracking-wide text-foreground/90 hover:text-foreground hover:bg-secondary/70 transition-colors"
                  activeProps={{ className: "text-foreground bg-secondary/70" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/kontakt"
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-gradient-primary text-[11px] font-semibold tracking-[0.22em] text-primary-foreground glow"
              >
                DARMOWA WYCENA <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
