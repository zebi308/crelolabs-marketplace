"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function AmbientBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#030407]">
      <div className="absolute inset-0 bg-radial-grid bg-[length:100%_100%,100%_100%,42px_42px,42px_42px] opacity-80" />
      <motion.div
        className="absolute left-[-10%] top-[-18%] h-[560px] w-[560px] rounded-full bg-blue-600/[.18] blur-[110px]"
        animate={{ x: [0, 90, 20, 0], y: [0, 45, 80, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-12%] top-[10%] h-[520px] w-[520px] rounded-full bg-violet-600/[.14] blur-[120px]"
        animate={{ x: [0, -80, -30, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-300/70 to-transparent" />
    </div>
  );
}

export function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 120, damping: 24 });
  const springY = useSpring(y, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      x.set(event.clientX - 160);
      y.set(event.clientY - 160);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-50 hidden h-80 w-80 rounded-full bg-blue-400/10 blur-3xl lg:block"
      style={{ x: springX, y: springY }}
    />
  );
}
