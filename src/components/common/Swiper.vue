<template>
  <div class="swiper-wrap">
    <swiper 
      :list="swiperImgs[viewIndex]"
      dots-class="swiper-dots"
      auto 
      height="90px"></swiper>
  </div>
</template>

<script>
import { Swiper } from 'vux'
import { mapState, mapMutations } from 'vuex'

const movieList = [{
  url: 'javascript:',
  img: '/static/movies/movie1.jpg',
  title: '电影1'
}, {
  url: 'javascript:',
  img: '/static/movies/movie2.jpg',
  title: '电影2'
}, {
  url: 'javascript:',
  img: '/static/movies/movie3.jpg',
  title: '电影3'
}, {
  url: 'javascript:',
  img: '/static/movies/movie4.jpg',
  title: '电影4'
}, {
  url: 'javascript:',
  img: '/static/movies/movie5.jpg',
  title: '电影5'
}];

export default {
  components: {
    Swiper
  },
  data () {
    return {
      swiperImgs: [
        movieList
      ],
      movieIndex: 0
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
  .swiper-dots .active{
    background: #FF9900 !important;
  }
</style>




