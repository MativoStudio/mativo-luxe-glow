import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Plexus } from "@/components/site/Plexus";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/site/SectionHeader";
import {
  Smartphone, Gauge, Search, CalendarCheck, ShieldCheck, Sparkles,
  ArrowRight, MessageCircle, Pencil, Code2, Rocket, LifeBuoy, Phone, Mail,
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
  { icon: MessageCircle, k: "Krótka rozmowa", v: "15–30 minut, żeby poznać Twój biznes, klientów i to, co strona ma dla Ciebie zrobić." },
  { icon: Pencil, k: "Ustalenie stylu i funkcji", v: "Wybieramy kierunek wizualny, sekcje, treści i integracje. Dostajesz jasną wycenę." },
  { icon: Code2, k: "Projekt i poprawki", v: "Pokazuję pierwszą wersję strony. Wprowadzamy razem zmiany aż do efektu, który Ci się podoba." },
  { icon: Rocket, k: "Wdrożenie", v: "Konfiguruję domenę, hosting, SSL i analitykę. Strona startuje w pełni gotowa." },
  { icon: LifeBuoy, k: "Publikacja i support", v: "Po starcie zostaję w kontakcie. Aktualizacje, drobne zmiany, opieka techniczna." },
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
      "Struktura pod SEO",
      "Konfiguracja SSL i domeny",
      "Szybkie ładowanie",
    ],
  },
  {
    name: "Biznes",
    price: "od 1 200 do 5 000 zł",
    tag: "Najczęściej wybierany",
    highlighted: true,
    desc: "Dla firm, które chcą mocniejszej prezentacji i więcej zapytań od klientów.",
    features: [
      "Kilka sekcji lub podstron",
      "Przemyślany flow konwersji",
      "Galeria realizacji",
      "Sekcja FAQ",
      "Integracja z rezerwacjami (Booksy / Calendly)",
      "Dopracowane animacje",
      "Struktura pod SEO",
    ],
  },
  {
    name: "Premium",
    price: "od 5 000 do 12 000+ zł",
    tag: "Custom",
    desc: "Dla marek, które potrzebują w pełni autorskiej, dopracowanej strony premium.",
    features: [
      "W pełni custom design",
      "Zaawansowane animacje i interakcje",
      "System rezerwacji",
      "CMS / blog",
      "Planowanie struktury i treści",
      "Priorytetowe wdrożenie",
      "Premium support",
    ],
  },
];

