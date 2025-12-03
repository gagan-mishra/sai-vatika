/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#FEFCF7',
        panel: '#FFFFFF',
        gold: '#FACC15',
        emerald: '#16A34A',
        ivory: '#0F172A',
        slate: '#475467',
        border: '#E2E8F0',
        ink: '#1E1B4B',
        sky: '#E4F2FF',
        sand: '#FFF6DB',
      },
      boxShadow: {
        glow: '0 18px 40px rgba(148, 163, 184, 0.25)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #FFFFFF 0%, #E4F2FF 45%, #FFF4CC 100%)',
      },
    },
  },
  plugins: [],
}
