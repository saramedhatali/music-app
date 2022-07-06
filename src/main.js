import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'
 import consumer from "@/services/api"

Vue.config.productionTip = false
Vue.prototype.$http = consumer

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
