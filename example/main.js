import Vue from 'vue'
import App from './App.vue'
import TailwindScreens from '../index'

// for markdown style
import './css/tailwind.css'

Vue.config.productionTip = false

Vue.use(TailwindScreens, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
