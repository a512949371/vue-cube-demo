<template>
<div class="page-box" ref="wrapper" :style="{'height': pageHeight}">
  <div class="overscroll bg-ee">
    <div class="list-box">
      <div class="pt10" v-for="(item, index) in dataNumber" :key="index">
        <div class="data-box pos">
          <div class="data-name">{{item.txt}}</div>
          <div class="data-time">{{item.time}}</div>
          <div class="pos-box" :class="item.isNegative ?'isneg':''">{{item.isNegative?'-' + item.number : '+' +item.number}}</div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
export default {
  name: 'integralList',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0,
      dataNumber: [{
        id: 1,
        txt: '兑换礼品',
        time: '2018/12/12 12:12:12',
        isNegative: false,
        number: 100
      },
      {
        id: 2,
        txt: '兑换礼品',
        time: '2018/12/12 12:12:12',
        isNegative: false,
        number: 100
      },
      {
        id: 3,
        txt: '兑换礼品',
        time: '2018/12/12 12:12:12',
        isNegative: true,
        number: 99
      },
      {
        id: 4,
        txt: '兑换礼品',
        time: '2018/12/12 12:12:12',
        isNegative: false,
        number: 99
      }]
    }
  },
  mounted () {
    this.pageHeight = window.innerHeight + 'px'
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
  }
}
</script>
<style lang="scss" scoped>
.page-box {
  background-image: url('../assets/guidepages_bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  box-sizing: border-box;
}
.list-box {
  padding: 1rem 2rem;
}
.data-box {
  padding: 1.5rem;
  border: 1px solid #891c21;
  border-radius: 0.5rem;
  text-align: left;
  overflow: hidden;
  .data-name {
    font-size: 1.6rem;
    font-weight: bold;
    color: #b11516;
  }
  .data-time {
    padding-top: 0.5rem;
    color: #b11516;
    font-size: 1.4rem
  }
  .pos-box {
    padding: 0.5rem 2.5rem;
    background-color: #891c21;
    color: #fff;
    font-size: 1.6rem;
    border-radius: 0.3rem;
    position: absolute;
    top: 0;
    right: 0;
  }
  .isneg {
    background-color: #d2a36d
  }
}
</style>
