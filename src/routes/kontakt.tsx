import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { SectionHeader } from "@/components/site/SectionHeader";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Mativo Studio" },
      { name: "description", content: "Skontaktuj się z Mativo Studio. Email, telefon, formularz darmowej wyceny." },
      { property: "og:title", content: "Kontakt — Mativo Studio" },
      { property: "og:description", content: "Porozmawiajmy o Twoim projekcie. Darmowa wycena bez zobowiązań." },
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
      <section className="container mx-auto px-6 py-16">
        <SectionHeader
          eyebrow="KONTAKT"
          title={<>Porozmawiajmy o <span className="text-gradient-primary">Twoim projekcie</span>.</>}
          subtitle="Wypełnij formularz lub napisz bezpośrednio. Odpowiadamy w 24h. Wycena jest darmowa i bez zobowiązań."
        />
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-4">
            {[
              { icon: Mail, k: "Email", v: "hello@mativostudio.pl", href: "mailto:hello@mativostudio.pl" },
              { icon: Phone, k: "Telefon", v: "+48 500 000 000", href: "tel:+48500000000" },
              { icon: MapPin, k: "Lokalizacja", v: "Polska — pracujemy zdalnie", href: undefined as string | undefined },
            ].map((c, i) => (
              <a
                key={c.k}
                href={c.href ?? "#"}
                className="group glass rounded-2xl p-6 flex items-center gap-5 hover:border-primary/60 transition-all reveal"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/60 border border-border flex items-center justify-center group-hover:glow transition-all">
                  <c.icon className="h-5 w-5 text-primary-glow" />
                </div>
                <div>
                  <p className="text-[10px] tracking-[0.25em] text-muted-foreground">{c.k.toUpperCase()}</p>
                  <p className="font-medium mt-1">{c.v}</p>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass rounded-3xl p-8 md:p-10 reveal space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Imię" name="name" placeholder="Jan Kowalski" />
              <Field label="Email" name="email" type="email" placeholder="jan@firma.pl" />
            </div>
            <Field label="Firma" name="company" placeholder="Twoja firma" />
            <div>
              <label className="block text-[10px] tracking-[0.25em] text-muted-foreground mb-2">WIADOMOŚĆ</label>
              <textarea
                rows={5}
                required
                placeholder="Opisz krótko swój projekt..."
                className="w-full bg-secondary/40 border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary focus:glow transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              className="group relative w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl bg-gradient-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] overflow-hidden transition-all hover:scale-[1.01] glow"
            >
              <span className="relative z-10">{sent ? "DZIĘKUJEMY — ODPOWIEMY WKRÓTCE" : "WYŚLIJ WIADOMOŚĆ"}</span>
              {!sent && <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />}
            </button>
          </form>
        </div>
      </section>
    </SiteLayout>
  );
}
