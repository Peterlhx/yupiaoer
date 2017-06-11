import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  viewIndex: 0, // 当前视图的索引
  isScroll: 0  // 判断电影列表是否滚动
}

export default new Vuex.Store({
  state,
  mutations
})