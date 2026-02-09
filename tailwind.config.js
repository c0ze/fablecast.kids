/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cosmos: '#2C194A',
        twilight: '#7C5CBF',
        moonbeam: '#FFF8EB',
        starlight: '#F4D27A',
        plumMist: '#6B4FA2',
        page: '#FFFDF7',
        bubblegum: '#FF9EC6',
        mint: '#A8E6CF',
        sky: '#A8D8EA',
        peach: '#FFDAB9',
        lavender: '#D4BBFF',
        candy: '#FFB3D1',
        lemon: '#FFF176'
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Nunito Sans"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 10px 30px rgba(244, 210, 122, 0.3)',
        candy: '0 8px 24px rgba(255, 158, 198, 0.2)',
        mint: '0 8px 24px rgba(168, 230, 207, 0.2)',
        soft: '0 4px 16px rgba(124, 92, 191, 0.1)'
      },
      borderRadius: {
        blob: '60% 40% 50% 50% / 50% 60% 40% 50%'
      },
      animation: {
        drift: 'drift 16s ease-in-out infinite',
        'drift-slow': 'drift 22s ease-in-out infinite',
        marquee: 'marquee 28s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
        bounce_soft: 'bounce_soft 2s ease-in-out infinite',
        sparkle: 'sparkle 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        },
        bounce_soft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' }
        },
        sparkle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.85)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '33%': { transform: 'translateY(-8px) rotate(1deg)' },
          '66%': { transform: 'translateY(-4px) rotate(-1deg)' }
        }
      }
    }
  },
  plugins: []
};
