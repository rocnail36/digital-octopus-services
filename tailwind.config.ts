import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        beba:["var(--font_bebas)"],
        lato:["var(--font_lato)"]
      },
      colors:{
        red: "#E97D7D",
        blue: "#7CBBE0",
        green: "#7DE9A2",
        yellow: "#FEEFC6",
        browm: "#EAA85C",
        purple:"#907CE0"

      },
      backgroundImage: {
       'hero-phone' : "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5)  100%), url('/hero-phone.webp')",
       'hero-desktop': "linear-gradient(180deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5)  100%), url('/hero-desktop.webp')"
      }
    },
  },
  plugins: [],
};
export default config;
