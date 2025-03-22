/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-black': '#0D0208',
        'terminal-black': '#121212',
        'neon-green': '#00FF41',
        'cyber-blue': '#0084FF',
        'cyber-pink': '#FF3864',
        'cyber-purple': '#BD00FF',
        'cyber-yellow': '#F7FD04',
        'matrix-green': '#003B00', // darker green for backgrounds
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Source Code Pro', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s linear infinite',
        'scanline': 'scanline 8s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'matrix-flow': 'matrix-flow 20s linear infinite',
        'pulse-green': 'pulse-green 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%, 5%, 10%, 15%, 20%, 25%, 30%, 35%, 40%, 45%, 50%, 55%, 60%, 65%, 70%, 75%, 80%, 85%, 90%, 95%, 100%': { transform: 'translate(0)' },
          '1%, 6%, 11%': { transform: 'translate(-2px, 2px)' },
          '2%, 7%, 12%': { transform: 'translate(2px, -2px)' },
          '3%, 8%, 13%': { transform: 'translate(-2px, -2px)' },
          '4%, 9%, 14%': { transform: 'translate(2px, 2px)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'matrix-flow': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        'pulse-green': {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 255, 65, 0.7), 0 0 10px rgba(0, 255, 65, 0.5), 0 0 15px rgba(0, 255, 65, 0.3)' },
          '50%': { boxShadow: '0 0 10px rgba(0, 255, 65, 0.9), 0 0 20px rgba(0, 255, 65, 0.7), 0 0 30px rgba(0, 255, 65, 0.5)' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 5px rgba(0, 255, 65, 0.7), 0 0 10px rgba(0, 255, 65, 0.5), 0 0 15px rgba(0, 255, 65, 0.3)',
        'neon-blue': '0 0 5px rgba(0, 132, 255, 0.7), 0 0 10px rgba(0, 132, 255, 0.5), 0 0 15px rgba(0, 132, 255, 0.3)',
        'neon-pink': '0 0 5px rgba(255, 56, 100, 0.7), 0 0 10px rgba(255, 56, 100, 0.5), 0 0 15px rgba(255, 56, 100, 0.3)',
        'neon-purple': '0 0 5px rgba(189, 0, 255, 0.7), 0 0 10px rgba(189, 0, 255, 0.5), 0 0 15px rgba(189, 0, 255, 0.3)',
      },
      backgroundImage: {
        'cyber-grid': "linear-gradient(to right, rgba(0, 255, 65, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 65, 0.1) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '20px 20px',
        'grid-md': '50px 50px',
        'grid-lg': '100px 100px',
      },
    },
  },
  plugins: [],
}