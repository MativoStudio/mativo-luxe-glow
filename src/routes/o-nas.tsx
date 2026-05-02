import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Sparkles, Target, Zap, Heart, Trophy, Code2 } from "lucide-react";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Mativo Studio" },
      { name: "description", content: "Mativo Studio to zespół projektantów i marketerów. Tworzymy rozwiązania, które budują markę i sprzedają." },
      { property: "og:title", content: "O nas — Mativo Studio" },
      { property: "og:description", content: "Poznaj zespół Mativo Studio — design, technologia, marketing." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Sparkles, k: "Nowoczesne rozwiązania", v: "Pracujemy na najnowszych technologiach. React, TanStack, edge hosting — to nasz codzienny stack." },
  { icon: Target, k: "Skupienie na wynikach", v: "Każdy projekt ma jasno określony cel biznesowy. Mierzymy konwersje, nie kliknięcia." },
  { icon: Zap, k: "Szybkie wdrożenia", v: "Od briefu do publikacji w kilka tygodni. Bez bullshitu, bez przeciągania." },
  { icon: Heart, k: "Indywidualne podejście", v: "Każdy klient i projekt jest dla nas wyjątkowy. Brak gotowców, brak szablonów." },
  { icon: Trophy, k: "Doświadczenie", v: "Zrealizowane projekty dla restauracji, salonów i mechaników w całej Polsce." },
  { icon: Code2, k: "Czysty kod", v: "Strony, które ładują się błyskawicznie i działają bez zarzutu." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="O NAS"
          title={<>Studio, które tworzy <span className="text-gradient-primary">cyfrowy wzrost</span>.</>}
          subtitle="Jesteśmy zespołem projektantów, programistów i marketerów. Łączymy estetykę z biznesem, aby Twoja firma rosła w internecie."
        />
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <div key={v.k} className="group glass rounded-2xl p-7 hover:-translate-y-1.5 hover:border-primary/60 transition-all reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center mb-5 group-hover:glow transition-all">
                <v.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-base font-semibold mb-2.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.k}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 reveal">
          {[
            { k: "50+", v: "Zrealizowanych projektów" },
            { k: "100%", v: "Zadowolonych klientów" },
            { k: "24h", v: "Czas reakcji" },
            { k: "5★", v: "Średnia ocen" },
          ].map((s) => (
            <div key={s.k} className="glass rounded-2xl p-8 text-center">
              <p className="text-4xl md:text-5xl font-bold text-gradient-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.k}</p>
              <p className="mt-3 text-xs tracking-[0.2em] text-muted-foreground">{s.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 flex justify-center reveal">
        <CTAButton to="/kontakt">PRACUJMY RAZEM</CTAButton>
      </section>
    </SiteLayout>
  );
}