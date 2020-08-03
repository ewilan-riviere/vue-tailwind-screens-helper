import Vue from 'vue'
import App from './App.vue'
import VueCodeBlock from '../index'

// for markdown style
import './css/air.css'

Vue.config.productionTip = false

Vue.use(VueCodeBlock, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
