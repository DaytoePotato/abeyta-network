import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary dark backgrounds
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#141428',
          600: '#1a1a36',
        },
        // Neon accent colors
        neon: {
          orange: '#ff6b35',
          'orange-light': '#ff8c5a',
          'orange-dark': '#c44d20', // Darker for WCAG AA contrast with white text
          blue: '#00d4ff',
          purple: '#8b5cf6',
          pink: '#f472b6',
        },
        // Navy gradients
        navy: {
          900: '#0a1628',
          800: '#0f2240',
          700: '#142d52',
          600: '#1a3a66',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-orbitron)', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #0a1628 0%, #1a3a66 50%, #ff6b35 100%)',
        'hero-gradient': 'linear-gradient(180deg, #0a1628 0%, #0f2240 50%, rgba(255, 107, 53, 0.1) 100%)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.6)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'neon': '0 0 20px rgba(255, 107, 53, 0.5)',
        'neon-lg': '0 0 40px rgba(255, 107, 53, 0.7)',
        'neon-blue': '0 0 20px rgba(0, 212, 255, 0.5)',
      },
    },
  },
  plugins: [],
};

export default config;
