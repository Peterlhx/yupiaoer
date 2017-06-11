<template>
  <div class="home">
    <top-bar></top-bar>
    <search-input></search-input>
    <swiper v-show="isScroll !== 1"></swiper>
    <movie-content v-if="viewIndex === 0"></movie-content>
    <bottom-bar></bottom-bar>
  </div>
</template>

<script>
import topBar from '@/components/common/TopBar'
import searchInput from '@/components/common/SearchInput'
import swiper from '@/components/common/Swiper'
import movieContent from '@/components/pages/children/MovieContent'
import bottomBar from '@/components/common/BottomBar'
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'home',
  components: { topBar, searchInput, swiper, movieContent, bottomBar },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapState([
      'viewIndex', 'isScroll'
    ])
  },
  methods: {
    ...mapMutations([
      'initViewIndex', 'saveViewIndex'
    ])
  }
}
</script>

<style scoped>
  .home {
    display: flex;
    flex-direction: column;
  }
</style>
