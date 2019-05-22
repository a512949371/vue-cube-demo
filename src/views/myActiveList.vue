<template>
<div class="page-box" :style="{'height': pageHeight}">
  <div class="out-box">
    <div class="list-head flex-box-center">
      <div class="desc"><span :class="listActive === 1 ?'active':''">进行中</span></div>
      <div class="desc"><span :class="listActive === 2 ?'active':''">已结束</span></div>
    </div>
    <div class="list-box" ref='wrapper' :style="{'height': scrollHeight}">
      <div class="overscroll bg-ee">
        <div class="data-box-out" v-for="(item, index) in dataNumber" :key="index">
          <div class="data-box-int flex-box-start">
            <div class="left">
              <div class="left-name">2018年马拉松运动会</div>
              <div class="left-time">2018.09.20-2018.09.30</div>
              <div class="left-user">活动对象 北京坊所有会员</div>
              <div class="left-add">活动地点 北京坊</div>
            </div>
            <div class="right"><img src="../assets/act-1.jpg"></div>
          </div>
        </div>
        <div v-if="isIos" style="width:100%;height: 40px;"></div>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
export default {
  name: 'myActiveList',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0,
      listActive: 1,
      scrollHeight: 0,
      dataNumber: 5
    }
  },
  created () {
    this.pageHeight = window.innerHeight + 'px'
  },
  mounted () {
    this.scrollHeight = (window.innerHeight - 100) + 'px'
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
.page-box{
  background-image: url('../assets/guidepages_bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  box-sizing: border-box;
  .out-box {
    padding: 0 2rem;
    .list-head {
      padding-top: 2rem;
      padding-bottom: 1rem;
      background-color: #fff;
      position: relative;
      z-index: 9999;
      .desc {
        flex: 1;
        span {
          padding: 0.5rem 0;
          color: #999;
          border-bottom: 2px solid #fff;
          font-size: 1.8rem;
          font-weight: bold;
          display: inline-block
        }
        .active {
          color: #b81b24;
          border-bottom: 2px solid #b81b24;
        }
      }
    }
    .list-box {
      padding-top: 1rem;
      .data-box-out {
        padding: 1rem;
        padding-bottom: 0;
        .data-box-int {
          border: 1px dotted #b81b24;
          padding: 2px;
          overflow: hidden;
          color: #b81b24;
          .left {
            flex: 1;
            padding: 0.8rem 0.5rem;
            .left-name {
              font-size: 1.8rem;
              font-weight: bold;
            }
            .left-time {
              font-size: 1.2rem;
              padding: 0.5rem 0;
            }
            .left-user {
              font-size: 1.2rem;
            }
            .left-add {
              font-size: 1.2rem;
              padding-top: 0.5rem;
            }
          }
          .right {
            width: 12rem;
            height: 8.5rem;
            img {
              width: 100%;
              display: block
            }
          }
        }
        .time-out {
          border: 1px dotted #b81b24;
          padding: 2px;
          overflow: hidden;
          color: #999;
        }
      }
    }
  }
}
</style>
