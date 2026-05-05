import logoImg from "@/assets/mativo-logo.png";

export function Logo({ className = "", size = 44 }: { className?: string; size?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative shrink-0" style={{ width: size, height: size }}>
        <img
          src={logoImg}
          alt="Mativo Studio"
          width={size}
          height={size}
          className="relative z-10 object-contain w-full h-full"
          style={{ filter: "drop-shadow(0 0 18px oklch(0.65 0.28 285 / 0.55))" }}
        />
        <div className="absolute inset-0 blur-2xl opacity-50 -z-10 bg-gradient-primary rounded-full" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-bold tracking-[0.18em] text-foreground text-base sm:text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MATIVO</span>
        <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-muted-foreground mt-0.5">STUDIO</span>
      </div>
    </div>
  );
}