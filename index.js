import VuepressCodeInfo from './lib/vuepress-code-info.vue'
// import VueClipboard from 'vue-clipboard2'
// import Toasted from 'vue-toasted'

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options, isServer) {
    // Vue.use(VueClipboard)
    // Vue.use(Toasted)
    if (options) {
      // Vue.prototype.$option = options.option
    }
    Vue.component('code-info', VuepressCodeInfo)

    // to avoid rerror when build cause by vue-toast
    // if (!isServer) {
    //   import('vue-toasted')
    //     .then((module) => {
    //       Vue.use(module.default, {
    //         duration: 6000,
    //       })
    //     })
    //     .catch((error) => {
    //       console.error(error)
    //     })
    // }
  },
}
