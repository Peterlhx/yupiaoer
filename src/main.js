// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App'
import Home from '@/components/pages/Home'
import store from '@/store/store'
import { initFontSize } from '@/utils/utils'

// 引入字体图标
require('@/assets/iconfont/iconfont.css')

Vue.use(VueRouter)
Vue.use(Vuex)

const routes = [{
  path: '/',
  component: Home
}]

const router = new VueRouter({
  routes
})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* 动态计算rem */
initFontSize(400, 640)

/* eslint-disable no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
