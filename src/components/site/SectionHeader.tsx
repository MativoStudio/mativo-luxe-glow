export function SectionHeader({ eyebrow, title, subtitle, align = "left" }: { eyebrow?: string; title: React.ReactNode; subtitle?: string; align?: "left" | "center" }) {
  return (
    <div className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="text-xs font-semibold tracking-[0.3em] text-primary mb-4 reveal">{eyebrow}</p>
      )}
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight reveal" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed reveal">{subtitle}</p>
      )}
    </div>
  );
}
