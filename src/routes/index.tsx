import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Plexus } from "@/components/site/Plexus";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  Smartphone, Gauge, Search, CalendarCheck, ShieldCheck, Sparkles,
  ArrowRight, MessageCircle, Pencil, Code2, Rocket, Phone, Mail,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mativo Studio — Nowoczesne strony www dla lokalnych firm" },
      { name: "description", content: "Projektuję i koduję strony internetowe dla salonów, barber shopów, restauracji, siłowni i lokalnych biznesów. Szybkie, mobilne, gotowe pod klientów." },
      { property: "og:title", content: "Mativo Studio — strony www, które pracują na Twój biznes" },
      { property: "og:description", content: "Premium strony dla lokalnych firm. Mobile-first, gotowe pod SEO, integracja z rezerwacjami." },
    ],
  }),
  component: Index,
});

const features = [
  { icon: Smartphone, title: "Mobile-first", desc: "Większość Twoich klientów wchodzi z telefonu. Strona musi tam wyglądać i działać bez zarzutu." },
  { icon: Gauge, title: "Szybkie działanie", desc: "Lekka, dobrze zoptymalizowana strona działa płynnie i nie zniechęca klienta długim ładowaniem." },
  { icon: Search, title: "Widoczność w Google", desc: "Czysta struktura, poprawne nagłówki i metadane — Google od razu rozumie, czym się zajmujesz." },
  { icon: CalendarCheck, title: "Rezerwacje online", desc: "Integracja z Booksy, Calendly lub własny formularz — klient umawia wizytę bez telefonu." },
  { icon: ShieldCheck, title: "SSL i bezpieczeństwo", desc: "Certyfikat, hosting i konfiguracja domeny — zajmuję się tym za Ciebie." },
  { icon: Sparkles, title: "Profesjonalny wygląd", desc: "Strona od pierwszych sekund buduje zaufanie i pokazuje firmę jako solidną, nowoczesną i wartą kontaktu." },
];

