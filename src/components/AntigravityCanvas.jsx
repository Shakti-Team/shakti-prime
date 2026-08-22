import React, { useEffect, useRef } from 'react';

/**
 * AntigravityCanvas
 * Replicates the Google Antigravity vector field particle simulation:
 * - Liftoff anti-gravity upward floating
 * - Spectrum colored oriented capsule dashes
 * - Interactive mouse repulsion & orbital disturbance
 * - Smooth dampening & boundary wrapping
 */
export default function AntigravityCanvas({ className = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Color palette inspired by Google Antigravity + Shakti Crimson/Ruby accents
    const colors = [
      '#4285F4', // Google Blue
      '#EA4335', // Google / Shakti Red
      '#FBBC05', // Google Amber
      '#34A853', // Google Emerald
      '#9333EA', // Purple
      '#EC4899', // Pink
      '#E50914', // Shakti Crimson
      '#F43F5E', // Rose
      '#06B6D4', // Cyan
      '#8B5CF6'  // Violet
    ];

    // Responsive particle count
    const particleCount = Math.min(Math.floor((width * height) / 4800), 280);
    const particles = [];

    // Mouse coordinates with smooth easing
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      active: false
    };

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        // Form elliptical / parabolic cloud in center & upper hero
        const angle = Math.random() * Math.PI * 2;
        const rx = (width * 0.45) * Math.sqrt(Math.random());
        const ry = (height * 0.4) * Math.sqrt(Math.random());

        this.x = width / 2 + Math.cos(angle) * rx;
        this.y = initial ? (height * 0.42 + Math.sin(angle) * ry) : height + 10;

        this.baseX = this.x;
        this.baseY = this.y;

        this.size = Math.random() * 2.8 + 2.0; // width of dash
        this.length = this.size * (Math.random() * 2.2 + 2.5); // length of capsule

        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.75 + 0.25;

        // Liftoff velocity (negative Y is upward)
        this.vy = -(Math.random() * 0.7 + 0.35);
        this.vx = (Math.random() - 0.5) * 0.4;

        this.rotation = Math.atan2(this.vy, this.vx) + Math.PI / 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;

        // Spring physics
        this.ax = 0;
        this.ay = 0;
        this.friction = 0.94;
      }

      update() {
        // Mouse repulsion
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouse.radius && dist > 0) {
            const force = (1 - dist / mouse.radius) * 4.5;
            const angle = Math.atan2(dy, dx);
            this.ax += Math.cos(angle) * force;
            this.ay += Math.sin(angle) * force;
          }
        }

        // Apply physics
        this.vx += this.ax;
        this.vy += this.ay;

        // Apply dampening and velocity limits
        this.vx *= this.friction;
        this.vy = Math.min(-0.2, this.vy * this.friction); // maintain upward float

        this.x += this.vx;
        this.y += this.vy;

        // Reset acceleration
        this.ax = 0;
        this.ay = 0;

        // Dynamic angle follows flow direction
        this.rotation = Math.atan2(this.vy, this.vx) + Math.PI / 2;

        // Wrap around top to bottom (infinite liftoff loop)
        if (this.y < -30) {
          this.y = height + 20;
          this.x = width * 0.1 + Math.random() * (width * 0.8);
          this.vy = -(Math.random() * 0.7 + 0.35);
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

        // Draw rounded capsule/dash (Antigravity hallmark)
        const w = this.size;
        const h = this.length;
        const r = w / 2;

        c.beginPath();
        c.roundRect(-w / 2, -h / 2, w, h, [r]);
        c.fill();

        c.restore();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Handle resize
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    // Handle mouse move
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

    // Touch support for mobile
    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mouse.targetX = e.touches[0].clientX - rect.left;
        mouse.targetY = e.touches[0].clientY - rect.top;
        mouse.active = true;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave);

    // Animation render loop
    const render = () => {
      // Smooth mouse tracking
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
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 opacity-85 transition-opacity duration-1000 ${className}`}
    />
  );
}
