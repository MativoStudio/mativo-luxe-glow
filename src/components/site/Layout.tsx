import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Particles } from "./Particles";
import { useReveal } from "@/hooks/useReveal";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  useReveal();
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="fixed inset-0 -z-10 bg-background" />
      <div className="fixed inset-0 -z-10 grid-bg opacity-40" />
      <div className="fixed inset-0 -z-10 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% -10%, oklch(0.35 0.2 285 / 0.35), transparent 60%)" }} />
      <Particles className="fixed inset-0 -z-10 w-full h-full pointer-events-none" />

      <Navbar />
      <main className="pt-28">{children}</main>
      <Footer />
    </div>
  );
}
