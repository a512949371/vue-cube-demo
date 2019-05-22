<template>
  <div class="page-box" ref="wrapper" :style="{'height': pageHeight}">
    <div class="overscroll bg-ee">
      <div class="top-box flex-box-center">
        <div class="card-box pos"><img src="../assets/AE.png"> <img src="../assets/qrcode03.png" class="qrcode"></div>
      </div>
      <div class="flex-box-center"><div class="shop-icon"></div></div>
      <div class="name-box">石书桓</div>
      <div class="integral-box">积分: 0</div>
      <div class="share-box flex-box-center"><div class="share">推荐好友加入会员赢取更多积分奖励</div></div>
      <div class="list-box flex-box-start">
        <div class="list" v-for="item in listData" :key="item.id" v-on:click="go(item.id)">
          <div class="flex-box-center">
            <img :src="item.img"/>
          </div>
          <div class="desc">{{item.txt}}</div>
        </div>
      </div>
      <div v-if="isIos" style="width:100%;height: 40px;"></div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
export default {
  name: 'My',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0,
      listData: [{
        id: 1,
        txt: '个人资料',
        img: require('../assets/information.png')
      },
      {
        id: 2,
        txt: '会员权益',
        img: require('../assets/benefits.png')
      },
      {
        id: 3,
        txt: '会员签到',
        img: require('../assets/signin.png')
      },
      {
        id: 4,
        txt: '会员活动',
        img: require('../assets/activity.png')
      },
      {
        id: 5,
        txt: '特约商户',
        img: require('../assets/supplier.png')
      },
      {
        id: 6,
        txt: '积分商城',
        img: require('../assets/mall.png')
      },
      {
        id: 7,
        txt: '我的订单',
        img: require('../assets/order.png')
      },
      {
        id: 8,
        txt: '积分记录',
        img: require('../assets/record.png')
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
  },
  methods: {
    go: function (id) {
      switch (id) {
        case 1:
          this.$router.push('myinfo')
          break
        case 2:
          this.$router.push('coupon')
          break
        case 3:
          this.$router.push('signin')
          break
        case 4:
          this.$router.push('myActive')
          break
        case 5:
          this.$router.push('myinfo')
          break
        case 6:
          this.$router.push('integralShop')
          break
        case 7:
          this.$router.push('myinfo')
          break
        case 8:
          this.$router.push('integralList')
          break
        default:
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .page-box {
    .top-box {
      background-image: url('../assets/nk01-lqf.png');
      min-height: 12rem;
      background-repeat: no-repeat;
      background-position: top center;
      background-size: cover;
      box-sizing: border-box;
      padding: 3rem 3.7rem;
      padding-bottom: 6rem;
      .card-box {
        width: 37.1rem;
        img {
          width: 100%;
          display: block
        }
        .qrcode {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 999;
          width: 4rem;
          height: 4rem;
        }
      }
    }
    .shop-icon {
      width: 4.5rem;
      height: 4.5rem;
      border: 0.5rem solid #fff;
      background-color: #fff;
      border-radius: 50%;
      overflow: hidden;
      margin-top: -3rem;
      img {
        width: 100%;
        display: block
      }
    }
    .name-box {
      font-weight: bold;
      font-size: 1.8rem;
      padding-top: 1rem;
      color: #b81b24
    }
    .integral-box {
      font-weight: bold;
      font-size: 1.8rem;
      padding-top: 1rem;
      color: #b81b24
    }
    .share-box {
      padding: 1rem 3.7rem;
      .share {
        flex: 1;
        padding: 0.8rem 0;
        border: 1px solid #b81b24;
        text-align: center;
        color: #b81b24;
        font-size: 1.6rem;
        border-radius: 2rem;
        font-weight: bold;
      }
    }
    .list-box {
      padding: 0 2rem;
      flex-wrap: wrap;
      .list {
        width: 25%;
        padding: 2rem 0;
        box-sizing: border-box;
        img {
          width: 4rem;
          height: 4rem;
          display: block
        }
        .desc {
          font-size: 1.4rem;
          font-weight: bold;
          color: #b81b24;
          padding-top: 1rem
        }
      }
    }
  }
</style>
