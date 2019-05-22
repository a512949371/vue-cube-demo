<template>
<div class="page-box" :style="{'height': pageHeight}">
  <div class="info-box flex-box-bwteen pos">
    <div class="left">
      <div class="left-name">石书桓</div>
      <div class="left-integral">我的积分: 0</div>
    </div>
    <div class="right">
      <div class="right-act-box" v-on:click="myList">我的活动</div>
    </div>
  </div>
  <div class="head-box pos"><div class="center"><img src="../assets/head.png"></div></div>
  <cube-slide ref="slide" :data="items" @change="changePage" class="mg-10">
    <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </cube-slide-item>
  </cube-slide>
  <div class="list-box" ref='wrapper' :style="{'height': scrollHeight}">
    <div class="overscroll bg-ee">
      <div class="data-box-out" v-for="(item, index) in dataNumber" :key="index" v-on:click="goInfo">
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
</template>
<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
export default {
  name: 'myActive',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0,
      scrollHeight: 0,
      dataNumber: 5,
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: require('../assets/banner.jpg')
        },
        {
          url: 'http://www.didichuxing.com/',
          image: require('../assets/banner-1.jpg')
        },
        {
          url: 'http://www.didichuxing.com/',
          image: require('../assets/banner-2.jpg')
        }
      ]
    }
  },
  created () {
    this.pageHeight = window.innerHeight + 'px'
  },
  mounted () {
    this.scrollHeight = (window.innerHeight - 250) + 'px'
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
    goInfo: function () {
      this.$router.push('activedetail')
    },
    myList: function () {
      this.$router.push('myActiveList')
    }
  }
}
</script>
<style lang="scss" scoped>
.mg-10 {
  padding: 1rem 0;
  background-color: #e9e9e9;
  height: 15rem;
  z-index: 999
}
.page-box {
  background-image: url('../assets/guidepages_bg.png');
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;
  box-sizing: border-box;
  .info-box {
    padding: 4rem 2rem;
    padding-bottom: 1rem;
    background-color: #fff;
    z-index: 1000;
    .left {
      font-size: 1.6rem;
      color: #b81b24;
      text-align: left;
      font-weight: bold;
      .left-integral {
        padding: 0.5rem 0;
      }
    }
    .right {
      font-size: 1.6rem;
      color: #b81b24;
      .right-act-box {
        border: 1px solid #b81b24;
        padding: 0.3rem;
        border-radius: 0.3rem;
      }
    }
  }
  .head-box {
    .center {
      width: 8rem;
      height: 8rem;
      border: 1rem solid #fff;
      border-radius: 50%;
      overflow: hidden;
      position: absolute;
      top: -8rem;
      left: calc(50% - 5rem);
      z-index: 1001;
      img {
        width: 100%;
      }
    }
  }
  .list-box {
    padding: 1rem 0.5rem;
    .data-box-out {
      padding: 1rem;
      padding-bottom: 0;
      .data-box-int {
        border: 1px dotted #b81b24;
        padding: 2px;
        overflow: hidden;
        .left {
          flex: 1;
          padding: 0.8rem 0.5rem;
          .left-name {
            font-size: 1.8rem;
            font-weight: bold;
            color: #b81b24;
          }
          .left-time {
            font-size: 1.2rem;
            color: #b81b24;
            padding: 0.5rem 0;
          }
          .left-user {
            font-size: 1.2rem;
            color: #b81b24
          }
          .left-add {
            font-size: 1.2rem;
            color: #b81b24;
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
    }
  }
}
</style>
