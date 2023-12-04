import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#0065C2",
          200: "#0080F5",
          300: "#2999FF",
          400: "#5CB1FF",
          500: "#8FC9FF",
          600: "#C2E2FF",
          700: "#F5FAFF"
        },
        teal:{
          100: "#009688",
          200: "#00C7B4",
          300: "#00FAE3",
          400: "#2EFFEB",
          500: "#61FFF0",
          600: "#94FFF5",
          700: "#C7FFFA"
        },
        gray:{
          100: "#000D19",
          200: "#212121",
          300: "#545454",
          400: "#878787",
          500: "#BABABA",
          600: "#D4D4D4",
          700: "#EDEDED"
        },
        white:{
          100: "#FFFFFF",
          200: "#FCFCFC",
          300: "#F7F7F7"
        },
      },
    },
  },
  plugins: [],
}
export default config
