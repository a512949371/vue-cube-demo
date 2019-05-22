<template>
  <div class="page-box" :style="{'height': pageHeight}">
    <div class="out-box">
      <div class="list-head flex-box-center">
        <div class="desc"><span :class="listActive === 1 ?'active':''">未使用</span></div>
        <div class="desc"><span :class="listActive === 2 ?'active':''">收藏</span></div>
      </div>
      <div class="list-box" ref='wrapper' :style="{'height': scrollHeight}">
        <div class="overscroll bg-ee">
          <div class="data-box flex-box" v-for="(item, index) in dataNumber" :key="index">
            <div class="left">
              <div class="modification"></div>
              <div class="left-content">
                <div class="left-name"><span>优惠券</span></div>
                <div class="left-company">.RMB.</div>
                <div class="left-money"><span>10</span></div>
                <div class="left-desc">任意消费减10</div>
              </div>
              <div class="modification"></div>
            </div>
            <div class="right">
              <div class="right-name">立减优惠券</div>
              <div class="right-desc">任意消费金额减10元</div>
              <div class="right-hot flex-box">
                <div class="hot-desc">热度:</div>
                <div class="hot-star flex-box-start">
                  <div class="star-box" v-for="(item, index) in starNumer" :key="index">
                    <img :src="index < hotStar ? hotImg : airStar" />
                  </div>
                </div>
              </div>
              <div class="right-use-time">有效期: 2018/8/8 12:31</div>
              <div class="right-use-time">有效期: 2018/11/8 12:31</div>
              <div class="right-btn flex-box-center"><img src="../assets/bug.png"> <span class="pl10">去使用</span></div>
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
  name: 'Coupon',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: '',
      scrollHeight: 0,
      listActive: 1,
      dataNumber: 5,
      starNumer: 5,
      hotImg: require('../assets/star.png'),
      airStar: require('../assets/airstar.png'),
      hotStar: 3
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
      padding-top: 4rem;
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
      .data-box {
        padding-top: 4rem;
        .left {
          border: 1px solid #b81b24;
          padding: 0 1rem;
          .modification {
            width: 100%;
            height: 1rem;
            border-left: 1px solid #b81b24;
            border-right: 1px solid #b81b24;
          }
          .left-content {
            padding: 0.8rem 0;
            color: #b81b24;
            .left-name {
              font-size: 1.4rem;
              span {
                padding-bottom: 0.3rem;
                display: inline-block;
                border-bottom: 1px solid #b81b24
              }
            }
            .left-company {
              font-size: 1.6rem;
              font-weight: bold;
              padding: 0.8rem 0;
            }
            .left-money {
              span {
                font-size: 3.6rem;
                font-weight: bold;
                padding-bottom: 0.3rem;
                display: inline-block;
                border-bottom: 2px solid #b81b24
              }
            }
            .left-desc {
              padding: 0.8rem 0;
              font-size: 1.6rem
            }
          }
        }
        .right {
          flex: 1;
          padding-left: 1.5rem;
          text-align: left;
          color: #b81b24;
          .right-name {
            font-size: 1.8rem;
            font-weight: bold
          }
          .right-desc {
            font-size: 1.4rem;
            padding: 0.3rem 0;
            padding-top: 1.5rem;
          }
          .right-hot {
            font-size: 1.4rem;
            padding: 0.3rem 0;
            .hot-star {
              padding-left: 0.5rem
            }
            .star-box {
              width: 1.1rem;
              height: 1.1rem;
              img {
                width: 100%;
                display: block
              }
            }
          }
          .right-use-time {
            font-size: 1.4rem;
            padding: 0.3rem 0;
          }
          .right-btn {
            background-color: #b81b24;
            padding: 1rem 0;
            text-align: center;
            color: #fff;
            font-size: 1.6rem;
            border-radius: 0.5rem;
            margin-top: 1.5rem;
            img {
              width: 1.5rem;
              height: 1.5rem;
              display: block
            }
          }
        }
      }
    }
  }
}
</style>
