<template>
  <div class="movie-item-wrap">
    <a href="javascript:void(0);">
      <img :src="movie.poster" :alt="movie.title">
      <div class="movie-msg">
        <div class="movie-title-wrap">
          <span class="movie-title">{{movie.title}}</span>
          <span class="movie-type">
            <span class="type-imax">IMAX</span>
            <span class="type-3d">3D</span>
          </span>
        </div>
        <h4 class="movie-description">{{movie.description}}</h4>
        <p class="movie-actors">{{movie.actors}}</p>
      </div>
      <div class="movie-score">
        <span>{{movie.score}}<b>分</b></span>
        <div class="btn-wrap">
          <button class="buy-btn">购票</button>
        </div>
      </div>
    </a>
    <div class="movie-offer"></div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  props: ['movie']
}
</script>

<style scoped>
  .movie-item-wrap {
    margin-bottom: .1rem;
  }
  .movie-item-wrap a {
    display: flex;
  }
  .movie-item-wrap img {
    width: .65rem;
    height: .95rem;
  }
  .movie-msg, .movie-score {
    border-bottom: 1px solid #e5e5e5;
  }
  .movie-msg {
    flex: 1;
    margin-left: .1rem;
    padding-top: .1rem;
    font-size: .15rem;
    color: #333;
    overflow: hidden;
  }
  .movie-title-wrap {
    margin-bottom: .1rem;
  }
  .movie-title {
    display: inline-block;
    height: .22rem;
    line-height: .22rem;
    width: 1.2rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow-x: hidden;
    vertical-align: middle;
  }
  .movie-type {
    color: #a4aecf;
    margin-right: .03rem;
    padding: 0;
    border-radius: .01rem;
    font-size: .09rem;
    font-weight: 300;
    background-color: #fff;
    overflow: hidden;
    white-space: nowrap;
  }
  .type-imax {
    border: 1px solid #a4aecf;
    border-top-right-radius: 0!important;
    border-bottom-right-radius: 0!important;
    padding: .03rem;
    margin-right: -.04rem;
  }
  .type-3d {
    background: #a4aecf;
    color: #fff;
    padding: .03rem;
    border: 1px solid #a4aecf;
    border-top-left-radius: 0!important;
    border-bottom-left-radius: 0!important;
  }
  .movie-description {
    color: #666;
    font-size: .12rem;
    font-weight: 400;
  }
  .movie-actors {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-size: .12rem;
    color: #999;
  }
  .movie-score {
    padding-top: .1rem;
  }
  .movie-score span {
    display: inline-block;
    text-align: right;
    width: 100%;
    height: .22rem;
    line-height: .22rem;
    color: #f7665e;
    font-size: .15rem;
    font-weight: 400;
    margin-bottom: .2rem;
  }
  .movie-score b {
    font-size: .12rem;
  }
  .btn-wrap {
    padding-left: .1rem;
  }
  .buy-btn {
    border-radius: .02rem;
    display: inline-block;
    outline: none;
    cursor: pointer;
    padding: .06rem .05rem;
    font-size: .13rem;
    line-height: .09rem;
    text-align: center;
    text-decoration: none;
    color: #29cc6d;
    background: transparent;
    border: 1px solid #29cc6d;
  }
</style>