import Vue from 'vue'
import App from './App.vue'
import TailwindHelper from '../index'

import './css/tailwind.css'

Vue.config.productionTip = false

Vue.use(TailwindHelper, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
