import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Globe, TrendingUp, Heart, Megaphone, Check } from "lucide-react";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Usługi — Mativo Studio" },
      { name: "description", content: "Strony internetowe, SEO, Social Media, Reklamy online — kompleksowa oferta dla Twojej firmy." },
      { property: "og:title", content: "Usługi — Mativo Studio" },
      { property: "og:description", content: "Pełna oferta usług digital agency dla Twojej firmy." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Globe, title: "Strony internetowe", desc: "Nowoczesne, responsywne strony, które budują wizerunek i sprzedają.", features: ["Projekt UX/UI", "Responsywność", "SEO on-page", "Hosting i wsparcie"] },
  { icon: TrendingUp, title: "SEO i Google", desc: "Zwiększamy widoczność Twojej firmy w Google i przyciągamy klientów.", features: ["Audyt SEO", "Optymalizacja", "Link building", "Raporty miesięczne"] },
  { icon: Heart, title: "Social Media", desc: "Prowadzimy Facebook, Instagram i TikTok. Tworzymy treści, które angażują.", features: ["Strategia treści", "Grafiki i video", "Moderacja", "Analityka"] },
  { icon: Megaphone, title: "Reklamy online", desc: "Skuteczne kampanie Google Ads i Meta Ads, które przynoszą realne wyniki.", features: ["Google Ads", "Meta Ads", "Optymalizacja ROAS", "Remarketing"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="USŁUGI"
          title={<>Wszystko, czego potrzebuje <span className="text-gradient-primary">Twoja firma</span> online.</>}
          subtitle="Od zaprojektowania strony, przez SEO i social media, aż po skuteczne kampanie reklamowe — działamy kompleksowo."
        />
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <div key={s.title} className="group relative glass rounded-3xl p-8 md:p-10 hover:-translate-y-1.5 hover:border-primary/60 transition-all reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 shrink-0 rounded-xl bg-secondary/60 border border-border flex items-center justify-center group-hover:glow transition-all">
                  <s.icon className="h-6 w-6 text-primary-glow" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
              <ul className="mt-7 grid grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary-glow shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 flex justify-center reveal">
        <CTAButton to="/kontakt">ZAPYTAJ O WYCENĘ</CTAButton>
      </section>
    </SiteLayout>
  );
}
