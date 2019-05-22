<template>
  <div class="page-box pos" :style="{'height': pageHeight}">
    <div class="logo-box"><img src="../assets/logo.png"></div>
    <div class="login-box" v-on:click="goLogin"><img src="../assets/loginBtn02.gif"></div>
    <div class="reg-box" v-on:click="goRegiste">注册</div>
    <div class="footer-box flex-box-center"><img src="../assets/copywriting.png"></div>
  </div>
</template>
<script>
export default {
  name: 'Index',
  data () {
    return {
      pageHeight: ''
    }
  },
  created () {
    console.log(this.$store)
    this.pageHeight = (window.innerHeight - 80) + 'px'
  },
  methods: {
    goLogin: function () {
      this.$router.push('login')
    },
    goRegiste: function () {
      this.$router.push('register')
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
  .logo-box {
    width: 7.7rem;
    height: 8.4rem;
    margin: 4rem auto 0 auto;
    img {
      width: 100%;
      height: 100%;
      display: block
    }
  }
  .login-box {
    width: 15.9rem;
    height: 16.2rem;
    margin: 4rem auto;
    img {
      width: 100%;
      height: 100%;
      display: block
    }
  }
  .reg-box {
    font-size: 1.6rem;
    text-decoration: underline;
    color: #bb1d1c
  }
  .footer-box {
    width: 100%;
    position: absolute;
    bottom: 3rem;
    img {
      width: 17.2rem;
      height: 2.7rem;
      display: block
    }
  }
}
</style>
