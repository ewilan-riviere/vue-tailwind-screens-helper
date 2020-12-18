module.exports = {
  purge: ['./lib/tailwind-helper.vue'],
  theme: {
    extend: {
      screens: {
        xl: '1600px',
        lg: '1000px',
        md: '770px',
        sm: '400px',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
}
