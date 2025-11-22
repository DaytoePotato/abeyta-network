'use client';

import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

// Eagle-circuit SVG logo - eagle silhouette with circuit patterns in wings
export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('text-neon-orange', className)}
    >
      {/* Eagle body */}
      <path
        d="M32 8L36 16L44 12L40 20L48 24L40 28L44 36L36 32L32 40L28 32L20 36L24 28L16 24L24 20L20 12L28 16L32 8Z"
        fill="currentColor"
        opacity="0.9"
      />

      {/* Left wing with circuits */}
      <path
        d="M20 24L8 20L4 28L12 32L8 40L16 36L20 44L24 36"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Circuit nodes on left wing */}
      <circle cx="8" cy="20" r="2" fill="currentColor" />
      <circle cx="4" cy="28" r="2" fill="currentColor" />
      <circle cx="8" cy="40" r="2" fill="currentColor" />
      <rect x="10" y="30" width="4" height="4" fill="currentColor" opacity="0.6" />

      {/* Right wing with circuits */}
      <path
        d="M44 24L56 20L60 28L52 32L56 40L48 36L44 44L40 36"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
      />
      {/* Circuit nodes on right wing */}
      <circle cx="56" cy="20" r="2" fill="currentColor" />
      <circle cx="60" cy="28" r="2" fill="currentColor" />
      <circle cx="56" cy="40" r="2" fill="currentColor" />
      <rect x="50" y="30" width="4" height="4" fill="currentColor" opacity="0.6" />

      {/* Eagle head/beak */}
      <path
        d="M32 8L34 4L32 2L30 4L32 8"
        fill="currentColor"
      />

      {/* Tail feathers */}
      <path
        d="M32 40L28 52L32 56L36 52L32 40"
        fill="currentColor"
        opacity="0.8"
      />

      {/* Central circuit line */}
      <line x1="32" y1="44" x2="32" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.5" />
      <circle cx="32" cy="48" r="1.5" fill="currentColor" opacity="0.7" />
    </svg>
  );
}
