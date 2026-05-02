import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Particles } from "./Particles";
import { useReveal } from "@/hooks/useReveal";
import { useEffect, useState } from "react";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useReveal();
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const total = h.scrollHeight - h.clientHeight;
      setProgress(total > 0 ? (h.scrollTop / total) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden noise">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-bg opacity-50" />

      {/* Aurora orbs */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div
          className="aurora animate-aurora"
          style={{
            top: "-10%", left: "-5%", width: "55vw", height: "55vw",
            background: "radial-gradient(circle, oklch(0.55 0.28 290 / 0.55), transparent 60%)",
          }}
        />
        <div
          className="aurora animate-aurora"
          style={{
            top: "30%", right: "-10%", width: "50vw", height: "50vw",
            background: "radial-gradient(circle, oklch(0.5 0.27 240 / 0.45), transparent 60%)",
            animationDelay: "-6s",
          }}
        />
        <div
          className="aurora animate-aurora"
          style={{
            bottom: "-15%", left: "20%", width: "60vw", height: "60vw",
            background: "radial-gradient(circle, oklch(0.45 0.25 310 / 0.35), transparent 60%)",
            animationDelay: "-12s",
          }}
        />
      </div>

      {/* Vignette */}
      <div
        className="fixed inset-0 -z-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 100% 80% at 50% 50%, transparent 40%, oklch(0.03 0.02 270 / 0.7))" }}
      />

      <Particles className="fixed inset-0 -z-10 w-full h-full pointer-events-none" />

      {/* Scroll progress */}
      <div className="fixed top-0 inset-x-0 h-[2px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-primary transition-[width] duration-150"
          style={{ width: `${progress}%`, boxShadow: "0 0 10px oklch(0.7 0.27 285 / 0.8)" }}
        />
      </div>

      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
