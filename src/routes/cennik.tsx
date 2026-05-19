import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { ArrowRight, Sparkles } from "lucide-react";

export const Route = createFileRoute("/cennik")({
  head: () => ({
    meta: [
      { title: "Cennik — Mativo Studio" },
      { name: "description", content: "Strony www od 600 zł. Trzy pakiety: Starter, Biznes, Premium. Plus miesięczne plany opieki technicznej od 30 zł." },
      { property: "og:title", content: "Cennik stron www — Mativo Studio" },
      { property: "og:description", content: "Konkretne widełki cenowe i miesięczne plany opieki technicznej." },
    ],
  }),
  component: PricingPage,
});

const packages = [
  {
    name: "Starter",
    price: "od 600 do 1 200 zł",
    tag: "Wizytówka online",
    desc: "Dla małych biznesów, którym wystarczy jedna mocna strona z ofertą i kontaktem.",
    features: [
      "Strona one-page",
      "Projekt mobile-first",
      "Formularz kontaktowy",
      "Widoczność w Google",
      "Konfiguracja SSL i domeny",
      "Szybkie działanie",
    ],
  },
  {
    name: "Biznes",
    price: "od 1 200 do 5 000 zł",
    tag: "Najczęściej wybierany",
    highlighted: true,
    desc: "Dla firm, które chcą mocniejszej prezentacji i więcej zapytań od klientów.",
    features: [
      "Wszystko z pakietu Starter",
      "Kilka sekcji lub podstron",
      "Układ strony nastawiony na kontakt z klientem",
      "Galeria realizacji",
      "Sekcja FAQ",
      "Integracja z rezerwacjami (Booksy / Calendly)",
      "Dopracowane animacje",
      "Rozbudowana struktura strony",
    ],
  },
  {
    name: "Premium",
    price: "od 5 000 do 12 000+ zł",
    tag: "Custom",
    desc: "Dla marek, które potrzebują w pełni autorskiej, dopracowanej strony premium.",
    features: [
      "Wszystko z pakietu Biznes",
      "W pełni custom design",
      "Zaawansowane animacje i interakcje",
      "System rezerwacji",
      "Możliwość rozbudowy o blog lub panel edycji",
      "Planowanie struktury i treści",
      "Priorytetowe wdrożenie",
      "Priorytetowe wsparcie po wdrożeniu",
    ],
  },
];

const carePlans = [
  {
    name: "Secure",
    price: "30 zł",
    period: "/ miesiąc",
    desc: "Strona zawsze online, bezpieczna, pod monitoringiem.",
    features: ["SSL", "Ochrona i firewall", "Monitoring uptime"],
  },
  {
    name: "Priority",
    price: "40 zł",
    period: "/ miesiąc",
    desc: "Dla firm, dla których strona to realne źródło klientów.",
    features: ["Wszystko z Secure", "Priorytetowy support", "Szybszy czas reakcji", "Monitoring wydajności"],
  },
  {
    name: "Plus",
    price: "70 zł",
    period: "/ miesiąc",
    desc: "Pełna opieka — Ty prowadzisz biznes, ja dbam o stronę.",
    features: ["Wszystko z Priority", "Aktualizacje treści", "Dodawanie zdjęć i galerii", "Zmiany tekstów", "Comiesięczny przegląd"],
  },
];

function PricingPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SectionHeader
          eyebrow="CENNIK"
          title={<>Konkretne widełki, <span className="text-gradient-primary">bez ukrytych kosztów</span>.</>}
          subtitle="Każdą stronę wyceniam indywidualnie po krótkiej rozmowie. Poniżej widełki, w których realnie się poruszam."
        />
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid md:grid-cols-3 gap-5">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`group relative glass rounded-3xl p-6 sm:p-7 reveal transition-all hover:-translate-y-1.5 ${p.highlighted ? "lg:scale-[1.03] border-primary/40 ring-1 ring-primary/30" : "hover:border-primary/60"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-[10px] font-semibold tracking-[0.2em] text-primary-foreground whitespace-nowrap">
                  NAJCZĘŚCIEJ WYBIERANY
                </div>
              )}
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">{p.tag.toUpperCase()}</p>
              <h3 className="text-xl sm:text-2xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="text-xl sm:text-2xl font-bold text-gradient-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {p.price}
              </div>
              <ul className="space-y-2.5 mb-7">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-glow shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/kontakt"
                className={`inline-flex items-center justify-center gap-2 w-full sm:w-auto px-5 sm:px-0 py-3 sm:py-0 rounded-xl sm:rounded-none text-xs font-semibold tracking-[0.22em] transition-all ${p.highlighted ? "bg-gradient-primary text-primary-foreground sm:bg-transparent sm:text-primary glow sm:shadow-none" : "border border-border sm:border-0 bg-secondary/40 sm:bg-transparent text-foreground sm:text-primary hover:border-primary/60 sm:hover:gap-3"}`}
              >
                ZAPYTAJ O WYCENĘ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <SectionHeader
          eyebrow="OPIEKA MIESIĘCZNA"
          title={<>Plany utrzymania <span className="text-gradient-primary">i wsparcia</span>.</>}
          subtitle="Po wdrożeniu możesz zostać pod opieką. Hosting, bezpieczeństwo, drobne zmiany — bez stresu."
        />
        <div className="mt-10 sm:mt-12 grid md:grid-cols-3 gap-5">
          {carePlans.map((c, i) => (
            <div key={c.name} className="glass rounded-3xl p-6 sm:p-7 reveal hover:-translate-y-1.5 hover:border-primary/60 transition-all" style={{ transitionDelay: `${i * 60}ms` }}>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-3xl font-bold text-gradient-primary" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{c.price}</span>
                <span className="text-xs text-muted-foreground">{c.period}</span>
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              <ul className="mt-5 space-y-2">
                {c.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary-glow shrink-0" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="glass rounded-3xl p-7 sm:p-10 md:p-14 text-center reveal">
          <Sparkles className="h-9 w-9 text-primary-glow mx-auto mb-5" />
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Każdą stronę <span className="text-gradient-primary">wyceniam indywidualnie</span>.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Napisz parę zdań o swojej firmie — wrócę z konkretną wyceną w 24 godziny.
          </p>
          <div className="mt-7 sm:mt-8 flex justify-center">
            <CTAButton to="/kontakt" fullWidthOnMobile>ZAPYTAJ O WYCENĘ</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
