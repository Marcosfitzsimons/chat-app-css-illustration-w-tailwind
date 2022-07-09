/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    fontFamily: {
      'rubik': ['"Rubik"', 'sans-serif'] // Ensure fonts with spaces have " " surrounding it.
    },
    colors: {
      'pale-violet': 'hsl(var(--pale-violet) / 1)',
      'moderat-violet': 'hsl(var(--moderat-violet) / 1)',
      'desaturate-dark-violet': 'hsl(var(--desaturate-dark-violet) / 1)',
      'grayish-blue': 'hsl(var(--grayish-blue) / 1)',
      'very-dark-desaturated-violet': 'hsl(var(--very-dark-desaturated-violet) / 1)',
      'dark-grayish-violet': 'hsl(var(--dark-grayish-violet) / 1)',
      'lightmagenta': 'hsl(var(--lightmagenta) / 1)',
      'lightviolet': 'hsl(var(--lightviolet) / 1)',
      'lightgray': 'hsl(var(--lightgray) / .9)',
      'white': 'hsl(var(--white) / 1)',
      'light-grayish-violet': 'hsl(var(--light-grayish-violet) / 1)',
      'very-dark-desaturated-violet': 'hsl(var(--very-dark-desaturated-violet) / 1)',
      'very-light-magenta': 'hsl(var(--very-light-magenta) / 1)',
      'bg-chat': '#E4DCE8'
    },
  },
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer"
  ]
}
