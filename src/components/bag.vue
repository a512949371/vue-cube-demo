<template>
  <cube-popup type="extend-popup" ref="bag" :mask-closable="true">
    <div class="cube-extend-popup-content">
      <transition name="bounce">
        <div class="content-box" v-show="isshow" v-on:click="Close">
          <div class="top-img"><img src="../assets/checkinBox.png"></div>
            <div class="info-box-out">
              <div class="info-box-int">
                <div class="tit">{{content.tit}}</div>
                <div class="desc">{{content.desc}}</div>
              </div>
            </div>
            <div class="flex-box-center" style="padding-bottom:2rem">
          </div>
        </div>
      </transition>
    </div>
  </cube-popup>
</template>
<script>
export default {
  name: 'Bag',
  props: {
    content: {
      type: Object
    }
  },
  data () {
    return {
      isshow: false
    }
  },
  methods: {
    show () {
      this.$refs.bag.show()
    },
    Close () {
      this.isshow = false
      this.$refs.bag.hide()
      this.$emit('Close', {isshow: false})
    }
  }
}
</script>
<style lang="scss" scoped>
.content-box {
  overflow: hidden;
  background-size: cover;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items: center;
  .top-img {
    width: 25rem;
    height: 10.6rem;
    z-index: 999;
    img {
      width: 100%;
      display: block;
    }
  }
  .info-box-out {
    border-radius: 1rem;
    margin-top: -1.5rem;
    z-index: 99;
    width: 18rem;
    padding: 1rem;
    background-color: #d9d9d9;
    .info-box-int {
      border-radius: 0.6rem;
      background-color: #fff;
      padding-bottom: 1rem;
    }
  }
  .tit {
    color: #b81b24;
    font-size: 1.6rem;
    font-weight: bold;
    text-align: center;
    padding-top: 3rem;
  }
  .desc{
    font-size: 1.6rem;
    font-weight: bold;
    color: #b81b24;
    padding: 2rem 0
  }
  .btn {
    padding: 7px 5rem;
    font-size: 16px;
    color: #fff;
    background: linear-gradient(to right, #da31b0, #b81f91);
    border-radius: 3rem;
    margin-top: 1.5rem;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
