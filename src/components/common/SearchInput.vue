<template>
  <div class="search-wrap">
    <search
    :placeholder="placeholder"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="52px"
    ref="search">
      <label class="location" slot="left">深圳<i class="iconfont icon-arrow"></i></label>
    </search>
  </div>
</template>

<script scoped>
import { Search } from 'vux'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    Search
  },
  data () {
    return {
      searchMsg: ['找电影、影人、影院、演出、赛事', '请输入艺人、演出、场馆...', '找赛事，找场馆'],
      value: ''
    }
  },
  computed: {
    ...mapState([
      'viewIndex'
    ]),
    placeholder () {
      return this.searchMsg[this.viewIndex];
    }
  },
  methods: {
    ...mapMutations([
      'initViewIndex'
    ])
  }
}
</script>

<style>
  .search-wrap {
    height: 50px;
  }
  .search-wrap label,
  .search-wrap i {
    font-size: .12rem;
  }
  .search-wrap .location {
    margin: 0 .2rem;
    line-height: .34rem;
  }
  .search-wrap .location i {
    color: #999;
  }
  .search-wrap form {
    height: .34rem;
  }
  .search-wrap form i {
    line-height: .34rem !important;
  }
  .search-wrap form input {
    height: 100% !important;
    padding: 0 !important;
  }
  .search-wrap input,
  .search-wrap span,
  .search-wrap a {
    font-size: .12rem !important;
    line-height: .34rem;
  }
</style>