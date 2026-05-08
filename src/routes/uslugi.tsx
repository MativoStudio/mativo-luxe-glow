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
    desc: "Zwarta, mocna wizytówka online. Wszystko, co klient musi wiedzieć — w jednym miejscu.",
    features: ["Projekt mobile-first", "Sekcje: oferta, o nas, kontakt", "Formularz kontaktowy", "Struktura pod SEO", "SSL i konfiguracja domeny"],
  },
  {
    icon: Layers,
    title: "Strona wielosekcyjna",
    desc: "Bardziej rozbudowana strona dla firm z większą ofertą lub kilkoma usługami.",
    features: ["Kilka podstron", "Galeria realizacji", "FAQ", "Pomoc w uporządkowaniu treści", "Przygotowanie strony pod SEO"],
  },
  {
    icon: CalendarCheck,
    title: "Integracja rezerwacji",
    desc: "Booksy, Calendly, Reservio lub własny formularz — klient umawia wizytę bez telefonu.",
    features: ["Wybór systemu pod Twój biznes", "Osadzenie w stronie", "Konfiguracja powiadomień", "Testy na urządzeniach"],
  },
  {
    icon: Wrench,
    title: "Opieka techniczna",
    desc: "Hosting, SSL, monitoring i drobne zmiany — strona zawsze online i aktualna.",
    features: ["Hosting i domena", "Aktualizacje treści", "Monitoring uptime", "Wsparcie mailowe"],
  },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="USŁUGI"
          title={<>Robię jedną rzecz — <span className="text-gradient-primary">strony, które działają</span>.</>}
          subtitle="Bez rozpraszania się na sto rzeczy. Skupiam się tylko na stronach internetowych dla lokalnych firm i marek osobistych."
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
          Nie wiesz, który zakres pasuje do Twojej firmy? Napisz parę zdań o swoim biznesie — odpowiem, co realnie ma sens.
        </p>
        <CTAButton to="/kontakt">OMÓW PROJEKT</CTAButton>
      </section>
    </SiteLayout>
  );
}
