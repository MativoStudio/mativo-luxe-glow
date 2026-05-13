import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Globe, Layers, CalendarCheck, Wrench, Check } from "lucide-react";

export const Route = createFileRoute("/uslugi")({
  head: () => ({
    meta: [
      { title: "Usługi — Mativo Studio" },
      { name: "description", content: "Strony one-page, strony wielosekcyjne, integracje rezerwacji, opieka techniczna. Konkretna oferta dla lokalnych firm." },
      { property: "og:title", content: "Usługi — strony www dla lokalnych firm" },
      { property: "og:description", content: "Co robię i jak mogę pomóc Twojej firmie wyglądać profesjonalnie online." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Globe,
    title: "Strona one-page",
    desc: "Dla firm, które chcą szybko ruszyć online i pokazać najważniejsze informacje w jednym miejscu. Najlepsza dla lokalnych usług, małych firm, freelancerów i nowych biznesów.",
    features: [
      "Oferta, informacje o firmie i kontakt",
      "Formularz kontaktowy",
      "Podstawowa widoczność w Google",
      "Szybkie działanie na telefonie",
    ],
  },
  {
    icon: Layers,
    title: "Strona wielosekcyjna",
    desc: "Dla firm, które mają więcej usług, zdjęć, realizacji albo chcą mocniej zbudować zaufanie przed kontaktem.",
    features: [
      "Kilka sekcji lub podstron",
      "Galeria realizacji",
      "Sekcja FAQ",
      "Pomoc w uporządkowaniu treści",
      "Układ nastawiony na kontakt z klientem",
      "Mocniejsza prezentacja oferty",
    ],
  },
  {
    icon: CalendarCheck,
    title: "Rezerwacje i formularze",
    desc: "Dla biznesów, gdzie klient powinien szybko umówić termin albo wysłać konkretne zapytanie. Booksy, Calendly, Reservio, formularz kontaktowy, link do telefonu, WhatsApp lub Messenger — to tylko przykłady. Dobieram rozwiązanie pod sposób, w jaki Twoi klienci najczęściej się kontaktują.",
    features: [
      "Dobór rozwiązania pod Twój biznes",
      "Osadzenie systemu na stronie",
      "Konfiguracja formularzy i powiadomień",
      "Testy na telefonie i komputerze",
    ],
  },
  {
    icon: Wrench,
    title: "Opieka po wdrożeniu",
    desc: "Dla firm, które nie chcą samodzielnie pilnować hostingu, SSL, drobnych zmian i działania strony.",
    features: [
      "Hosting strony",
      "SSL i podstawowe zabezpieczenia",
      "Monitoring dostępności",
      "Drobne aktualizacje treści",
      "Wsparcie mailowe",
    ],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="USŁUGI"
          title={<>Dobieram stronę do tego, <span className="text-gradient-primary">czego faktycznie potrzebuje firma</span>.</>}
          subtitle="Nie każdy biznes potrzebuje rozbudowanej strony za kilka tysięcy. Czasem wystarczy mocna wizytówka online, a czasem lepiej zbudować pełniejszą prezentację z galerią, FAQ i rezerwacjami."
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
              <ul className="mt-7 grid sm:grid-cols-2 gap-3">
                {s.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 flex flex-col items-center text-center reveal">
        <p className="text-sm text-muted-foreground max-w-xl mb-6">
          Nie wiesz, jaki zakres pasuje do Twojej firmy? Napisz kilka zdań o swoim biznesie — odpowiem, co realnie ma sens i jaki pakiet będzie najlepszy.
        </p>
        <CTAButton to="/kontakt">OMÓW PROJEKT</CTAButton>
      </section>
    </SiteLayout>
  );
}
