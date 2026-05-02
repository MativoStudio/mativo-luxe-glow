import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Globe, TrendingUp, Heart, Megaphone, Sparkles } from "lucide-react";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik — Mativo Studio" },
      { name: "description", content: "Cennik usług Mativo Studio: strony od 2000 zł, SEO od 400 zł/mies., Social Media od 600 zł/mies., reklamy od 400 zł/mies." },
      { property: "og:title", content: "Cennik — Mativo Studio" },
      { property: "og:description", content: "Transparentne ceny usług digital — strony, SEO, social media, reklamy." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { icon: Globe, title: "Strony internetowe", price: "od 2 000 zł", period: "jednorazowo", desc: "Nowoczesna strona, która sprzedaje. Projekt, kod, hosting, wsparcie." },
  { icon: TrendingUp, title: "SEO i Google", price: "od 400 zł", period: "/ miesiąc", desc: "Pozycjonowanie w Google, optymalizacja, link building i raporty." },
  { icon: Heart, title: "Social Media", price: "od 600 zł", period: "/ miesiąc", desc: "Prowadzenie Facebook, Instagram, TikTok — strategia, treści, grafiki." },
  { icon: Megaphone, title: "Reklamy online", price: "od 400 zł", period: "/ miesiąc", desc: "Google Ads i Meta Ads — optymalizacja kampanii i ROAS." },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="CENNIK"
          title={<>Transparentne ceny, <span className="text-gradient-primary">indywidualne wyceny</span>.</>}
          subtitle="Każdy projekt wyceniamy indywidualnie. Poniżej przedstawiamy orientacyjne ceny startowe naszych usług."
        />
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiers.map((t, i) => (
            <div key={t.title} className={`group relative glass rounded-3xl p-7 hover:-translate-y-2 transition-all reveal ${i === 0 ? "lg:scale-[1.03] border-primary/40 glow" : "hover:border-primary/60"}`} style={{ transitionDelay: `${i * 60}ms` }}>
              {i === 0 && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-[10px] font-semibold tracking-[0.2em]">
                  POPULARNE
                </div>
              )}
              <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center mb-6 group-hover:glow transition-all">
                <t.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.title}</h3>
              <div className="mt-4 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-gradient-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{t.price}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">{t.period}</p>
              <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16">
        <div className="glass rounded-3xl p-10 md:p-14 text-center reveal">
          <Sparkles className="h-10 w-10 text-primary-glow mx-auto mb-5" />
          <h2 className="text-2xl md:text-4xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Każdy projekt <span className="text-gradient-primary">wyceniamy indywidualnie</span>.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Skontaktuj się z nami, opowiedz o swojej firmie, a my przygotujemy ofertę dopasowaną do Twoich celów i budżetu.
          </p>
          <div className="mt-8 flex justify-center">
            <CTAButton to="/kontakt">DARMOWA WYCENA</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
