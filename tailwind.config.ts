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
        // Core Hacker Colors
        'hacker-green': '#39FF14',
        'matrix-green': '#00FF41',
        'cyber-aqua': '#0DFFEC',
        'glitch-cyan': '#00F0FF',
        'hologram-blue': '#4CC9F0',
        'cyber-blue': '#0891B2',
        'terminal-purple': '#9D4EDD',
        'neon-violet': '#C77DFF',
        'neon-pink': '#FF006E',
        'cyber-red': '#FF1E1E',

        // Warm Vibrant Colors
        'electric-orange': '#FF7A00',
        'amber-pulse': '#FFB300',
        'laser-yellow': '#F9F871',

        // Cool Vibrant Colors
        'neon-mint': '#4EFFC1',
        'arctic-blue': '#32D5FF',
        'deep-teal': '#00C8FF',

        // Neon Highlights
        'neon-lime': '#C8FF00',
        'radiant-teal': '#0DFFEC',
        'ion-purple': '#BC13FE',
        'plasma-fuchsia': '#FF00D4',

        // Dark Mode Base
        'terminal-black': '#000000',
        'void-grey': '#0A0A0A',
        'cyber-graphite': '#111217',
        'midnight-blue': '#0A0F1F',
        'deep-navy': '#1E1B4B',
      },
      boxShadow: {
        'neon-green': '0 0 20px rgba(57, 255, 20, 0.5)',
        'neon-cyan': '0 0 20px rgba(13, 255, 236, 0.5)',
        'neon-pink': '0 0 20px rgba(255, 0, 110, 0.5)',
        'neon-purple': '0 0 20px rgba(157, 78, 221, 0.5)',
        'glow-strong': '0 0 30px rgba(57, 255, 20, 0.8)',
      },
    },
  },
  plugins: [],
};
export default config;
