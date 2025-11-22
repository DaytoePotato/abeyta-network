'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function CursorTrail() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const trailingCursorXSpring = useSpring(cursorX, { damping: 50, stiffness: 400 });
  const trailingCursorYSpring = useSpring(cursorY, { damping: 50, stiffness: 400 });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 8);
      cursorY.set(e.clientY - 8);
    };

    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mounted, cursorX, cursorY]);

  if (!mounted || !isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="pointer-events-none fixed w-4 h-4 rounded-full bg-neon-orange/60 mix-blend-screen z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      {/* Trailing glow */}
      <motion.div
        className="pointer-events-none fixed w-8 h-8 rounded-full bg-neon-orange/20 blur-md z-[9998]"
        style={{
          x: trailingCursorXSpring,
          y: trailingCursorYSpring,
        }}
      />
    </>
  );
}
