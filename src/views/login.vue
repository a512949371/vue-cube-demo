<template>
  <div class="page-box pos" :style="{'height': pageHeight}">
    <div class="flex-box top-tip-box"><img src="../assets/Sign_In.png"></div>
    <div class="data-box">
      <div class="info-box flex-box-center"><input placeholder="手机号码/Phone" placeholder-=""/></div>
      <div class="info-box flex-box-center"><div class="input-box"><input placeholder="验证码" placeholder-=""/></div><div class="sms-box">获取验证码</div></div>
      <div class="info-box flex-box-center"><div class="login-box" v-on:click="login">登录</div></div>
    </div>
    <div class="reg-box flex-box-center"><span>注册</span></div>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      pageHeight: 0
    }
  },
  created () {
    this.pageHeight = (window.innerHeight - 80) + 'px'
  },
  methods: {
    login: function () {
      this.$router.push('setheader')
    }
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
        width: 8.1rem;
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
      padding-top: 5rem;
      padding-left: 3.7rem;
      padding-right: 3.7rem;
      .info-box {
        padding: 1.2rem 0;
        .input-box {
          flex: 1;
          padding-right: 0.5rem
        }
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
        .sms-box {
          padding: 1rem 1rem;
          border-radius: 0.5rem;
          background-color: #b81b24;
          color: #fff;
          font-size: 1.6rem
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
    .reg-box {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      color: #b81b24;
      text-decoration: underline;
      font-size: 1.6rem
    }
  }
</style>
