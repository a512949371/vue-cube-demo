<template>
  <div class="page-box pos" ref="wrapper" :style="{'height': pageHeight}">
    <div class="overscroll bg-ee" v-on:click="pageClick">
      <div class="flex-box top-tip-box"><img src="../assets/RegistrationIn.png"></div>
      <div class="data-box">
        <div class="info-box">
          <div class="desc-box">* 姓名/<span>Name</span></div>
          <div class="flex-box">
            <div class="input-box"><input class="input" v-model="input1"/></div>
            <div class="sex-box flex-box"><span :class="sexActive === 1?'active':''">先生</span><span :class="sexActive === 2?'active':''">女士</span></div>
          </div>
        </div>
        <div class="info-box">
          <div class="desc-box">* 生日/<span>Birthday</span></div>
          <div class="flex-box">
            <div class="input-box"><input class="input" v-model="input1"/></div>
          </div>
        </div>
        <div class="info-box">
          <div class="desc-box">* 手机号码/<span>Phone</span></div>
          <div class="flex-box">
            <div class="input-box"><input class="input" v-model="input1"/></div>
          </div>
        </div>
        <div class="info-box">
          <div class="desc-box">* 验证码/<span>Verification Code</span></div>
          <div class="flex-box">
            <div class="input-box"><input class="input" v-model="input1"/></div>
            <div class="sms-box flex-box"><span>获取验证码</span></div>
          </div>
        </div>
        <div class="info-box">
          <div class="desc-box">车牌号码/<span>License plate</span></div>
          <div class="flex-box">
            <div class="input-box"><input class="input" v-model="input1"/></div>
          </div>
        </div>
        <div class="info-box flex-box-start" style="padding-top: 2rem;">
          <CheckBox ref="checkbox" v-model="rule" :themeColor="themColor"><span class="rule-box">我已阅读并同意 <a href="javascript:;" class="pos rule" @click.stop :style="{'color': themColor}">《会员权益》</a>条款</span></CheckBox>
        </div>
        <div class="info-box flex-box-center" style="padding-top: 2rem;"><div class="login-box">登录</div></div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Mixins from '../mixins/mixins'
import CheckBox from '@/components/checkBox'
export default {
  name: 'Register',
  components: {CheckBox},
  mixins: [Mixins],
  data () {
    return {
      pageHeight: 0,
      rule: false,
      themColor: '#b81b24',
      sexActive: 1,
      input1: ''
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
  .top-tip-box {
    padding-top: 3.2rem;
    padding-left: 3.7rem;
    img {
      width: 17.4rem;
      height: 3rem;
      display: block
    }
  }
  .top-tip {
    font-size: 2.4em;
    color: #b81b24;
    padding-bottom: 0.5rem;
    border-bottom: 2px solid #b81b24
  }
  .data-box {
    padding: 0 3.7rem;
    .info-box {
      padding: 2.5rem 0 0 0;
      width: 100%;
      .desc-box {
        text-align: left;
        color: #b81b24;
        font-size: 1.6rem;
        span {
          font-size: 1.4rem
        }
      }
      .input-box {
        flex: 1;
        padding-right: 0.5rem;
        input {
          width: 100%;
          font-size: 1.6rem;
          outline: none;
          border: none;
          padding-top: 0.5rem;
          border-bottom: 2px solid #b81b24;
          padding-bottom: 0.5rem;
          padding-left: 0.5rem;
          color: #b81b24;
          box-sizing: border-box
        }
        input::-webkit-input-placeholder {
          color: #b81b24
        }
      }
      .sex-box span {
        padding: 0.2rem 1.2rem;
        align-self: flex-end;
        border-radius: 2rem;
        background-color: #c6c6c6;
        color: #fff;
        font-size: 1.6rem;
        margin: 0 0.5rem
      }
      .sex-box .active {
        background-color: #b81b24;
      }
      .sms-box span {
        padding: 0.5rem 1.2rem;
        align-self: flex-end;
        border-radius: 0.5rem;
        background-color: #b81b24;
        color: #fff;
        line-height: 1.6rem;
        font-size: 1.6rem;
        margin: 0 0.5rem
      }
      .rule-box {
        color: #b81b24;
        font-size: 1.4rem;
        padding-left: 1rem;
        .rule {
          text-decoration: underline
        }
      }
      .login-box {
        flex: 1;
        border-radius: 0.5rem;
        font-size: 1.6rem;
        padding: 1rem 0;
        background-color: #b81b24;
        color: #fff;
      }
    }
  }
}
</style>
