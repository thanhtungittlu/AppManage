import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
import VueResource from 'vue-resource'
import { store } from './store/store'

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.http.options.root = 'https://vue-customermanage-app-default-rtdb.firebaseio.com/data'

const router = new VueRouter({
  routes,
  mode: 'history',
})

new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
