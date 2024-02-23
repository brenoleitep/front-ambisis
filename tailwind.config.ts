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
        primary: '#277931', 
        secondary: '#8E8E8E', 
      },
      animation: {
        'spin-slow': 'spin 90s linear infinite',
      },

    },
  },
  plugins: [require("daisyui")],
};
export default config;
