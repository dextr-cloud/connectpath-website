import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      colors: {
        // ConnectPath brand colors
        'cp-navy': {
          50: 'var(--cp-navy-50)',
          100: 'var(--cp-navy-100)',
          200: 'var(--cp-navy-200)',
          300: 'var(--cp-navy-300)',
          400: 'var(--cp-navy-400)',
          500: 'var(--cp-navy-500)',
          600: 'var(--cp-navy-600)',
          700: 'var(--cp-navy-700)',
          800: 'var(--cp-navy-800)',
          900: 'var(--cp-navy-900)',
          950: 'var(--cp-navy-950)',
        },
        'cp-teal': {
          50: 'var(--cp-teal-50)',
          100: 'var(--cp-teal-100)',
          200: 'var(--cp-teal-200)',
          300: 'var(--cp-teal-300)',
          400: 'var(--cp-teal-400)',
          500: 'var(--cp-teal-500)',
          600: 'var(--cp-teal-600)',
          700: 'var(--cp-teal-700)',
        },
        'cp-cyan': {
          50: 'var(--cp-cyan-50)',
          100: 'var(--cp-cyan-100)',
          200: 'var(--cp-cyan-200)',
          300: 'var(--cp-cyan-300)',
          400: 'var(--cp-cyan-400)',
          500: 'var(--cp-cyan-500)',
          600: 'var(--cp-cyan-600)',
          700: 'var(--cp-cyan-700)',
        },
        'cp-slate': {
          50: 'var(--cp-slate-50)',
          100: 'var(--cp-slate-100)',
          200: 'var(--cp-slate-200)',
          300: 'var(--cp-slate-300)',
          400: 'var(--cp-slate-400)',
          500: 'var(--cp-slate-500)',
          600: 'var(--cp-slate-600)',
          700: 'var(--cp-slate-700)',
          800: 'var(--cp-slate-800)',
          900: 'var(--cp-slate-900)',
          950: 'var(--cp-slate-950)',
        },
        'cp-success': 'var(--cp-success)',
        'cp-warning': 'var(--cp-warning)',
        'cp-danger': 'var(--cp-danger)',
        'cp-info': 'var(--cp-info)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
        '2xl': 'var(--radius-2xl)',
      },
      boxShadow: {
        'xs': 'var(--shadow-xs)',
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
        'xl': 'var(--shadow-xl)',
        'glow': '0 0 20px rgba(8, 189, 186, 0.3)',
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '250ms',
        'slow': '400ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
