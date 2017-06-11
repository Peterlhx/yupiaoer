<template>
  <div class="bottom-bar-wrap">
    <tabbar class="bottom-bar">
      <tabbar-item selected>
        <i slot="icon" class="iconfont icon-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <i slot="icon" class="iconfont icon-luyingji"></i>
        <span slot="label">影院</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="iconfont icon-liwu"></i>
        <span slot="label">商城</span>
      </tabbar-item>
      <tabbar-item>
        <i slot="icon" class="iconfont icon-wode"></i>
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style>
  .bottom-bar {
    height: .52rem;
  }

  .bottom-bar i {
    font-size: .26rem !important;
  }   
</style>