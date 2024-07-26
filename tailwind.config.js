/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // mobile: '350px',
      // // => @media (min-width: 640px) { ... } 

      // tablet: '640px',
      // // => @media (min-width: 640px) { ... }

      // laptop: '1024px',
      // // => @media (min-width: 1024px) { ... }

      // desktop: '1280px',
      // // => @media (min-width: 1280px) { ... }
      // mobile: { min: '250px', max: '767px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      tablet: { min: "250px", max: "1023px" },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      laptop: { min: "1024px", max: "1279px" },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      desktop: { min: "1280px", max: "1535px" },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      // '2xl': { min: '1536px' },
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInRight: {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        slideInBottom: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
        scaleUp: {
          "0%": { transform: "scale(0.5)" },
          "100%": { transform: "scale(1)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14.0deg)" },
          "20%": { transform: "rotate(-8.0deg)" },
          "30%": { transform: "rotate(14.0deg)" },
          "40%": { transform: "rotate(-4.0deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        slideInFromLeft: {
          "0%": { transform: "translateX(-100%)", opacity: 0 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        breathingGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(255, 255, 255, 0.8)" },
          "50%": { boxShadow: "0 0 30px rgba(255, 255, 255, 1)" },
        },
      },
      animation: {
        breathingGlow: "breathingGlow 2s ease-in-out infinite",
        slideInFromLeft: "slideInFromLeft 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out",
        slideInLeft: "slideInLeft 2s ease-in-out",
        slideInRight: "slideInRight 1s ease-in-out",
        slideInBottom: "slideInBottom 0.8s ease-in",
        scaleUp: "scaleUp 1s ease-in-out",
        wave: "wave 2s linear infinite",
      },
    },
    fontFamily: {
      "League-Gothic": ["League Gothic", "sans-serif"],
    },
  },

  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
