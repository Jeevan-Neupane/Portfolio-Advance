import { useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { CanvasShell, CanvasSurface } from "./style";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

type TrailPoint = {
  x: number;
  y: number;
  life: number;
};

const hexToRgba = (hex: string, alpha: number) => {
  const normalized = hex.replace("#", "");
  const expanded =
    normalized.length === 3
      ? normalized
          .split("")
          .map((character) => character + character)
          .join("")
      : normalized;

  if (expanded.length !== 6) {
    return `rgba(114, 182, 38, ${alpha})`;
  }

  const value = Number.parseInt(expanded, 16);
  const red = (value >> 16) & 255;
  const green = (value >> 8) & 255;
  const blue = value & 255;

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
};

const HomeBackgroundCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const theme = useTheme() as {
    specialColor: string;
    lighttextColor: string;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    const pointer = {
      x: 0,
      y: 0,
      active: true,
    };

    const particles: Particle[] = [];
    const trail: TrailPoint[] = [];
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let frameId = 0;
    let width = 0;
    let height = 0;

    const particleCount = () =>
      Math.max(28, Math.min(72, Math.floor((width * height) / 24000)));

    const seedParticles = () => {
      particles.length = 0;

      for (let index = 0; index < particleCount(); index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
          radius: 1.2 + Math.random() * 2.2,
        });
      }
    };

    const pushTrailPoint = (x: number, y: number) => {
      trail.push({ x, y, life: 1 });

      if (trail.length > 30) {
        trail.shift();
      }
    };

    const drawScene = () => {
      context.clearRect(0, 0, width, height);

      const backgroundGlow = context.createRadialGradient(
        width * 0.62,
        height * 0.2,
        0,
        width * 0.62,
        height * 0.2,
        Math.max(width, height)
      );

      backgroundGlow.addColorStop(0, hexToRgba(theme.specialColor, 0.11));
      backgroundGlow.addColorStop(0.55, hexToRgba(theme.specialColor, 0.04));
      backgroundGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

      context.fillStyle = backgroundGlow;
      context.fillRect(0, 0, width, height);

      if (pointer.active) {
        const pointerGlow = context.createRadialGradient(
          pointer.x,
          pointer.y,
          0,
          pointer.x,
          pointer.y,
          210
        );

        pointerGlow.addColorStop(0, hexToRgba(theme.lighttextColor, 0.12));
        pointerGlow.addColorStop(0.45, hexToRgba(theme.specialColor, 0.08));
        pointerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");

        context.fillStyle = pointerGlow;
        context.fillRect(0, 0, width, height);
      }

      for (let index = trail.length - 1; index >= 0; index -= 1) {
        const point = trail[index];

        point.life -= prefersReducedMotion ? 0.1 : 0.035;

        if (point.life <= 0) {
          trail.splice(index, 1);
          continue;
        }

        const nextPoint = trail[index + 1];

        if (nextPoint) {
          context.beginPath();
          context.strokeStyle = hexToRgba(theme.specialColor, point.life * 0.34);
          context.lineWidth = 1.5 + point.life * 3.5;
          context.lineCap = "round";
          context.moveTo(point.x, point.y);
          context.lineTo(nextPoint.x, nextPoint.y);
          context.stroke();
        }

        context.beginPath();
        context.fillStyle = hexToRgba(theme.lighttextColor, point.life * 0.2);
        context.arc(point.x, point.y, 1 + point.life * 2.1, 0, Math.PI * 2);
        context.fill();
      }

      const connectionDistance = 220;
      const pointerDistance = 180;

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!prefersReducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (particle.x < -40) particle.x = width + 40;
          if (particle.x > width + 40) particle.x = -40;
          if (particle.y < -40) particle.y = height + 40;
          if (particle.y > height + 40) particle.y = -40;
        }

        const distanceToPointer = pointer.active
          ? Math.hypot(pointer.x - particle.x, pointer.y - particle.y)
          : Number.POSITIVE_INFINITY;
        const highlightRadius = Math.max(0, 1 - distanceToPointer / 220);

        context.beginPath();
        context.fillStyle = hexToRgba(
          theme.specialColor,
          0.22 + highlightRadius * 0.36
        );
        context.arc(
          particle.x,
          particle.y,
          particle.radius + highlightRadius * 1.2,
          0,
          Math.PI * 2
        );
        context.fill();

        for (
          let otherIndex = index + 1;
          otherIndex < particles.length;
          otherIndex += 1
        ) {
          const otherParticle = particles[otherIndex];
          const distance = Math.hypot(
            particle.x - otherParticle.x,
            particle.y - otherParticle.y
          );

          if (distance > connectionDistance) {
            continue;
          }

          const alpha = (1 - distance / connectionDistance) * 0.15;

          context.beginPath();
          context.strokeStyle = hexToRgba(theme.specialColor, alpha);
          context.lineWidth = 1;
          context.lineCap = "round";
          context.moveTo(particle.x, particle.y);
          context.lineTo(otherParticle.x, otherParticle.y);
          context.stroke();
        }

        if (pointer.active && distanceToPointer < pointerDistance) {
          const pointerAlpha = (1 - distanceToPointer / pointerDistance) * 0.28;

          context.beginPath();
          context.strokeStyle = hexToRgba(theme.specialColor, pointerAlpha);
          context.lineWidth = 1.2;
          context.lineCap = "round";
          context.moveTo(pointer.x, pointer.y);
          context.lineTo(particle.x, particle.y);
          context.stroke();
        }

      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const deviceScale = Math.min(window.devicePixelRatio || 1, 2);

      pointer.x = width * 0.5;
      pointer.y = height * 0.42;

      canvas.width = Math.floor(width * deviceScale);
      canvas.height = Math.floor(height * deviceScale);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(deviceScale, 0, 0, deviceScale, 0, 0);
      seedParticles();
      drawScene();
    };

    const animate = () => {
      drawScene();
      frameId = window.requestAnimationFrame(animate);
    };

    const handleMouseMove = (event: MouseEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
      pushTrailPoint(pointer.x, pointer.y);

      drawScene();
    };

    const handleMouseLeave = () => {
      drawScene();
    };

    resize();

    if (!prefersReducedMotion) {
      animate();
    }

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.cancelAnimationFrame(frameId);
    };
  }, [theme.lighttextColor, theme.specialColor]);

  return (
    <CanvasShell aria-hidden="true">
      <CanvasSurface ref={canvasRef} />
    </CanvasShell>
  );
};

export default HomeBackgroundCanvas;