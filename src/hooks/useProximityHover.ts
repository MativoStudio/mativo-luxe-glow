import { useEffect } from "react";

/**
 * Mobile / touch-only behavior:
 * On devices without hover, finds the card within each [data-proximity-group]
 * that is closest to the vertical center of the viewport and marks it with
 * data-near="true". CSS then mirrors the desktop :hover styling on that card.
 */
export function useProximityHover() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none)");
    if (!mq.matches) return;

    let raf = 0;
    const compute = () => {
      raf = 0;
      const groups = document.querySelectorAll<HTMLElement>("[data-proximity-group]");
      const vh = window.innerHeight;
      const centerY = vh / 2;
      groups.forEach((group) => {
        const items = group.querySelectorAll<HTMLElement>("[data-proximity-item]");
        let nearest: HTMLElement | null = null;
        let nearestDist = Infinity;
        items.forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.bottom < 40 || rect.top > vh - 40) return;
          const elCenter = rect.top + rect.height / 2;
          const d = Math.abs(elCenter - centerY);
          if (d < nearestDist) {
            nearestDist = d;
            nearest = el;
          }
        });
        items.forEach((el) => {
          if (el === nearest) el.setAttribute("data-near", "true");
          else el.removeAttribute("data-near");
        });
      });
    };
    const schedule = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(compute);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
