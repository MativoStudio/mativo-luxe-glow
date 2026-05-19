import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTAButton } from "@/components/site/CTAButton";
import { Smartphone, Gauge, Search, Heart, Code2, MessageCircle } from "lucide-react";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nas — Mativo Studio" },
      { name: "description", content: "Małe studio webowe z Częstochowy. Robimy strony dla lokalnych biznesów — bez korpo-procesu, bez szablonów, z rzetelnym podejściem." },
      { property: "og:title", content: "O Mativo Studio" },
      { property: "og:description", content: "Kim jesteśmy i jak pracujemy z lokalnymi firmami." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: MessageCircle, k: "Bezpośredni kontakt", v: "Pracujesz ze mną, nie z account managerem. Pisz, dzwoń, pytaj — odpowiadam." },
  { icon: Smartphone, k: "Mobile-first", v: "Większość Twoich klientów wchodzi z telefonu. Tam strona musi działać najlepiej." },
  { icon: Gauge, k: "Szybkie strony", v: "Lekki kod, optymalizacja obrazów, hosting na Edge — strona ładuje się w sekundę." },
  { icon: Search, k: "Gotowe pod SEO", v: "Czysta struktura, sensowne nagłówki, meta dane i pomoc w uporządkowaniu treści." },
  { icon: Heart, k: "Indywidualne podejście", v: "Nie wciskam pakietów na siłę. Mówię szczerze, co ma sens dla Twojego biznesu." },
  { icon: Code2, k: "Czysty kod", v: "Strony są stabilne, łatwe w rozwoju i bezpieczne. Bez gotowców i WordPress-spaghetti." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SectionHeader
          eyebrow="O STUDIU"
          title={<>Małe studio webowe — <span className="text-gradient-primary">duża dbałość o szczegóły</span>.</>}
          subtitle="Mativo Studio to projekt z Częstochowy. Robię strony internetowe dla lokalnych firm i marek osobistych — od salonów beauty po detailing i siłownie."
        />
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="glass rounded-3xl p-6 sm:p-8 md:p-10 reveal">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Jak pracuję
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
              Bez korpo-procesu, bez ukrywania kosztów, bez gotowych szablonów. Najpierw krótka rozmowa, potem konkretna wycena. Pracujemy razem nad stylem, treściami i funkcjami, aż strona naprawdę pasuje do Twojego biznesu.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Skupiam się tylko na stronach internetowych — nie prowadzę reklam, nie ogarniam social mediów, nie projektuję logo. Robię jedną rzecz dobrze.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            {values.slice(0, 4).map((v, i) => (
              <div key={v.k} className="glass rounded-2xl p-4 sm:p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <v.icon className="h-5 w-5 text-primary-glow mb-3 sm:mb-4" />
                <p className="text-[13px] sm:text-sm font-semibold mb-1.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.k}</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed">{v.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {values.map((v, i) => (
            <div key={v.k} className="group glass rounded-2xl p-6 sm:p-7 hover:-translate-y-1.5 hover:border-primary/60 transition-all reveal" style={{ transitionDelay: `${i * 60}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center mb-5 group-hover:glow transition-all">
                <v.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-base font-semibold mb-2.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{v.k}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.v}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-10 sm:py-12 flex justify-center reveal">
        <CTAButton to="/kontakt" fullWidthOnMobile>SKONTAKTUJ SIĘ</CTAButton>
      </section>
    </SiteLayout>
  );
}
