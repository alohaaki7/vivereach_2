import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "#e5410b",
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shadow-drift': 'shadow-drift 4s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 20s linear infinite',
        'flicker': 'flicker 4s infinite',
        'grid-flow': 'grid-flow 2s linear infinite',
        'launch-trajectory': 'launch-trajectory 3s ease-in-out infinite',
      },
      keyframes: {
        'shadow-drift': {
          '0%, 100%': { textShadow: '0 0 10px rgba(0,0,0,0.8)' },
          '50%': { textShadow: '10px 10px 20px rgba(0,0,0,0.5)' },
        },
        'slide-up': {
          'from': { transform: 'translate3d(0, 100%, 0)', opacity: '0' },
          'to': { transform: 'translate3d(0, 0, 0)', opacity: '1' },
        },
        'marquee': {
          'from': { transform: 'translate3d(0, 0, 0)' },
          'to': { transform: 'translate3d(-50%, 0, 0)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '0.03' },
          '5%, 10%, 15%': { opacity: '0.07' },
        },
        'grid-flow': {
          '0%': { transform: 'rotateX(45deg) translateY(0)' },
          '100%': { transform: 'rotateX(45deg) translateY(4rem)' },
        },
        'launch-trajectory': {
          '0%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          },
          '50%': {
            transform: 'translate(12px, -12px)',
            opacity: '0.7'
          },
          '100%': {
            transform: 'translate(0, 0)',
            opacity: '1'
          },
        },
        'fadeIn': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'slideIn': {
          'from': { transform: 'translateX(20px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        'slideUp': {
          'from': { transform: 'translateY(20px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
      }
    },
  },
  plugins: [],
};

export default config;
