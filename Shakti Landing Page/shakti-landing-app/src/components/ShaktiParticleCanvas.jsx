import React, { useEffect, useRef } from 'react';

/**
 * ShaktiParticleCanvas
 * Replicates the exact Google Antigravity vector field particle simulation from Image 3:
 * - Liftoff anti-gravity upward floating vector dashes & capsules
 * - Spectrum of Pink, Rose, Crimson, Purple, Blue, Amber & Magenta capsules
 * - Interactive mouse repulsion & orbital disturbance
 * - High-definition canvas with responsive pixel density
 */
export default function ShaktiParticleCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Spectrum colors tailored for Shakti: Rose, Magenta, Pink, Amber, Blue, Violet
    const colors = [
      '#E11D48', // Rose
      '#EC4899', // Pink
      '#F43F5E', // Bright Rose
      '#FB7185', // Soft Rose
      '#8B5CF6', // Violet
      '#3B82F6', // Blue
      '#F59E0B', // Amber
      '#10B981', // Emerald
      '#9333EA', // Purple
      '#E50914'  // Crimson
    ];

    const particleCount = Math.min(Math.floor((width * height) / 3800), 320);
    const particles = [];

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 180,
      active: false
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        const angle = Math.random() * Math.PI * 2;
        const rx = (width * 0.48) * Math.sqrt(Math.random());
        const ry = (height * 0.42) * Math.sqrt(Math.random());

        this.x = width / 2 + Math.cos(angle) * rx;
        this.y = initial ? (height * 0.44 + Math.sin(angle) * ry) : height + 10;

        this.size = Math.random() * 2.8 + 2.0; // width of dash
        this.length = this.size * (Math.random() * 2.4 + 2.6); // length of capsule

        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.75 + 0.25;

        // Upward liftoff velocity
        this.vy = -(Math.random() * 0.75 + 0.35);
        this.vx = (Math.random() - 0.5) * 0.35;

        this.rotation = Math.atan2(this.vy, this.vx) + Math.PI / 2;

        this.ax = 0;
        this.ay = 0;
        this.friction = 0.94;
      }

      update() {
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 4.8;
            const angle = Math.atan2(dy, dx);
            this.ax += Math.cos(angle) * force;
            this.ay += Math.sin(angle) * force;
          }
        }

        this.vx += this.ax;
        this.vy += this.ay;

        this.vx *= this.friction;
        this.vy = Math.min(-0.25, this.vy * this.friction);

        this.x += this.vx;
        this.y += this.vy;

        this.ax = 0;
        this.ay = 0;

        this.rotation = Math.atan2(this.vy, this.vx) + Math.PI / 2;

        if (this.y < -30) {
          this.y = height + 20;
          this.x = width * 0.08 + Math.random() * (width * 0.84);
          this.vy = -(Math.random() * 0.75 + 0.35);
        }

        if (this.x < -30) this.x = width + 20;
        if (this.x > width + 30) this.x = -20;
      }

      draw(c) {
        c.save();
        c.translate(this.x, this.y);
        c.rotate(this.rotation);

        c.globalAlpha = this.alpha;
        c.fillStyle = this.color;

        const w = this.size;
        const h = this.length;
        const r = w / 2;

        c.beginPath();
        c.roundRect(-w / 2, -h / 2, w, h, [r]);
        c.fill();

        c.restore();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      mouse.x += (mouse.targetX - mouse.x) * 0.15;
      mouse.y += (mouse.targetY - mouse.y) * 0.15;

      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 opacity-80 transition-opacity duration-1000 ${className}`}
    />
  );
}