const process = [
  { icon: MessageCircle, k: "Krótka rozmowa", v: "Ustalamy, czego potrzebuje Twoja firma: ofertę, styl, kontakt, rezerwacje i najważniejsze sekcje strony." },
  { icon: Pencil, k: "Zakres i wycena", v: "Dostajesz jasną wycenę, termin realizacji i konkretny zakres prac — bez niejasnych kosztów po drodze." },
  { icon: Code2, k: "Projekt strony", v: "Przygotowuję pierwszą wersję strony. Widzisz, jak będzie wyglądać i zgłaszasz poprawki." },
  { icon: Sparkles, k: "Poprawki i dopracowanie", v: "Dostosowujemy teksty, sekcje, zdjęcia i szczegóły tak, żeby strona była gotowa do pokazania klientom." },
  { icon: Rocket, k: "Wdrożenie", v: "Konfiguruję domenę, hosting, SSL i podstawową analitykę. Strona trafia online i jest gotowa do działania." },
];

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
    desc: "Podstawowa opieka techniczna, żeby strona działała stabilnie.",
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
    price: "80 zł",
    period: "/ miesiąc",
    desc: "Pełna opieka — Ty prowadzisz biznes, ja dbam o stronę.",
    features: ["Wszystko z Priority", "Aktualizacje treści", "Dodawanie zdjęć i galerii", "Zmiany tekstów", "Comiesięczny przegląd"],
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center py-16 md:py-0">
        <div
          className="absolute inset-0 pointer-events-none opacity-60 md:opacity-100"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 70% 45%, black 35%, transparent 85%)",
            maskImage: "radial-gradient(ellipse 75% 70% at 70% 45%, black 35%, transparent 85%)",
          }}
        >
          <Plexus className="w-full h-full opacity-80" />
        </div>

        <div className="hidden md:block absolute top-1/3 right-[15%] w-72 h-72 rounded-full pointer-events-none animate-float" style={{ background: "radial-gradient(circle, oklch(0.6 0.28 285 / 0.35), transparent 65%)", filter: "blur(40px)" }} />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl">
            <p className="text-[10px] md:text-xs font-semibold tracking-[0.3em] md:tracking-[0.35em] text-primary mb-4 md:mb-6 animate-fade-up">
              MATIVO STUDIO
            </p>
            <h1
              className="text-[3.675rem] sm:text-[4.2rem] md:text-[5.25rem] lg:text-[6.3rem] font-bold leading-[1.02] sm:leading-[0.98] tracking-tight animate-fade-up"
              style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "80ms" }}
            >
              Nowoczesne strony www dla <span className="text-gradient-primary">lokalnych biznesów</span>.
            </h1>
            <div className="mt-6 md:mt-8 h-[2px] w-20 md:w-24 bg-gradient-primary rounded-full animate-fade-up glow" style={{ animationDelay: "160ms" }} />
            <p className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
              Projektuję nowoczesne strony dla firm, które chcą robić dobre pierwsze wrażenie, jasno pokazać ofertę i zamieniać odwiedzających w klientów.
            </p>
            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <CTAButton to="/kontakt" fullWidthOnMobile>ZAPYTAJ O WYCENĘ</CTAButton>
              <CTAButton to="/cennik" variant="ghost" fullWidthOnMobile>ZOBACZ OFERTĘ</CTAButton>
            </div>

            <div className="mt-10 md:mt-14 flex flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-2.5 text-[11px] md:text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "400ms" }}>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Wycena w 24h</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Szybki start projektu</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Prosta strona gotowa nawet w 3 dni robocze</span>
            </div>
          </div>
        </div>
      </section>

      {/* CO DOSTAJESZ */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <SectionHeader
          eyebrow="CO DOSTAJESZ"
          title={<>Strona, która <span className="text-gradient-primary">pracuje na Twój biznes</span>.</>}
          subtitle="Każdy projekt robię tak, żeby spełniał kilka prostych zasad — bo to one decydują, czy klient u Ciebie zostanie czy ucieknie do konkurencji."
        />
        <div data-proximity-group className="mt-10 md:mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              data-proximity-item
              className="group relative glass rounded-2xl p-6 sm:p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div data-proximity-glow className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center mb-5 group-hover:glow transition-all">
                <f.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCES */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="JAK WYGLĄDA WSPÓŁPRACA"
              title={<>Prosty i <span className="text-gradient-primary">szybki proces</span>.</>}
              subtitle="Bez zbędnych formalności. Wiesz, co robimy, ile to kosztuje i kiedy strona będzie gotowa."
            />
            <div className="mt-8 reveal">
              <CTAButton to="/kontakt" variant="ghost" fullWidthOnMobile>UMÓW ROZMOWĘ</CTAButton>
            </div>
          </div>
          <ol data-proximity-group className="lg:col-span-8 space-y-3 sm:space-y-4">
            {process.map((p, i) => (
              <li
                key={p.k}
                data-proximity-item
                className="group glass rounded-2xl p-5 sm:p-6 md:p-7 flex items-start gap-4 sm:gap-5 hover:border-primary/50 transition-all reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div data-proximity-glow className="shrink-0 w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center group-hover:glow transition-all">
                  <p.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-mono text-primary/70">0{i + 1}</span>
                    <h3 className="text-[15px] sm:text-base md:text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.k}</h3>
                  </div>
                  <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">{p.v}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PAKIETY */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <SectionHeader
          eyebrow="PAKIETY"
          title={<>Trzy poziomy — wybierasz <span className="text-gradient-primary">to, czego potrzebujesz</span>.</>}
          subtitle="Każdą wycenę robię indywidualnie po krótkiej rozmowie. Poniżej widełki, w których realnie się poruszamy."
        />
        <div data-proximity-group className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5">
          {packages.map((p, i) => (
            <div
              key={p.name}
              data-proximity-item
              className={`group relative glass rounded-3xl p-6 sm:p-7 reveal transition-all hover:-translate-y-1.5 ${p.highlighted ? "lg:scale-[1.03] border-primary/40 ring-1 ring-primary/30 hover:border-primary/60" : "hover:border-primary/60"}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {p.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-[10px] font-semibold tracking-[0.2em] text-primary-foreground whitespace-nowrap">
                  NAJCZĘŚCIEJ WYBIERANY
                </div>
              )}
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground mb-2">{p.tag.toUpperCase()}</p>
              <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{p.desc}</p>
              <div className="text-2xl font-bold text-gradient-primary mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
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
              <Link to="/kontakt" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.22em] text-primary hover:gap-3 transition-all">
                ZAPYTAJ O WYCENĘ <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* CARE PLANS */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28">
        <SectionHeader
          eyebrow="OPIEKA MIESIĘCZNA"
          title={<>Strona to nie wszystko — <span className="text-gradient-primary">trzeba o nią dbać</span>.</>}
          subtitle="Po wdrożeniu możesz zostać na jednym z planów opieki. Hosting, bezpieczeństwo i drobne zmiany — z głowy."
        />
        <div data-proximity-group className="mt-10 md:mt-14 grid md:grid-cols-3 gap-5">
          {carePlans.map((c, i) => (
            <div key={c.name} data-proximity-item className="glass rounded-3xl p-6 sm:p-7 reveal hover:-translate-y-1.5 hover:border-primary/60 transition-all" style={{ transitionDelay: `${i * 60}ms` }}>
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

      {/* CTA */}
      <section className="relative container mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="relative glass rounded-3xl p-7 sm:p-10 md:p-14 overflow-hidden reveal">
          <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full blur-3xl opacity-30 sm:opacity-40 pointer-events-none" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Masz pomysł na stronę? <span className="text-gradient-primary">Pogadajmy.</span>
              </h2>
              <p className="mt-3 sm:mt-4 text-sm sm:text-base text-muted-foreground max-w-xl">
                Krótki opis projektu, kilka pytań z mojej strony i konkretna wycena w ciągu 24 godzin. Bez zobowiązań.
              </p>
              <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="tel:+48889521418" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary-glow" /> +48 889 521 418
                </a>
                <a href="mailto:kontakt@mativostudio.pl" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary-glow" />
                  <span>kontakt@mativostudio.pl</span>
                </a>
              </div>
            </div>
            <CTAButton to="/kontakt" fullWidthOnMobile>ZAPYTAJ O WYCENĘ</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
