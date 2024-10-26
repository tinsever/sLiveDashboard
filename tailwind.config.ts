import aspectRatio from "@tailwindcss/aspect-ratio";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        kai: "#0f0e14",
        lkai: "#1f1d29",
        sl: "#6365ea",
      },
      fontFamily: {
        sans: ['"Basier Square"', "sans-serif"],
      },
    },
  },
  plugins: [typography, forms, aspectRatio],
} as Config;
