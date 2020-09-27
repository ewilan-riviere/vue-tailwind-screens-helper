import TailwindHelper from './lib/tailwind-helper.vue'

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('tailwind-helper', TailwindHelper)
  },
}
