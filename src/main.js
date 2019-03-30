// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import axios from 'axios'


Vue.prototype.$axios = axios;

Vue.config.productionTip = false

//使用路由中间件
Vue.use(Router)

//配置路由管理
const router = new Router({
  mode:'history'
})

//使用路由中间件
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App></App>',
})
