import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1a1a2e',
        ivory: '#faf9f6',
        gold: '#c9a96e',
        burgundy: '#6b2032',
        muted: {
          gold: '#b8956a',
          charcoal: '#2d2d44',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1a1a2e 0%, #2d2d44 50%, #6b2032 100%)',
      }
    },
  },
  plugins: [],
}

export default config