const carePlans = [
  {
    name: "Secure",
    price: "79 zł",
    period: "/ miesiąc",
    desc: "Podstawowa opieka techniczna, żeby strona działała stabilnie.",
    features: ["Hosting", "SSL", "Ochrona i firewall", "Monitoring uptime", "Drobne aktualizacje"],
  },
  {
    name: "Priority",
    price: "149 zł",
    period: "/ miesiąc",
    desc: "Dla firm, dla których strona to realne źródło klientów.",
    features: ["Wszystko z Secure", "Priorytetowy support", "Szybszy czas reakcji", "Monitoring wydajności"],
  },
  {
    name: "Plus",
    price: "299 zł",
    period: "/ miesiąc",
    desc: "Pełna opieka — Ty prowadzisz biznes, ja dbam o stronę.",
    features: ["Wszystko z Priority", "Aktualizacje treści", "Dodawanie zdjęć i galerii", "Zmiany tekstów", "Comiesięczny przegląd"],
  },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage: "radial-gradient(ellipse 75% 70% at 70% 45%, black 35%, transparent 85%)",
            maskImage: "radial-gradient(ellipse 75% 70% at 70% 45%, black 35%, transparent 85%)",
          }}
        >
          <Plexus className="w-full h-full opacity-80" />
        </div>

        <div className="absolute top-1/3 right-[15%] w-72 h-72 rounded-full pointer-events-none animate-float" style={{ background: "radial-gradient(circle, oklch(0.6 0.28 285 / 0.35), transparent 65%)", filter: "blur(40px)" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-foreground/80">CZĘSTOCHOWA · POLSKA</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.35em] text-primary mb-6 animate-fade-up">
              MATIVO STUDIO
            </p>
            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight animate-fade-up"
              style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "80ms" }}
            >
              Nowoczesne strony www dla <span className="text-gradient-primary">lokalnych biznesów</span>.
            </h1>
            <div className="mt-8 h-[2px] w-24 bg-gradient-primary rounded-full animate-fade-up glow" style={{ animationDelay: "160ms" }} />
            <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
              Projektuję nowoczesne strony dla firm, które chcą robić lepsze pierwsze wrażenie, jasno pokazać ofertę i zamieniać odwiedzających w klientów.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <CTAButton to="/kontakt">ZAPYTAJ O WYCENĘ</CTAButton>
              <CTAButton to="/cennik" variant="ghost">ZOBACZ OFERTĘ</CTAButton>
            </div>

            <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground animate-fade-up" style={{ animationDelay: "400ms" }}>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Wycena w 24h</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Szybki start projektu</span>
              <span className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> Prosta strona gotowa nawet w 3 dni robocze</span>
            </div>
          </div>
        </div>
      </section>

      {/* CO DOSTAJESZ */}
      <section className="relative container mx-auto px-6 py-24 md:py-28">
        <SectionHeader
          eyebrow="CO DOSTAJESZ"
          title={<>Strona, która <span className="text-gradient-primary">pracuje na Twój biznes</span>.</>}
          subtitle="Każdy projekt robię tak, żeby spełniał kilka prostych zasad — bo to one decydują, czy klient u Ciebie zostanie czy ucieknie do konkurencji."
        />
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/60 reveal"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center mb-5 group-hover:glow transition-all">
                <f.icon className="h-5 w-5 text-primary-glow" />
              </div>
              <h3 className="text-lg font-semibold mb-2.5" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCES */}
      <section className="relative container mx-auto px-6 py-24 md:py-28">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="JAK WYGLĄDA WSPÓŁPRACA"
              title={<>Prosty, <span className="text-gradient-primary">uczciwy proces</span>.</>}
              subtitle="Bez korpo-procedur, bez niejasnych terminów. Wiesz dokładnie, co się dzieje na każdym etapie."
            />
            <div className="mt-8 reveal">
              <CTAButton to="/kontakt" variant="ghost">UMÓW ROZMOWĘ</CTAButton>
            </div>
          </div>
          <ol className="lg:col-span-8 space-y-4">
            {process.map((p, i) => (
              <li
                key={p.k}
                className="group glass rounded-2xl p-6 md:p-7 flex items-start gap-5 hover:border-primary/50 transition-all reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center group-hover:glow transition-all">
                  <p.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="flex-1">
                  <div className="flex items-baseline gap-3 mb-1.5">
                    <span className="text-xs font-mono text-primary/70">0{i + 1}</span>
                    <h3 className="text-base md:text-lg font-semibold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{p.k}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.v}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PAKIETY */}
      <section className="relative container mx-auto px-6 py-24 md:py-28">
        <SectionHeader
          eyebrow="PAKIETY"
          title={<>Trzy poziomy — wybierasz <span className="text-gradient-primary">to, czego potrzebujesz</span>.</>}
          subtitle="Każdą wycenę robię indywidualnie po krótkiej rozmowie. Poniżej widełki, w których realnie się poruszamy."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {packages.map((p, i) => (
            <div
              key={p.name}
              className={`group relative glass rounded-3xl p-7 reveal transition-all hover:-translate-y-1.5 ${p.highlighted ? "lg:scale-[1.03] border-primary/40" : "hover:border-primary/60"}`}
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
      <section className="relative container mx-auto px-6 py-24 md:py-28">
        <SectionHeader
          eyebrow="OPIEKA MIESIĘCZNA"
          title={<>Strona to nie wszystko — <span className="text-gradient-primary">trzeba o nią dbać</span>.</>}
          subtitle="Po wdrożeniu możesz zostać na jednym z planów opieki. Hosting, bezpieczeństwo i drobne zmiany — z głowy."
        />
        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {carePlans.map((c, i) => (
            <div key={c.name} className="glass rounded-3xl p-7 reveal hover:-translate-y-1.5 hover:border-primary/60 transition-all" style={{ transitionDelay: `${i * 60}ms` }}>
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
      <section className="relative container mx-auto px-6 py-24">
        <div className="relative glass rounded-3xl p-10 md:p-14 overflow-hidden reveal">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Masz pomysł na stronę? <span className="text-gradient-primary">Pogadajmy.</span>
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Krótki opis projektu, kilka pytań z mojej strony i konkretna wycena w ciągu 24 godzin. Bez zobowiązań.
              </p>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <a href="tel:+48889521418" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 text-primary-glow" /> +48 889 521 418
                </a>
                <a href="mailto:kontakt@mativostudio.pl" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 text-primary-glow" /> kontakt@mativostudio.pl
                </a>
              </div>
            </div>
            <CTAButton to="/kontakt">ZAPYTAJ O WYCENĘ</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
