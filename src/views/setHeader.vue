<template>
  <div class="page-box pos" :style="{'height': pageHeight}">
    <div class="head-box flex-box-center">
      <div class="head"><img src="../assets/addhearimg.png"></div>
    </div>
    <div class="head-tip-box">
      <div class="head-tip-cn">请设置一个头像</div>
      <div class="head-tip-en">Please set up a head</div>
    </div>
    <div class="info-box flex-box-center" style="padding-top: 2rem;"><div class="login-box" v-on:click="goHead">确定</div></div>
    <div class="next-box" v-on:click="goMy">跳过 》</div>
  </div>
</template>

<script>
export default {
  name: 'setHeader',
  data () {
    return {
      pageHeight: 0
    }
  },
  created () {
    this.pageHeight = window.innerHeight + 'px'
  },
  methods: {
    goHead: function () {
      this.$router.push('getheader')
    },
    goMy: function () {
      this.$router.push('my')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-box{
  background-image: url('../assets/nk01-lqf.png');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  box-sizing: border-box;
  .head-box {
    padding-top: 8rem;
     .head {
       width: 13.5rem;
       height: 13.5rem;
       img {
         width: 100%;
         display: block
       }
     }
  }
  .head-tip-box {
    padding: 2rem 0;
    color: #fff;
    .head-tip-cn {
      font-weight: bold;
      font-size: 2rem;
      padding: 0.5rem 0
    }
    .head-tip-en {
      font-weight: bold;
      padding: 0.5rem 0;
      font-size: 1.4rem
    }
  }
  .info-box {
    padding: 2.5rem 3.7rem;
    .login-box {
      flex: 1;
      border-radius: 0.5rem;
      font-size: 1.6rem;
      padding: 1rem 0;
      background-color: #b81b24;
      color: #fff;
    }
  }
  .next-box {
    position: absolute;
    bottom: 10px;
    right: 5px;
    z-index: 99;
    color: #fff;
    font-size: 1.4rem;
    font-weight: bold
  }
}
</style>
