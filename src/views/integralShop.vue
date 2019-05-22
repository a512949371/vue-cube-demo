<template>
<div class="page-box" ref='wrapper' :style="{'height': pageHeight}">
  <div class="out-box overscroll bg-ee">
    <div class="list-box">
      <div v-for="(item, index) in dataNumber" :key="index">
        <div class="data-box flex-box">
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
            <div class="right-name flex-box-bwteen">
              <div>立减优惠券</div>
              <div class="right-img"><img src="../assets/airheart.png"></div>
              </div>
            <div class="right-desc">任意消费金额减10元</div>
            <div class="right-hot flex-box">
              <div class="hot-desc">热度:</div>
              <div class="hot-star flex-box-start">
                <div class="star-box" v-for="(item, index) in starNumer" :key="index">
                  <img :src="index < hotStar ? hotImg : airStar" />
                </div>
              </div>
            </div>
            <div class="right-process flex-box-center">
              <div>已售: 60%</div>
              <div class="process-box pos"><div class="process"></div>
              </div>
            </div>
            <div class="right-use-time">有效期: 2018/8/8 12:31</div>
            <div class="right-use-time">有效期: 2018/11/8 12:31</div>
            <div class="right-btn flex-box-center"><img src="../assets/bug.png"><span class="pl10 pr10">20积分</span>|<span class="pl10">去使用</span></div>
          </div>
        </div>
        <div class="flex-box-center" v-if="index !== dataNumber-1"><div class="bottom-line"></div></div>
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
  name: 'integralShop',
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0,
      dataNumber: 5,
      starNumer: 5,
      hotStar: 3,
      hotImg: require('../assets/star.png'),
      airStar: require('../assets/airstar.png')
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
  }
}
</script>

<style lang="scss" scoped>
.page-box{
  .out-box {
    padding: 0 2rem;
  }
  .list-box {
    .data-box {
      padding: 2rem 0;
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
          font-weight: bold;
          .right-img {
            width: 1.8rem;
            height: 1.5rem;
            img {
              width: 100%;
              display: block
            }
          }
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
        .right-process {
          font-size: 1.4rem;
          padding: 0.3rem 0;
          .process-box {
            flex: 1;
            padding-left: 0.5rem;
            .process {
              width: 100%;
              height: 3px;
              background-color: #b81b24;
              border-radius: 0.4rem;
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
    .bottom-line {
      width: 90%;
      height: 3px;
      background-color: #b81b24;
    }
  }
}
</style>
