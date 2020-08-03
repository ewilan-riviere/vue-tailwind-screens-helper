import Vue from 'vue'
import App from './App.vue'
import VuepressCodeInfo from '../index'

// for markdown style
import './css/air.css'

Vue.config.productionTip = false

Vue.use(VuepressCodeInfo, {
  option: 'option',
})

new Vue({
  render: (h) => h(App),
}).$mount('#app')
