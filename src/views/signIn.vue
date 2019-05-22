<template>
<div class="page-box" ref="wrapper" :style="{'height': pageHeight}">
  <div class="overscroll bg-ee">
    <div class="top-box">
      <div class="inregral-box flex-box-bwteen">
        <div class="left"><span>75</span>积分</div>
        <div class="right" v-on:click="goShop">积分商城</div>
      </div>
      <div class="flex-box-center">
        <div class="sign-box">
          <div class="sign-status" v-on:click="trueSign"><span>未签到</span></div>
          <div class="continuity-time">连续5天</div>
        </div>
      </div>
      <div class="top-tip">今日已签到，获得15积分</div>
    </div>
    <div class="calendar-box">
      <div class="calendar-top">
        <div class="month">
          <ul class="flex-box-center">
            <li class="arrow" @click="pickPre(currentYear,currentMonth)">❮</li>
            <li class="year-month flex-box-center">
              <span class="choose-year pr10">{{ currentYear }}年</span>
              <span class="choose-month">{{ currentMonth }}月</span>
            </li>
            <li class="arrow" @click="pickNext(currentYear,currentMonth)">❯</li>
          </ul>
        </div>
      </div>
      <div class="calendar-head">
        <ul class="weekdays flex-box-center">
          <li style="color:red">日</li>
          <li>一</li>
          <li>二</li>
          <li>三</li>
          <li>四</li>
          <li>五</li>
          <li style="color:red">六</li>
        </ul>
      </div>
      <div class="calendar-data">
        <div id="calendar">
          <ul class="days flex-box-start">
            <li v-for="(item, index) in days" :key="index" :style="{'margin-left': index === 0 ? currentWeek*14.27 +'%' : ''}">
              <span :class="item.isSign ? 'active' : ''">{{new Date(item.date).getDate()}}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <Bag v-on:Close="Close" :content="bagcontent" ref="bag" />
</div>
</template>
<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
import Bag from '@/components/bag'
export default {
  name: 'signIn',
  mixins: [Mixins],
  components: {Bag},
  data () {
    return {
      pageHeight: 0,
      currentDay: 1,
      currentMonth: 1,
      currentYear: 1970,
      currentWeek: 1,
      days: [],
      signDay: ['2019-5-1', '2019-5-3', '2019-5-7', '2019-5-8', '2019-5-9'],
      bagcontent: {
        tit: '恭喜您今日签到成功!',
        desc: '连续签到积分更多哟!'
      }
    }
  },
  created () {
    this.initData(null)
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
    // 初始化日历
    initData: function (year, cur) {
      let date = ''
      let lastDay = 0
      let now = new Date()
      if (year && cur) {
        date = new Date(year, cur - 1, 1)
        this.currentDay = date.getDate()
        console.log('date', date, cur)
        this.currentWeek = date.getDay() // 1...6,0
      } else {
        date = new Date(now.getFullYear(), now.getMonth(), 1)
        console.log('date1', date, now.getMonth())
        this.currentDay = date.getDate()
        this.currentYear = date.getFullYear()
        this.currentMonth = date.getMonth() + 1
        this.currentWeek = date.getDay() // 1...6,0
      }
      lastDay = new Date(this.currentYear, this.currentMonth, 0).getDate()
      this.formatDate(this.currentYear, this.currentMonth, lastDay)
    },
    // 积分商城
    goShop: function () {
      this.$router.push('integralShop')
    },
    // 签到
    trueSign: function () {
      console.log('bag', this.$refs.bag)
      this.$refs.bag.isshow = true
      this.$refs.bag.show()
    },
    Close (e) {
      console.log(e)
    },
    // 上一月
    pickPre: function (year, month) {
      this.currentMonth = month - 1 > 0 ? month - 1 : 12
      if (month - 1 > 0) {
        this.currentYear = this.currentYear
      } else {
        this.currentYear = this.currentYear - 1
      }
      this.initData(this.currentYear, this.currentMonth)
    },
    // 下一月
    pickNext: function (year, month) {
      this.currentMonth = month + 1 > 12 ? 1 : month + 1
      if (month + 1 > 12) {
        this.currentYear = this.currentYear + 1
      } else {
        this.currentYear = this.currentYear
      }
      this.initData(this.currentYear, this.currentMonth)
    },
    // 格式化已签到时期
    fromSign: function (data) {
      let changeData = data.map((item) => {
        let date = new Date(item)
        let year = date.getFullYear()
        let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1
        let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        item = year + '-' + month + '-' + day
        return item
      })
      return changeData
    },
    // 返回 类似 2016-01-02 格式的字符串
    formatDate: function (year, month, day) {
      this.days = []
      let y = year
      let m = month
      let signData = this.fromSign(this.signDay)
      if (m < 10) {
        m = '0' + m
      }
      for (let i = 1; i <= day; i++) {
        if (i < 10) {
          i = '0' + i
        }
        let pushData = {
          date: y + '-' + m + '-' + i,
          isSign: false
        }
        for (let j = 0; j < signData.length; j++) {
          if (pushData.date === signData[j]) {
            pushData.isSign = true
            break
          }
        }
        this.days.push(pushData)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .page-box {
    .top-box {
      padding: 2rem;
      background-color: #b81b24;
      .inregral-box {
        color: #fff;
        font-size: 1.6rem;
        .left {
          flex: 1;
          text-align: left;
          span {
            font-size: 2rem;
            padding-right: 0.5rem;
          }
        }
        .right {
          padding: 0.5rem;
          border: 1px solid #fff;
          border-radius: 0.5rem;
        }
      }
      .sign-box {
        display: flex;
        background: url('../assets/sign-img.png') no-repeat center center;
        width: 12rem;
        height: 12rem;
        background-size: 100%;
        overflow: hidden;
        flex-direction: column;
        justify-content:center;
        align-items: center;
        .sign-status {
          span {
            padding: 0.8rem 1rem;
            font-size: 1.8rem;
            color: #b81b24;
            border-bottom: 1px solid #b81b24;
            font-weight: bold;
            display: inline-block
          }
        }
        .continuity-time {
          font-size: 1.6rem;
          color: #b81b24;
          padding: 0.5em 0;
        }
      }
      .top-tip {
        font-size: 1.6rem;
        color: #fff;
        padding-top: 1.5rem;
      }
    }
    .month {
      li {
        width: 6rem;
        padding: 1.5rem 0;
        font-size: 1.6rem;
      }
      .year-month {
        width: 10rem
      }
    }
    .weekdays {
      border-top: 1px solid #d9d9d9;
      li {
        width: 14.27%;
        padding: 1rem 0;
        font-size: 1.6rem;
        font-weight: bold
      }
    }
    .days {
      flex-wrap: wrap;
      li {
        width: 14.27%;
        padding: 0.5rem 0;
        span {
          width: 2.4rem;
          height: 2.4rem;
          line-height: 2.5rem;
          display: inline-block;
          font-size: 1.6rem;
          border-radius: 50%;
          text-align: center;
        }
        .active {
          background-color: #b81b24;
          color: #fff
        }
      }
    }
  }
</style>
