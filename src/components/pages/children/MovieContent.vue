<template>
  <div class="movie-content-wrap">
    <tab class="top-bar-wrap" :line-width="0">
      <tab-item
        class="top-bar-item"
        active-class="selected"
        @on-item-click="changeStatus(index)"
        v-for="(item, index) in topBars" 
        :selected="activeItem === index"
        :key="index">
          <label>{{ item.name }}</label>
        </tab-item>
    </tab>
    <movie-list></movie-list>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux'
import { mapState, mapMutations } from 'vuex'
import movieList from '@/components/pages/children/MovieList'

export default {
  components: {
    Tab, TabItem, movieList
  },
  data () {
    return {
      topBars: [
        {name: '正在上映', router: ''},
        {name: '即将上映', router: ''},
        {name: '精彩发现', router: ''}
      ],
      activeItem: 0
    }
  },
  computed: {
    ...mapState([
      'viewIndex'
    ])
  },
  methods: {
    ...mapMutations([
      'initViewIndex'
    ]),
    changeStatus (index) {
      this.activeItem = index;
    }
  }
}
</script>

<style>
  .movie-content-wrap {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .top-bar-item {
    position: relative;
  }
  .selected label:after {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -.08rem;
    width: 0.16rem;
    height: 0.16rem;
    margin-left: .02rem;
    border: 1px solid #e5e5e5;
    -webkit-transform: rotate(-45deg) translate(-50%,-50%) scale(.5);
    -ms-transform: rotate(-45deg) translate(-50%,-50%) scale(.5);
    transform: rotate(-45deg) translate(-50%,-50%) scale(.5);
    border-bottom: none;
    border-left: none;
    background: #fff;
  }
</style>