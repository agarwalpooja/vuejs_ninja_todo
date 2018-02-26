import Vue from 'vue'
import App from './App.vue'
import ninjas from './components/ninjas.vue'

Vue.component('ninjas',ninjas)
new Vue({
  el: '#app',
  render: h => h(App)
})
