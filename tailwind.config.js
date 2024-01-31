const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    spacing: {
      0: '0',
      1: '1px',
      4: '4px',
      6: '6px',
      8: '8px',
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      22: '22px',
      24: '24px',
      26: '26px',
      28: '28px',
      32: '32px',
      40: '40px',
      48: '48px',
      56: '56px',
      60: '60px',
      64: '64px',
      80: '80px',
      128: '128px',
      half: '50%',
      full: '100%',
    },
    colors: {
      white: '#fff',
      white2: '#faf9fa',
      white3: '#f0eef1',
      black: '#0e0a0f',
      negative: '#f04242',
      positive: '#40bfaa',
      pink: '#cb6afb',
      purple: '#96f',
      transparent: 'transparent',
    },
    fontSize: {
      10: '10px',
      11: '11px',
      12: '12px',
      14: '14px',
      15: '15px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      76: '76px',
      136: '136px',
    },
    fontFamily: {
      roboto: ['Roboto', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
    },
    letterSpacing: {
      0: '0',
      p2: '0.02em',
      p4: '0.04em',
      n2: '-0.02em',
      n4: '-0.04em',
    },
    lineHeight: {
      100: '100%',
      112: '112.5%',
      125: '125%',
      150: '150%',
      200: '200%',
    },
    borderRadius: {
      3: '3px',
      4: '4px',
      full: '9999px',
    },
    opacity: {
      0: '0',
      4: '0.04',
      10: '0.1',
      15: '0.15',
      20: '0.2',
      40: '0.4',
      60: '0.6',
      70: '0.7',
      80: '0.8',
      90: '0.9',
      100: '1',
    },
    rotate: {
      2: '2deg',
      4: '4deg',
    },
    screens: {
      md: { max: '1460px' },
      sm: { max: '1360px' },
    },
  },
  plugins: [
    require('tailwindcss-safe-area'),

    // border-image
    plugin(({ matchUtilities }) => {
      matchUtilities({
        'border-image': (value) => {
          return {
            border: '1px solid transparent',
            background: `${value} border-box`,
            mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
            maskComposite: 'exclude',
          };
        },
      });
    }),
  ],
};
