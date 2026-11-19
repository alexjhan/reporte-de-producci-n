import { useEffect, useRef } from "react";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  hue: number;
  dh: number;
}

const GridBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobs = useRef<Blob[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initBlobs();
    };

    const initBlobs = () => {
      const w = canvas.width;
      const h = canvas.height;
      blobs.current = [
        { x: w * 0.2, y: h * 0.3, vx: 0.18, vy: 0.12, r: w * 0.38, hue: 210, dh: 0.03 },
        { x: w * 0.7, y: h * 0.6, vx: -0.14, vy: 0.16, r: w * 0.32, hue: 260, dh: -0.02 },
        { x: w * 0.5, y: h * 0.1, vx: 0.10, vy: -0.13, r: w * 0.28, hue: 185, dh: 0.025 },
        { x: w * 0.85, y: h * 0.2, vx: -0.16, vy: 0.10, r: w * 0.30, hue: 230, dh: -0.015 },
      ];
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);

      for (const b of blobs.current) {
        b.x += b.vx;
        b.y += b.vy;
        b.hue += b.dh;

        if (b.x < -b.r / 2 || b.x > w + b.r / 2) b.vx *= -1;
        if (b.y < -b.r / 2 || b.y > h + b.r / 2) b.vy *= -1;

        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `hsla(${b.hue}, 90%, 60%, 0.55)`);
        grad.addColorStop(0.5, `hsla(${b.hue + 20}, 80%, 50%, 0.25)`);
        grad.addColorStop(1, `hsla(${b.hue + 40}, 70%, 40%, 0)`);

        ctx.beginPath();
        ctx.ellipse(b.x, b.y, b.r, b.r * 0.65, Math.sin(Date.now() * 0.0002) * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default GridBackground;
