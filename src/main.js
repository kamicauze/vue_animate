import Vue from 'vue'
import App from './App.vue'
import store from './store'
import Velocity from 'velocity-animate'


Vue.config.productionTip = false
Vue.use(Velocity)
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
