<template>
  <div class="movie-list-wrap" :class="{ 'scroll-list': isScroll === 1}" id="moviesList">
    <scroller lock-x @on-scroll-bottom="onScrollBottom" @on-scroll="onScroll" ref="scrollerBottom" :scroll-bottom-offst="200">
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
/*import { showMovies } from '@/service/getData'*/
import movieItem from '@/components/pages/children/MovieItem'

const hotMovies = [
  {title: '新木乃伊', description: '深埋荒漠的尸身，觉醒于千年之后', actors: '艾里克斯·库兹曼 / 汤姆·克鲁斯 / 索菲亚·波多拉 / 安娜贝拉·沃丽丝 / 罗素·克劳 / 杰克·M·约翰森 / 考特尼·万斯 / 奇科·肯扎里 / 迪伦·史密斯 / 哈维尔·博特 / 斯蒂芬·汤普森', 
    type: 'IMAX,3D', score: 6.8, poster: '/static/movies/new_mummy.jpg'},
  {title: '神奇女侠', description: '地表最强女战神，孤身浴火战敌军', actors: '派蒂·杰金斯 / 盖尔·加朵 / 克里斯·派恩 / 罗宾·怀特 / 康妮·尼尔森 / 大卫·休里斯 / 埃琳纳·安娜亚 / 露茜·戴维斯 / 丹尼·休斯顿 / 艾文·布莱纳 / 杜晨·克洛斯', 
    type: 'IMAX,3D', score: 8.5, poster: '/static/movies/wonder_woman.jpg'},
  {title: '加勒比海盗：死无对证', description: '无垠瀚海多凶险，誓取神兵争高低', actors: '乔阿吉姆·罗恩尼 / 艾斯彭·山德伯格 / 约翰尼·德普 / 哈维尔·巴登 / 卡雅·斯考达里奥 / 布兰顿·思怀兹 / 奥兰多·布鲁姆 / 杰弗里·拉什 / 歌什菲·法拉哈尼 / 斯蒂芬·格拉汉姆 / 凯文·麦克纳利 / 亚当·布朗', 
    type: 'IMAX,3D', score: 8.7, poster: '/static/movies/caribbean.jpg'},
  {title: '新木乃伊', description: '深埋荒漠的尸身，觉醒于千年之后', actors: '艾里克斯·库兹曼 / 汤姆·克鲁斯 / 索菲亚·波多拉 / 安娜贝拉·沃丽丝 / 罗素·克劳 / 杰克·M·约翰森 / 考特尼·万斯 / 奇科·肯扎里 / 迪伦·史密斯 / 哈维尔·博特 / 斯蒂芬·汤普森', 
    type: 'IMAX,3D', score: 6.8, poster: '/static/movies/new_mummy.jpg'},
  {title: '神奇女侠', description: '地表最强女战神，孤身浴火战敌军', actors: '派蒂·杰金斯 / 盖尔·加朵 / 克里斯·派恩 / 罗宾·怀特 / 康妮·尼尔森 / 大卫·休里斯 / 埃琳纳·安娜亚 / 露茜·戴维斯 / 丹尼·休斯顿 / 艾文·布莱纳 / 杜晨·克洛斯', 
    type: 'IMAX,3D', score: 8.5, poster: '/static/movies/wonder_woman.jpg'},
  {title: '加勒比海盗：死无对证', description: '无垠瀚海多凶险，誓取神兵争高低', actors: '乔阿吉姆·罗恩尼 / 艾斯彭·山德伯格 / 约翰尼·德普 / 哈维尔·巴登 / 卡雅·斯考达里奥 / 布兰顿·思怀兹 / 奥兰多·布鲁姆 / 杰弗里·拉什 / 歌什菲·法拉哈尼 / 斯蒂芬·格拉汉姆 / 凯文·麦克纳利 / 亚当·布朗', 
    type: 'IMAX,3D', score: 8.7, poster: '/static/movies/caribbean.jpg'}
]

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
      hotMovies: hotMovies,
      el: '',
      startY: '',
      endY: ''
    }
  },
  computed: {
    ...mapState([
      'isScroll'
    ])
  },
  created () {
    /* showMovies().then(response => {
      let data = response.movies;
      this.hotMovies = data.hotMovies;
      data.hotMovies.forEach((item, index) => {
        this.hotMovies.push(item)
      })
    }) */
  },
  mounted () {
    this.$nextTick(() => {
      this.$refs.scrollerBottom.reset({top: 0})
    })
    this.el = document.getElementById('moviesList')
    this.el.ontouchstart = e => {
      this.touchStart(e)
    }
    this.el.ontouchmove = e => {
      this.touchMove(e)
    }
  },
  methods: {
    ...mapMutations([
      'saveScrollStatus'
    ]),
    onScroll (pos) {
      this.scrollTop = pos.top
    },
    onScrollBottom () {
      if (this.onFetching) {
        // do nothing
      } else {
        this.onFetching = true
        setTimeout(() => {
          let data = hotMovies
          data.forEach((item, index) => {
            this.hotMovies.push(item)
          })
          
          this.$nextTick(() => {
            this.$refs.scrollerBottom.reset()
          })
          this.onFetching = false
        }, 2000)
      }
    },
    touchStart (e) {
      let touch = e.touches[0]
      this.startY = touch.pageY
    },
    touchMove (e) {
      let touch = e.touches[0]
      let deltaY = 0
      this.endY = touch.pageY

      deltaY = this.endY - this.startY

      if (deltaY < 0) { // 上拉
        this.saveScrollStatus(1)  // 隐藏轮播图
      } else { // 下拉
        if(this.scrollTop <= 0) {
          this.saveScrollStatus(0) // 显示轮播图
        }
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