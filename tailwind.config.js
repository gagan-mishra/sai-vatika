/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#F7F7F2', // Soft ivory background
        panel: '#FFFFFF', // Surfaces
        gold: '#D9A441', // CTA gold
        emerald: '#4D7C0F', // Secondary olive
        ivory: '#1A1A1A', // Primary text
        slate: '#475467', // Muted text
        border: '#E1E5E0', // Soft border
        ink: '#14532D', // Deep green primary
        sky: '#EAE4D8', // Sand tint
        sand: '#EAE4D8',
        chip: '#EEF5EE',
        chipborder: '#DDE7DD',
        error: '#DC2626',
      },
      boxShadow: {
        glow: '0 30px 80px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #F7F7F2 0%, #F7F7F2 40%, #EAE4D8 100%)',
      },
    },
  },
  plugins: [],
}
