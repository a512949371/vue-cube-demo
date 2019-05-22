<template>
<div class="page-box" ref='wrapper' :style="{'height': pageHeight}">
  <div class="overscroll bg-ee">
    <div class="top-img"><img src="../assets/act-1.jpg"></div>
    <div class="content-box">
      <div class="data-box">活动名称 2018年马拉松运动会</div>
      <div class="data-box">活动时间 20118.09.20-2018.09.30</div>
      <div class="data-box">活动对象 北京坊所有会员</div>
      <div class="data-box">活动地点 北京坊</div>
      <div class="data-box">活动内容</div>
      <div class="data">马拉松长跑是国际上非常普及的长距离运动</div>
    </div>
    <div class="btn-box flex-box-center"><div class="btn" v-on:click="goReg">点击报名</div></div>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
export default {
  name: 'activeDetail',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0
    }
  },
  created () {
    this.pageHeight = window.innerHeight + 'px'
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        startX: 0,
        startY: 0
      })
      setTimeout(() => {
        this.scroll.scrollTo(0, 0)
      }, 500)
    })
  },
  methods: {
    goReg: function () {
      this.$router.push('activereg')
    }
  }
}
</script>
<style lang="scss" scoped>
.page-box{
  background-image: url('../assets/guidepages_bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  box-sizing: border-box;
  .top-img {
    width: 37.5rem;
    max-height: 22.5rem;
    overflow: hidden;
    img {
      width: 100%;
      display: block
    }
  }
  .content-box {
    padding: 1rem 2rem;
    text-align: left;
    .data-box {
      font-size: 1.6rem;
      padding: 0.5rem 0;
      color: #b81b24
    }
    .data {
      font-size: 1.6rem;
      padding: 0.5rem 0;
      color: #b81b24;
      text-indent: 3rem;
    }
  }
  .btn-box {
    padding: 4rem;
    .btn {
      flex: 1;
      padding: 1.2rem 0;
      color: #fff;
      background-color: #b81b24;
      font-size: 1.6rem;
      border-radius: 0.5rem;
    }
  }
}
</style>
