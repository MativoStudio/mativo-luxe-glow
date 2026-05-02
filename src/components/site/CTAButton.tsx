import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

type Props = { to: string; children: React.ReactNode; variant?: "primary" | "ghost"; className?: string };

export function CTAButton({ to, children, variant = "primary", className = "" }: Props) {
  if (variant === "primary") {
    return (
      <Link
        to={to as string}
        className={`group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground text-xs font-semibold tracking-[0.2em] overflow-hidden transition-all hover:scale-[1.03] animate-glow-pulse ${className}`}
      >
        <span className="relative z-10">{children}</span>
        <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Link>
    );
  }
  return (
    <Link
      to={to as string}
      className={`group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl border border-border bg-secondary/30 backdrop-blur-md text-xs font-semibold tracking-[0.2em] hover:border-primary hover:bg-secondary/50 transition-all ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Link>
  );
}
