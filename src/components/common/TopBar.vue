<template>
  <tab class="top-bar-wrap">
    <tab-item
      class="top-bar-item"
      @on-item-click="changeView(index, item.router)"
      v-for="(item, index) in topBars" 
      :selected="index === 0"
      :key="index">
        <i class="iconfont" :class="item.logo"></i>{{ item.name }}
      </tab-item>
  </tab>
</template>

<script>
import { Tab, TabItem } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'topBars',
  components: {
    Tab, TabItem
  },
  data () {
    return {
      topBars: [
        {name: '电影票', logo: 'icon-dianying', router: ''},
        {name: '演出票', logo: 'icon-yanchua', router: ''},
        {name: '赛事票', logo: 'icon-jiangbeixianxing', router: ''}
      ]
    }
  },
  computed: {
    ...mapState([
      'viewIndex'
    ])
  },
  methods: {
    ...mapMutations([
      'initViewIndex', 'saveViewIndex'
    ]),
    changeView (index, router) {
      this.saveViewIndex(index);
    }
  }
}
</script>

<style scoped>
  .top-bar-wrap {
    height: 52px;
  }
  .top-bar-wrap .top-bar-item {
    font-size: .18rem;
    line-height: 52px;
    font-weight: 700;
  }
  .top-bar-item .iconfont {
    font-size: .18rem;
    line-height: 52px;
    font-weight: normal;
  }
</style>
