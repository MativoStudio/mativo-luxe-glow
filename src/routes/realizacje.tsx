import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { ArrowUpRight, UtensilsCrossed, Sparkles, Wrench } from "lucide-react";

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: "Realizacje — Mativo Studio" },
      { name: "description", content: "Zobacz nasze realizacje: strony dla restauracji, salonów paznokci i mechaników samochodowych." },
      { property: "og:title", content: "Realizacje — Mativo Studio" },
      { property: "og:description", content: "Portfolio Mativo Studio — projekty, które dowożą wyniki." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { icon: UtensilsCrossed, title: "Restauracja Bella", cat: "Strona + rezerwacje", desc: "Elegancka strona z systemem rezerwacji online. Wzrost rezerwacji o 240%.", grad: "linear-gradient(135deg, oklch(0.45 0.2 25), oklch(0.35 0.18 350))", accent: "oklch(0.8 0.18 25)" },
  { icon: Sparkles, title: "NailLab Studio", cat: "Salon paznokci", desc: "Minimalistyczna strona dla salonu z kalendarzem online i Instagram feed.", grad: "linear-gradient(135deg, oklch(0.5 0.2 320), oklch(0.4 0.18 285))", accent: "oklch(0.8 0.18 320)" },
  { icon: Wrench, title: "MotoFix Mechanik", cat: "Warsztat samochodowy", desc: "Strona dla warsztatu z formularzem zgłoszeń i lokalnym SEO.", grad: "linear-gradient(135deg, oklch(0.45 0.2 240), oklch(0.35 0.15 220))", accent: "oklch(0.8 0.18 240)" },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="REALIZACJE"
          title={<>Projekty, które <span className="text-gradient-primary">dowożą wyniki</span>.</>}
          subtitle="Wybrane realizacje dla firm z różnych branż — od gastronomii po motoryzację."
        />
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={p.title} href="#" className="group relative block glass rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-primary/60 transition-all reveal" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-110" style={{ background: p.grad }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 50%)" }} />
                <div className="absolute inset-6 rounded-xl bg-background/40 backdrop-blur-md border border-white/10 p-4 flex flex-col">
                  <div className="flex gap-1.5 mb-3">
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p.icon className="h-16 w-16 opacity-90" style={{ color: p.accent }} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 rounded-full bg-white/20 w-3/4" />
                    <div className="h-1.5 rounded-full bg-white/15 w-1/2" />
                  </div>
                </div>
              </div>
              <div className="p-7">
                <p className="text-[10px] tracking-[0.25em] text-primary mb-2">{p.cat.toUpperCase()}</p>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 flex justify-center reveal">
        <CTAButton to="/kontakt">CHCĘ TAKĄ STRONĘ</CTAButton>
      </section>
    </SiteLayout>
  );
}
