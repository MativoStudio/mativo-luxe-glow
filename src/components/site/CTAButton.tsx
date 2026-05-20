import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = {
  to: "/" | "/o-nas" | "/uslugi" | "/realizacje" | "/cennik" | "/kontakt";
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
  fullWidthOnMobile?: boolean;
};

export function CTAButton({ to, children, variant = "primary", className = "", fullWidthOnMobile = false }: Props) {
  const widthClass = fullWidthOnMobile ? "w-full sm:w-auto justify-center" : "";
  if (variant === "primary") {
    return (
      <Link
        to={to}
        className={`group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-primary-foreground text-[11px] sm:text-xs font-semibold tracking-[0.22em] overflow-hidden transition-all duration-500 hover:scale-[1.04] animate-glow-pulse ${widthClass} ${className}`}
        style={{ background: "linear-gradient(135deg, oklch(0.65 0.28 290), oklch(0.55 0.27 240))" }}
      >
        {/* Shimmer sweep */}
        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out" style={{ background: "linear-gradient(90deg, transparent, oklch(1 0 0 / 0.25), transparent)" }} />
        {/* Inner border */}
        <span className="absolute inset-0 rounded-xl border border-white/20" />
        <span className="relative z-10">{children}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
      </Link>
    );
  }
  return (
    <Link
      to={to}
      className={`group relative inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-border bg-secondary/30 backdrop-blur-md text-[11px] sm:text-xs font-semibold tracking-[0.22em] overflow-hidden hover:border-primary/70 transition-all duration-500 ${widthClass} ${className}`}
    >
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(135deg, oklch(0.6 0.27 285 / 0.15), transparent)" }} />
      <span className="relative z-10">{children}</span>
      <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-500 group-hover:translate-x-1.5" />
    </Link>
  );
}
