import React, { useEffect, useRef, useCallback } from 'react';

// ─── Constants ────────────────────────────────────────────────────────────────

const CELL_SIZE = 52; // Grid cell size
const INFLUENCE_RADIUS = 260; // Pointer warp influence radius
const MAX_WARP = 26; // Max displacement
const DOT_SPACING = 28; // Background subtle dots
const LERP_SPEED = 0.08;

const NODE_BASE_RADIUS = 1.8;
const NODE_ACTIVE_RADIUS = 3.4;

// ─── Helpers ──────────────────────────────────────────────────────────────────

function lerpN(a, b, t) {
  return a + (b - a) * t;
}

function lerpColor(base, active, t) {
  const r = Math.round(lerpN(base.r, active.r, t));
  const g = Math.round(lerpN(base.g, active.g, t));
  const b = Math.round(lerpN(base.b, active.b, t));
  const a = lerpN(base.a, active.a, t);
  return `rgba(${r},${g},${b},${a.toFixed(3)})`;
}

/**
 * KineticGridCanvas
 * Front-page/Hero interactive kinetic grid that warps to cursor position and ripples on click.
 */
export default function KineticGridCanvas({ themeMode = 'shakti', className = '' }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const targetMouseRef = useRef({ x: -9999, y: -9999 });
  const ripplesRef = useRef([]);
  const rafRef = useRef(0);
  const sizeRef = useRef({ w: 0, h: 0 });

  // ── Warp calculation ─────────────────────────────────────────────────────────

  const getWarpedPoint = useCallback(
    (gx, gy, col, row, mouse, ripples, cols, rows) => {
      // Edge pin — smoothly locks boundary rows/cols in place
      const edgeMargin = 1.5;
      const colPin = Math.min(
        col / edgeMargin,
        (cols - 1 - col) / edgeMargin,
        1
      );
      const rowPin = Math.min(
        row / edgeMargin,
        (rows - 1 - row) / edgeMargin,
        1
      );
      const pinFactor = colPin * colPin * rowPin * rowPin;

      const dx = gx - mouse.x;
      const dy = gy - mouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const proximity = Math.max(0, 1 - dist / INFLUENCE_RADIUS) * pinFactor;

      // Ripple displacement
      let rx = 0;
      let ry = 0;
      for (const r of ripples) {
        const rdx = gx - r.x;
        const rdy = gy - r.y;
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy);
        const waveWidth = 55;
        const diff = rdist - r.radius;
        if (Math.abs(diff) < waveWidth) {
          const strength =
            (1 - Math.abs(diff) / waveWidth) * r.opacity * 20 * pinFactor;
          const angle = Math.atan2(rdy, rdx);
          const sign = diff < 0 ? -1 : 1;
          rx += Math.cos(angle) * strength * sign * -1;
          ry += Math.sin(angle) * strength * sign * -1;
        }
      }

      // Cursor warp with bell falloff
      if (dist < INFLUENCE_RADIUS && dist > 0 && pinFactor > 0) {
        const t = dist / INFLUENCE_RADIUS;
        const eased = t < 0.01 ? 0 : (1 - t) * (1 - t) * Math.min(1, dist / 60);
        const warpAmt = eased * MAX_WARP * pinFactor;
        const angle = Math.atan2(dy, dx);
        return {
          pt: {
            x: gx - Math.cos(angle) * warpAmt + rx,
            y: gy - Math.sin(angle) * warpAmt + ry,
          },
          proximity,
        };
      }

      return { pt: { x: gx + rx, y: gy + ry }, proximity };
    },
    []
  );

  // ── Draw loop ───────────────────────────────────────────────────────────────

  const draw = useCallback(
    (now) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const { w: W, h: H } = sizeRef.current;
      if (W === 0 || H === 0) return;

      const mouse = mouseRef.current;
      const ripples = ripplesRef.current;

      const themeConfig = {
        shakti: {
          bg: '#FAFAF9',
          dotColor: 'rgba(225, 29, 72, 0.06)',
          lineBase: { r: 225, g: 29, b: 72, a: 0.09 },
          lineActive: { r: 225, g: 29, b: 72, a: 0.9 },
          nodeBase: { r: 225, g: 29, b: 72, a: 0.18 },
          nodeActive: { r: 225, g: 29, b: 72, a: 1.0 },
          glow: '225,29,72',
          ripple: '244,63,94',
        },
        dark: {
          bg: '#161618',
          dotColor: 'rgba(255,255,255,0.05)',
          lineBase: { r: 255, g: 255, b: 255, a: 0.13 },
          lineActive: { r: 74, g: 158, b: 255, a: 0.9 },
          nodeBase: { r: 255, g: 255, b: 255, a: 0.2 },
          nodeActive: { r: 74, g: 158, b: 255, a: 1.0 },
          glow: '74,158,255',
          ripple: '100,180,255',
        },
      };

      const theme = themeConfig[themeMode] || themeConfig.shakti;

      ctx.clearRect(0, 0, W, H);

      // Background fill
      ctx.fillStyle = theme.bg;
      ctx.fillRect(0, 0, W, H);

      // Background subtle dot texture
      ctx.fillStyle = theme.dotColor;
      for (let x = DOT_SPACING / 2; x < W; x += DOT_SPACING) {
        for (let y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
          ctx.beginPath();
          ctx.arc(x, y, 0.75, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Update ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const age = (now - r.born) / 1000;
        r.radius = Math.max(0, age * 420);
        r.opacity = Math.max(0, 1 - age * 1.1);
        if (r.opacity <= 0) ripples.splice(i, 1);
      }

      // Build warped grid points
      const cols = Math.max(2, Math.ceil(W / CELL_SIZE)) + 1;
      const rows = Math.max(2, Math.ceil(H / CELL_SIZE)) + 1;
      const cellW = W / (cols - 1);
      const cellH = H / (rows - 1);

      const pts = [];
      const prox = [];

      for (let row = 0; row < rows; row++) {
        pts[row] = [];
        prox[row] = [];
        for (let col = 0; col < cols; col++) {
          const { pt, proximity } = getWarpedPoint(
            col * cellW,
            row * cellH,
            col,
            row,
            mouse,
            ripples,
            cols,
            rows
          );
          pts[row][col] = pt;
          prox[row][col] = proximity;
        }
      }

      // Draw Grid lines
      const drawSeg = (p1, p2, pr1, pr2) => {
        if (!p1 || !p2) return;
        const avg = ((pr1 || 0) + (pr2 || 0)) / 2;
        const t = avg * avg * (3 - 2 * avg); // smoothstep
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = lerpColor(theme.lineBase, theme.lineActive, t);
        ctx.lineWidth = lerpN(0.75, 1.6, t);
        ctx.stroke();
      };

      ctx.lineCap = 'butt';

      for (let row = 0; row < rows; row++) {
        if (!pts[row] || !prox[row]) continue;
        for (let col = 0; col < cols - 1; col++) {
          if (pts[row][col] && pts[row][col + 1]) {
            drawSeg(
              pts[row][col],
              pts[row][col + 1],
              prox[row][col],
              prox[row][col + 1]
            );
          }
        }
      }

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 1; row++) {
          if (pts[row] && pts[row + 1] && pts[row][col] && pts[row + 1][col]) {
            drawSeg(
              pts[row][col],
              pts[row + 1][col],
              prox[row][col],
              prox[row + 1][col]
            );
          }
        }
      }

      // Draw Intersection nodes
      for (let row = 0; row < rows; row++) {
        if (!pts[row] || !prox[row]) continue;
        for (let col = 0; col < cols; col++) {
          const p = pts[row][col];
          const pr = prox[row][col] || 0;
          if (!p) continue;
          const t = pr * pr * (3 - 2 * pr); // smoothstep
          const r = lerpN(NODE_BASE_RADIUS, NODE_ACTIVE_RADIUS, t);

          // Outer radial glow ring for active nodes
          if (t > 0.25) {
            const glowR = r + lerpN(0, 8, (t - 0.25) / 0.75);
            const grd = ctx.createRadialGradient(
              p.x,
              p.y,
              r * 0.5,
              p.x,
              p.y,
              glowR
            );
            grd.addColorStop(0, `rgba(${theme.glow},${(t * 0.4).toFixed(3)})`);
            grd.addColorStop(1, `rgba(${theme.glow},0)`);
            ctx.beginPath();
            ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
          }

          // Node fill dot
          ctx.beginPath();
          ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
          ctx.fillStyle = lerpColor(theme.nodeBase, theme.nodeActive, t);
          ctx.fill();
        }
      }

      // Ripple rings
      for (const r of ripples) {
        if (!r) continue;
        const safeRadius = Math.max(0, r.radius || 0);
        ctx.beginPath();
        ctx.arc(r.x, r.y, safeRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${theme.ripple},${((r.opacity || 0) * 0.4).toFixed(3)})`;
        ctx.lineWidth = 1.6;
        ctx.stroke();
      }
    },
    [getWarpedPoint, themeMode]
  );

  // ── Animation & Event Listeners ─────────────────────────────────────────────

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const parent = canvas.parentElement;
      const w = rect.width || parent?.offsetWidth || window.innerWidth;
      const h = rect.height || parent?.offsetHeight || window.innerHeight;
      canvas.width = w;
      canvas.height = h;
      sizeRef.current = { w, h };
    };

    setSize();
    window.addEventListener('resize', setSize);

    const onMouseMove = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseRef.current = { 
        x: e.clientX - rect.left, 
        y: e.clientY - rect.top 
      };
    };

    const onClick = (e) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        ripplesRef.current.push({
          x,
          y,
          radius: 0,
          opacity: 1,
          born: performance.now(),
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('click', onClick);

    const animate = (now) => {
      const m = mouseRef.current;
      const t = targetMouseRef.current;

      m.x = lerpN(m.x, t.x, LERP_SPEED);
      m.y = lerpN(m.y, t.y, LERP_SPEED);

      draw(now);
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', setSize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('click', onClick);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className || 'absolute inset-0 w-full h-full z-0'}`}
      style={{
        maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
      }}
    />
  );
}
