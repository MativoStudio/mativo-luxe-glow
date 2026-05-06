import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Plexus } from "@/components/site/Plexus";
import { CTAButton } from "@/components/site/CTAButton";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Globe, TrendingUp, Heart, Megaphone, ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mativo Studio — Strony www, SEO i Marketing dla firm" },
      { name: "description", content: "Premium digital agency. Tworzymy nowoczesne strony, kampanie SEO, social media i reklamy, które przyciągają klientów i zwiększają sprzedaż." },
      { property: "og:title", content: "Mativo Studio — Premium Digital Agency" },
      { property: "og:description", content: "Kompleksowa obsługa Twojej firmy online — strony, SEO, social media, reklamy." },
    ],
  }),
  component: Index,
});

const services = [
  { icon: Globe, title: "Strony internetowe", desc: "Nowoczesne, responsywne strony, które budują wizerunek i sprzedają." },
  { icon: TrendingUp, title: "SEO i Google", desc: "Zwiększamy widoczność Twojej firmy w Google i przyciągamy klientów." },
  { icon: Heart, title: "Social Media", desc: "Prowadzimy Facebook, Instagram i TikTok. Tworzymy treści, które angażują." },
  { icon: Megaphone, title: "Reklamy online", desc: "Skuteczne kampanie reklamowe, które przynoszą realne wyniki." },
];

