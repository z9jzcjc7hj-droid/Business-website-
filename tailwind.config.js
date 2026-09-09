/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#050506',
          charcoal: '#0e0e11',
          charcoal2: '#17171c',
          charcoal3: '#212127',
          purple: {
            50: '#f5eeff',
            100: '#e9d8ff',
            200: '#d3b2ff',
            300: '#b985ff',
            400: '#a35cf7',
            500: '#8b2fe8',
            600: '#7a1fd1',
            700: '#6417a8',
            800: '#4f1382',
            900: '#3a0e60',
            glow: '#c084fc',
          },
        },
      },
      fontFamily: {
        heading: ['"Rajdhani"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'purple-radial':
          'radial-gradient(circle at 50% 0%, rgba(139,47,232,0.35) 0%, rgba(5,5,6,0) 60%)',
        'hero-gradient':
          'linear-gradient(180deg, rgba(5,5,6,0.55) 0%, rgba(5,5,6,0.85) 60%, #050506 100%)',
        'card-gradient':
          'linear-gradient(145deg, #17171c 0%, #0e0e11 100%)',
      },
      boxShadow: {
        glow: '0 0 25px rgba(163,92,247,0.45)',
        'glow-lg': '0 0 60px rgba(163,92,247,0.35)',
        card: '0 10px 30px -10px rgba(0,0,0,0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
