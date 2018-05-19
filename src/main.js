import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import {routes } from  './routes'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueRouter)
Vue.use(BootstrapVue)

const router = new VueRouter({
  routes,
  mode: 'history'
})

axios.defaults.baseURL = 'http://localhost:8100/resource-media'

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
