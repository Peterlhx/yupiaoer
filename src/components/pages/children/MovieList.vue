<template>
  <div class="movie-list-wrap" :class="{ 'scroll-list': isScroll === 1}" id="moviesList">
    <scroller lock-x @on-scroll-bottom="onScrollBottom" ref="scrollerBottom" :scroll-bottom-offst="50">
      <div class="box">
        <movie-item v-for="(movie, index) in hotMovies" :movie="movie" :index="index" :key="index" v-if="hotMovies.length !== 0" ></movie-item>
        <load-more tip="loading"></load-more>
      </div>
    </scroller>

  </div>
</template>

<script>
import { Scroller, Divider, LoadMore } from 'vux'
import { mapState, mapMutations } from 'vuex'
import { showMovies } from '@/service/getData'
import movieItem from '@/components/pages/children/MovieItem'

export default {
  components: {
    Scroller,
    Divider,
    LoadMore,
    movieItem
  },
  data () {
    return {
      scrollTop: 0,
      onFetching: false,
      bottomCount: 20,
      hotMovies: [],
      el: ''
    }
  },
  computed: {
    ...mapState([
      'isScroll'
    ])
  },
  created () {
    showMovies().then(response => {
      let data = response.movies;
      this.hotMovies = data.hotMovies;
      data.hotMovies.forEach((item, index) => {
        this.hotMovies.push(item)
      })
    })
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
    this.el = document.getElementById('moviesList');
    this.el.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    ...mapMutations([
      'saveScrollStatus'
    ]),
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          let data = this.hotMovies;
          this.hotMovies.push(data[1])
          this.hotMovies.push(data[2])
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    handleScroll () {
      if (this.el.scrollTop > 10) {
        this.saveScrollStatus(1)
      } else {
        this.saveScrollStatus(0)
      }
    }
  }
}
</script>

<style scoped>
  .movie-list-wrap {
    background: #fff;
    position: absolute;
    top: 236px;
    right: 0;
    bottom: .52rem;
    left: 0;
    overflow-y: auto;
    padding: .1rem;
  }
  .scroll-list {
    top: 146px;
  }

</style>