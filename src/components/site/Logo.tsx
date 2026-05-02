export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="mativoGrad" x1="0" y1="0" x2="44" y2="44" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="oklch(0.72 0.22 275)" />
              <stop offset="100%" stopColor="oklch(0.6 0.27 295)" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="42" height="42" rx="10" stroke="url(#mativoGrad)" strokeWidth="1.5" fill="oklch(0.13 0.04 270 / 0.4)" />
          <path d="M10 32 V14 L18 24 L22 19 L26 24 L34 14 V32" stroke="url(#mativoGrad)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
        <div className="absolute inset-0 blur-xl opacity-60 -z-10 bg-gradient-primary rounded-xl" />
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-bold tracking-wider text-foreground text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>MATIVO</span>
        <span className="text-[10px] tracking-[0.3em] text-muted-foreground mt-0.5">STUDIO</span>
      </div>
    </div>
  );
}