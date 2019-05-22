<template>
  <div class="page-box pos" :style="{'height': pageHeight}" v-on:click="goMy">
    <div class="head-tip-box flex-box-center">
      <div class="head-tip-cn"><img src="../assets/hello.png"></div>
    </div>
    <div class="head-box flex-box-center">
      <div class="head"><img src="../assets/head.png"></div>
    </div>
    <div class="welcom-box">Welcome come to Beijing FUN</div>
  </div>
</template>

<script>
export default {
  name: 'getHeader',
  data () {
    return {
      pageHeight: 0
    }
  },
  created () {
    this.pageHeight = window.innerHeight + 'px'
  },
  methods: {
    goMy: function () {
      this.$router.push('my')
    }
  }
}
</script>

<style lang="scss" scoped>
.page-box{
  background-image: url('../assets/nk01-qingxi.jpg');
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;
  box-sizing: border-box;
  .head-box {
    padding-top: 2rem;
     .head {
       width: 12.5rem;
       height: 12.5rem;
       img {
         width: 100%;
         display: block
       }
     }
  }
  .head-tip-box {
    padding-top: 8rem;
    flex: 1;
    .head-tip-cn {
      width: 12.2rem;
      height: 2.7rem;
      img {
        width: 100%;
        display: block
      }
    }
  }
  .welcom-box {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5%;
    background-color: #b81b24;
    padding: 2rem 0;
    text-align: center;
    color: #fff;
    font-size: 2.4rem;
  }
}
</style>
