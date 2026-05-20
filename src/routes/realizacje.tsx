import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { ArrowUpRight, Scissors, Sparkles, Car, UtensilsCrossed, Dumbbell, User } from "lucide-react";

export const Route = createFileRoute("/realizacje")({
  head: () => ({
    meta: [
      { title: "Realizacje — Mativo Studio" },
      { name: "description", content: "Strony www dla salonów beauty, barber shopów, detailingu, restauracji, siłowni i marek osobistych." },
      { property: "og:title", content: "Realizacje — Mativo Studio" },
      { property: "og:description", content: "Wybrane projekty dla lokalnych firm." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  { icon: Sparkles, title: "Salon beauty Lumea", cat: "Salon kosmetyczny", desc: "Strona z cennikiem, galerią i rezerwacją online przez Booksy.", grad: "linear-gradient(135deg, oklch(0.5 0.2 320), oklch(0.4 0.18 285))", accent: "oklch(0.85 0.15 320)" },
  { icon: Scissors, title: "Nordic Barber", cat: "Barber shop", desc: "Mocna, męska estetyka. Cennik usług, zespół, rezerwacja online.", grad: "linear-gradient(135deg, oklch(0.3 0.05 250), oklch(0.2 0.04 260))", accent: "oklch(0.85 0.05 250)" },
  { icon: Car, title: "Apex Detailing", cat: "Studio detailingu", desc: "Galeria realizacji, pakiety usług i formularz zgłoszeń auta.", grad: "linear-gradient(135deg, oklch(0.45 0.2 240), oklch(0.3 0.15 260))", accent: "oklch(0.85 0.18 240)" },
  { icon: UtensilsCrossed, title: "Trattoria Bella", cat: "Restauracja", desc: "Karta menu, galeria dań i system rezerwacji stolików online.", grad: "linear-gradient(135deg, oklch(0.45 0.2 25), oklch(0.35 0.18 350))", accent: "oklch(0.85 0.18 25)" },
  { icon: Dumbbell, title: "Forge Gym", cat: "Siłownia / klub fitness", desc: "Grafik zajęć, oferta karnetów i sekcja trenerów personalnych.", grad: "linear-gradient(135deg, oklch(0.4 0.15 30), oklch(0.25 0.1 20))", accent: "oklch(0.85 0.18 35)" },
  { icon: User, title: "Marta Kowalska — Trener", cat: "Marka osobista", desc: "Strona trenera personalnego — oferta, opinie, kontakt i zapis na konsultację.", grad: "linear-gradient(135deg, oklch(0.45 0.18 200), oklch(0.35 0.15 230))", accent: "oklch(0.85 0.15 200)" },
];

function PortfolioPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SectionHeader
          eyebrow="REALIZACJE"
          title={<>Strony dla <span className="text-gradient-primary">prawdziwych biznesów</span>.</>}
          subtitle="Wybrane projekty dla lokalnych firm — salonów beauty, barber shopów, restauracji, detailingu, siłowni i marek osobistych."
        />
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div data-proximity-group className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <a key={p.title} href="#" data-proximity-item className="group relative block glass rounded-3xl overflow-hidden hover:-translate-y-1.5 hover:border-primary/60 transition-all reveal" style={{ transitionDelay: `${i * 70}ms` }}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105" style={{ background: p.grad }} />
                <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), transparent 50%)" }} />
                <div className="absolute inset-4 sm:inset-6 rounded-xl bg-background/40 backdrop-blur-md border border-white/10 p-3 sm:p-4 flex flex-col">
                  <div className="flex gap-1.5 mb-3">
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                    <span className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <p.icon className="h-12 w-12 sm:h-16 sm:w-16 opacity-90" style={{ color: p.accent }} />
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-1.5 rounded-full bg-white/20 w-3/4" />
                    <div className="h-1.5 rounded-full bg-white/15 w-1/2" />
                  </div>
                </div>
              </div>
              <div className="p-6 sm:p-7">
                <p className="text-[10px] tracking-[0.25em] text-primary mb-2">{p.cat.toUpperCase()}</p>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg sm:text-xl font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:rotate-12 transition-all" />
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col items-center text-center reveal">
        <p className="text-sm text-muted-foreground max-w-xl mb-6 px-2">
          Twoja branża nie jest na liście? Spokojnie — pracuję z każdym lokalnym biznesem, który potrzebuje porządnej strony.
        </p>
        <CTAButton to="/kontakt" fullWidthOnMobile>CHCĘ PODOBNĄ STRONĘ</CTAButton>
      </section>
    </SiteLayout>
  );
}
