// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import $ from 'jquery'
import './assets/bootstrap/bootstrap.min.js'
import './assets/bootstrap/bootstrap.min.css'

import store from './store'


require('./assets/css/style.css')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  $,
  store,
  router,
  template: '<App/>',
  components: { App }
})