function Index() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Plexus — full hero, interactive through overlays, fades into background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 70% at 70% 45%, black 35%, transparent 85%)",
            maskImage:
              "radial-gradient(ellipse 75% 70% at 70% 45%, black 35%, transparent 85%)",
          }}
        >
          <Plexus className="w-full h-full opacity-90" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--background) 0%, transparent 50%, transparent 100%)" }} />
          <div className="absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to bottom, transparent, var(--background))" }} />
          <div className="absolute inset-x-0 top-0 h-24" style={{ background: "linear-gradient(to top, transparent, var(--background))" }} />
        </div>

        {/* Floating glow orb */}
        <div className="absolute top-1/3 right-[15%] w-72 h-72 rounded-full pointer-events-none animate-float" style={{ background: "radial-gradient(circle, oklch(0.6 0.28 285 / 0.4), transparent 65%)", filter: "blur(40px)" }} />

        {/* Decorative rotating ring */}
        <div className="hidden lg:block absolute top-24 right-24 w-40 h-40 pointer-events-none animate-spin-slow opacity-40">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="48" stroke="url(#ringGrad)" strokeWidth="0.5" strokeDasharray="2 4" />
            <defs>
              <linearGradient id="ringGrad" x1="0" y1="0" x2="100" y2="100">
                <stop offset="0%" stopColor="oklch(0.7 0.27 285)" />
                <stop offset="100%" stopColor="oklch(0.6 0.27 240)" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full glass animate-fade-up">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                <span className="relative rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-[10px] font-semibold tracking-[0.3em] text-foreground/80">CZĘSTOCHOWA</span>
            </div>
            <p className="text-xs font-semibold tracking-[0.35em] text-primary mb-6 animate-fade-up">
              NOWOCZESNE ROZWIĄZANIA DLA FIRM
            </p>
            <h1
              className="text-6xl md:text-7xl lg:text-9xl font-bold leading-[0.9] tracking-tight animate-fade-up text-glow"
              style={{ fontFamily: "'Space Grotesk', sans-serif", animationDelay: "80ms" }}
            >
              Mativo<br /><span className="text-gradient-primary">Studio</span>
            </h1>
            <div className="mt-8 h-[2px] w-24 bg-gradient-primary rounded-full animate-fade-up glow" style={{ animationDelay: "160ms" }} />
            <p className="mt-8 text-base md:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-fade-up" style={{ animationDelay: "240ms" }}>
              Tworzę nowoczesne <span className="text-foreground font-medium">strony wizytówkowe</span> dla lokalnych firm, które jasno prezentują <span className="text-foreground font-medium">ofertę</span>, budują <span className="text-foreground font-medium">zaufanie</span> i umożliwiają klientowi szybki <span className="text-foreground font-medium">kontakt</span> lub rezerwację.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "320ms" }}>
              <CTAButton to="/kontakt">DARMOWA WYCENA</CTAButton>
              <CTAButton to="/uslugi" variant="ghost">NASZE USŁUGI</CTAButton>
            </div>

          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: "600ms" }}>
          <span className="text-[10px] tracking-[0.3em] text-muted-foreground">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 -top-32 h-32" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.08 0.03 280 / 0.4))" }} />
        <div className="pointer-events-none absolute inset-x-0 -bottom-32 h-32" style={{ background: "linear-gradient(to top, transparent, oklch(0.08 0.03 280 / 0.4))" }} />
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="CO ROBIMY?"
              title={<>Kompleksowa obsługa <span className="text-gradient-primary">Twojej firmy</span> online.</>}
              subtitle="Pomagamy firmom w Polsce zdobywać klientów dzięki nowoczesnym stronom, skutecznemu SEO i profesjonalnemu marketingowi."
            />
            <div className="mt-8 reveal">
              <Link to="/uslugi" className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-primary hover:gap-3 transition-all">
                ZOBACZ WSZYSTKIE USŁUGI <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="group relative glass rounded-2xl p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 reveal overflow-hidden"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
                <div className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-secondary/60 border border-border group-hover:glow transition-all">
                  <s.icon className="h-6 w-6 text-primary-glow" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity blur-xl" />
                </div>
                <h3 className="relative text-lg font-semibold mb-3" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{s.title}</h3>
                <p className="relative text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-8 w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all">
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O NAS preview */}
      <section className="relative container mx-auto px-6 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(to bottom, oklch(0.08 0.03 280 / 0.35), transparent)" }} />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(to top, oklch(0.08 0.03 280 / 0.35), transparent)" }} />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader
              eyebrow="O NAS"
              title={<>Studio, które tworzy <span className="text-gradient-primary">cyfrowy wzrost</span>.</>}
              subtitle="Łączymy design, technologię i marketing, by Twoja firma rosła w internecie. Skupiamy się na wynikach — nie na pustych obietnicach."
            />
            <div className="mt-10 reveal">
              <CTAButton to="/o-nas" variant="ghost">POZNAJ NAS</CTAButton>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            {[
              { icon: Sparkles, k: "Nowoczesne", v: "Stack 2026: React, TanStack, Vite, Edge." },
              { icon: Target, k: "Wynikowe", v: "Mierzalny ROI z każdego projektu." },
              { icon: Zap, k: "Szybkie", v: "Wdrożenia w tygodniach, nie miesiącach." },
              { icon: Heart, k: "Dedykowane", v: "Każdy projekt traktujemy indywidualnie." },
            ].map((f, i) => (
              <div key={f.k} className="glass rounded-2xl p-6 reveal" style={{ transitionDelay: `${i * 60}ms` }}>
                <f.icon className="h-5 w-5 text-primary-glow mb-4" />
                <p className="text-sm font-semibold mb-1.5">{f.k}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{f.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative container mx-auto px-6 py-24">
        <div className="pointer-events-none absolute inset-x-0 -top-24 h-24" style={{ background: "linear-gradient(to bottom, transparent, oklch(0.08 0.03 280 / 0.3))" }} />
        <div className="relative glass rounded-3xl p-12 md:p-16 overflow-hidden reveal">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-40" style={{ background: "var(--gradient-primary)" }} />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Gotowy na <span className="text-gradient-primary">cyfrowy wzrost</span>?
              </h2>
              <p className="mt-4 text-muted-foreground max-w-xl">
                Otrzymaj darmową wycenę i strategię działania dla Twojej firmy. Bez zobowiązań.
              </p>
            </div>
            <CTAButton to="/kontakt">DARMOWA WYCENA</CTAButton>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
