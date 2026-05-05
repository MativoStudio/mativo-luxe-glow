import { useEffect, useRef } from "react";

export function Plexus({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = 0, h = 0, dpr = 1;
    const points: { x: number; y: number; vx: number; vy: number; bx: number; by: number; }[] = [];

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Wave-shaped point cloud
      points.length = 0;
      const cols = Math.max(20, Math.floor(w / 28));
      const rows = Math.max(14, Math.floor(h / 28));
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const px = (i / (cols - 1)) * w;
          const py = (j / (rows - 1)) * h;
          // wave bias — denser top-right
          const wave = Math.sin((i / cols) * Math.PI * 1.4) * 30 + Math.cos((j / rows) * Math.PI) * 20;
          points.push({
            x: px,
            y: py + wave,
            bx: px,
            by: py + wave,
            vx: (Math.random() - 0.5) * 0.2,
            vy: (Math.random() - 0.5) * 0.2,
          });
        }
      }
    };

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onTouch = (e: TouchEvent) => {
      if (!e.touches[0]) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.touches[0].clientX - rect.left;
      mouse.y = e.touches[0].clientY - rect.top;
    };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    let t = 0;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      // Update
      for (const p of points) {
        const drift = Math.sin(t + p.bx * 0.01 + p.by * 0.01) * 6;
        p.x = p.bx + Math.cos(t * 0.8 + p.by * 0.02) * 8;
        p.y = p.by + drift;

        // mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 12000) {
          const f = (12000 - d2) / 12000;
          p.x += (dx / Math.sqrt(d2 + 1)) * f * 8;
          p.y += (dy / Math.sqrt(d2 + 1)) * f * 8;
        }
      }

      // Lines
      const maxDist = 42;
      for (let i = 0; i < points.length; i++) {
        const a = points[i];
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.5;
            ctx.strokeStyle = `rgba(150, 130, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of points) {
        ctx.fillStyle = "rgba(180, 160, 255, 0.85)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    // Listen on window so interaction works even when other elements are on top
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("mouseout", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}