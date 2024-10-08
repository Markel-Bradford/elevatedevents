import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kalnia: ['var(--font-kalnia)']
      },
      animation: {
        fadein: "fadein 0.7s linear",
        slideandfade: "slideandfade 0.8s linear",
        slideup: "slideup 0.3s linear",
        fade: "fade 0.8s linear",
        fadeout: "fadeout 0.8s forwards",
        pulse: "pulse 2s 2s linear infinite"
      },
      listStyleImage: {
        star: 'url("/silverimgs/star-16.png")',
      },
      gridTemplateColumns: {
        navbar: "repeat(4, auto)",
        cards: "repeat(auto-fit,minmax(250px, 1fr))",
      },
      content: {
        picwrap: "attr(data-category)"
      },
      maxWidth: {
        picWrapLabel: "calc(100% - 60px)"
      },
      keyframes: {
        fadein: {
          "0%": { opacity: "0", transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        slideandfade: {
          "0%": { transform: "translateX(60%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideup: {
          "0%": { top: "80%" },
          "100%": { top: "50%" },
        },
        fade: {
          "0%": { opacity: "0", transform: "translateY(-20%)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeout: {
          "0%" : { opacity: "1"},
          "100%": {opacity: "0"},
        },
        pulse: {
          "0%": {transform: "scale(1)"},
          "25%": {transform: "scale(1.1)"},
          "50%": {transform: "scale(1)"},
          "75": {transform: "scale(1.1)"},
          "100%": {transform: "scale(1)"},
        }
      },
    },
  },
  plugins: [],
};
export default config;
