import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Mativo Studio" },
      { name: "description", content: "Skontaktuj się z Mativo Studio. Telefon, email, formularz wyceny. Odpowiadam w 24h." },
      { property: "og:title", content: "Kontakt — Mativo Studio" },
      { property: "og:description", content: "Porozmawiajmy o Twojej stronie. Wycena bez zobowiązań." },
    ],
  }),
  component: ContactPage,
});

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label htmlFor={name} className="block text-[10px] tracking-[0.25em] text-muted-foreground mb-2">{label.toUpperCase()}</label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:glow transition-all"
      />
    </div>
  );
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <SiteLayout>
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <SectionHeader
          eyebrow="KONTAKT"
          title={<>Pogadajmy o <span className="text-gradient-primary">Twojej stronie</span>.</>}
          subtitle="Napisz parę zdań o swojej firmie i tym, czego potrzebujesz. Wracam z konkretną wyceną w ciągu 24 godzin. Bez zobowiązań."
        />
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="lg:col-span-2 space-y-3 sm:space-y-4 order-2 lg:order-1">
            {[
              { icon: Phone, k: "Telefon", v: "+48 889 521 418", href: "tel:+48889521418" },
              { icon: Mail, k: "Email", v: "kontakt@mativostudio.pl", href: "mailto:kontakt@mativostudio.pl" },
              { icon: MapPin, k: "Lokalizacja", v: "Częstochowa — pracuję zdalnie z całą Polską", href: undefined as string | undefined },
            ].map((c, i) => (
              <a
                key={c.k}
                href={c.href ?? "#"}
                className="group glass rounded-2xl p-5 sm:p-6 flex items-center gap-4 sm:gap-5 hover:border-primary/60 transition-all reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-secondary/60 border border-border flex items-center justify-center group-hover:glow transition-all">
                  <c.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] tracking-[0.25em] text-muted-foreground">{c.k.toUpperCase()}</p>
                  <p className="text-sm sm:text-base font-medium mt-1 break-words">{c.v}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5 sm:p-6 reveal">
              <p className="text-[10px] tracking-[0.25em] text-muted-foreground mb-2">CZAS REAKCJI</p>
              <p className="text-[13px] sm:text-sm text-muted-foreground leading-relaxed">
                Odpowiadam zwykle tego samego dnia, najpóźniej w ciągu 24 godzin roboczych.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 md:p-10 reveal space-y-4 sm:space-y-5 order-1 lg:order-2"
          >
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <Field label="Imię" name="name" placeholder="Jan Kowalski" />
              <Field label="Email" name="email" type="email" placeholder="jan@firma.pl" />
            </div>
            <Field label="Firma / branża" name="company" placeholder="np. Salon beauty, barber, restauracja" />
            <div>
              <label className="block text-[10px] tracking-[0.25em] text-muted-foreground mb-2">OPISZ KRÓTKO PROJEKT</label>
              <textarea
                rows={5}
                required
                placeholder="Co robisz, czego potrzebujesz od strony, czy masz domenę, czy chcesz rezerwacje online..."
                className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-base sm:text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:glow transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground text-[11px] sm:text-xs font-semibold tracking-[0.2em] overflow-hidden transition-all hover:scale-[1.01] glow"
            >
              <span className="relative z-10">{sent ? "DZIĘKUJĘ — ODPOWIEM W 24H" : "WYŚLIJ WIADOMOŚĆ"}</span>
              {!sent && <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>
            <p className="text-[10px] text-muted-foreground/70 text-center">
              Wysyłając wiadomość zgadzasz się na kontakt zwrotny w sprawie wyceny.
            </p>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
