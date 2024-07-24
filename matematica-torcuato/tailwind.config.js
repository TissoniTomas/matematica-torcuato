
import keepPreset from "keep-react/preset";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}"
  ],

  presets: [keepPreset],
  theme: {
    extend: {
      fontFamily:{
      
        Montserrat: ["Montserrat"],
        Oswald: ["Oswald"],
        Nunito: ["Nunito"]
        

      },
      backgroundImage: {
        'hero-pattern': "url('')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
};
