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
      const spacing = w < 768 ? 56 : 46;
      const cols = Math.max(12, Math.floor(w / spacing));
      const rows = Math.max(8, Math.floor(h / spacing));
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
    const maxDist = 70;
    const maxDist2 = maxDist * maxDist;
    const draw = () => {
      t += 0.005;
      ctx.clearRect(0, 0, w, h);

      // Update + bin into spatial grid (cell size = maxDist)
      const cellSize = maxDist;
      const gridCols = Math.max(1, Math.ceil(w / cellSize));
      const gridRows = Math.max(1, Math.ceil(h / cellSize));
      const grid: number[][] = new Array(gridCols * gridRows);
      for (let k = 0; k < grid.length; k++) grid[k] = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        const drift = Math.sin(t + p.bx * 0.01 + p.by * 0.01) * 6;
        p.x = p.bx + Math.cos(t * 0.8 + p.by * 0.02) * 8;
        p.y = p.by + drift;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 12000) {
          const f = (12000 - d2) / 12000;
          const inv = 1 / Math.sqrt(d2 + 1);
          p.x += dx * inv * f * 8;
          p.y += dy * inv * f * 8;
        }

        const cx = Math.min(gridCols - 1, Math.max(0, Math.floor(p.x / cellSize)));
        const cy = Math.min(gridRows - 1, Math.max(0, Math.floor(p.y / cellSize)));
        grid[cy * gridCols + cx].push(i);
      }

      // Lines — only check neighbouring cells
      ctx.lineWidth = 0.6;
      for (let cy = 0; cy < gridRows; cy++) {
        for (let cx = 0; cx < gridCols; cx++) {
          const cell = grid[cy * gridCols + cx];
          for (let dyc = 0; dyc <= 1; dyc++) {
            for (let dxc = -1; dxc <= 1; dxc++) {
              if (dyc === 0 && dxc < 0) continue;
              const nx = cx + dxc, ny = cy + dyc;
              if (nx < 0 || nx >= gridCols || ny >= gridRows) continue;
              const other = grid[ny * gridCols + nx];
              for (let a = 0; a < cell.length; a++) {
                const pa = points[cell[a]];
                const startB = (dxc === 0 && dyc === 0) ? a + 1 : 0;
                for (let b = startB; b < other.length; b++) {
                  const pb = points[other[b]];
                  const dx = pa.x - pb.x;
                  const dy = pa.y - pb.y;
                  const d2 = dx * dx + dy * dy;
                  if (d2 < maxDist2) {
                    const alpha = (1 - Math.sqrt(d2) / maxDist) * 0.5;
                    ctx.strokeStyle = `rgba(150, 130, 255, ${alpha})`;
                    ctx.beginPath();
                    ctx.moveTo(pa.x, pa.y);
                    ctx.lineTo(pb.x, pb.y);
                    ctx.stroke();
                  }
                }
              }
            }
          }
        }
      }

      // Dots — single path
      ctx.fillStyle = "rgba(180, 160, 255, 0.85)";
      ctx.beginPath();
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        ctx.moveTo(p.x + 1.1, p.y);
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
      }
      ctx.fill();

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