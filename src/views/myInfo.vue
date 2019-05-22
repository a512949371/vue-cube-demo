<template>
  <div class="page-box" :style="{'height': pageHeight}">
    <div class="out-box">
      <div class="info-box flex-box-start">
        <div class="img-box"><img src="../assets/head.png"></div>
        <div class="name-box">
          <div class="name">石书桓</div>
          <div class="integral">积分: 0</div>
        </div>
      </div>
      <div class="info-box">
        <div class="desc">卡号: 0001011</div>
        <div class="desc">生日: 1900-1-1</div>
        <div class="desc">手机号码: 15487844858</div>
      </div>
      <div class="info-box">
        <div class="desc">车牌号码: </div>
        <div class="desc">家庭住址: </div>
        <div class="desc">电子邮箱: 15487844858@qq.com</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'myInfo',
  data () {
    return {
      pageHeight: ''
    }
  },
  created () {
    console.log(this.$store)
    this.pageHeight = (window.innerHeight) + 'px'
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
    padding: 2rem 3.7rem;
    .info-box {
      padding: 2rem 0;
      border-bottom: 1px solid #d9d9d9;
      align-items:flex-end;
      .img-box {
        width: 8rem;
        height: 8rem;
        padding:0 1.5rem;
        img {
          width: 100%;
          display: block
        }
      }
      .name-box {
        flex: 1;
        .name {
          font-size: 1.6rem;
          color: #b81b24
        }
        .integral {
          font-size: 1.4rem;
          padding-top: 0.5rem;
          color: #e5655f
        }
      }
      .desc {
        padding: 0.4rem 2rem;
        color: #e5655f;
        font-size: 1.6rem;
        text-align: left;
      }
    }
  }
}
</style>
