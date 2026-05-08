import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background/60">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="container mx-auto px-6 py-16 relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-6 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Małe studio webowe z Częstochowy. Robię nowoczesne, szybkie strony dla lokalnych biznesów i marek osobistych.
            </p>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.25em] text-muted-foreground mb-4">NAWIGACJA</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/o-nas" className="hover:text-primary transition-colors">O studiu</Link></li>
              <li><Link to="/uslugi" className="hover:text-primary transition-colors">Usługi</Link></li>
              <li><Link to="/realizacje" className="hover:text-primary transition-colors">Realizacje</Link></li>
              <li><Link to="/cennik" className="hover:text-primary transition-colors">Cennik</Link></li>
              <li><Link to="/kontakt" className="hover:text-primary transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.25em] text-muted-foreground mb-4">KONTAKT</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="mailto:kontakt@mativostudio.pl" className="hover:text-primary transition-colors">kontakt@mativostudio.pl</a></li>
              <li><a href="tel:+48889521418" className="hover:text-primary transition-colors">+48 889 521 418</a></li>
              <li className="text-muted-foreground">Częstochowa, Polska</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Mativo Studio. Wszystkie prawa zastrzeżone.</p>
          <p>Zaprojektowane i zakodowane w Polsce.</p>
        </div>
      </div>
    </footer>
  );
}
