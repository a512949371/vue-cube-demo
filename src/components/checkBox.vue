<template>
  <div class="cube-radio">
      <label class="cube-radio-wrap flex-box-start pos" >
        <input class="cube-radio-input" type="checkbox"  v-model="checkValue" >
        <div class="square-box pos" :class="checkValue?'square-box-selected':''" :style="{'border-color':checkValue&&themeColor?themeColor:''}">
          <span class="line-box" :style="{'background-color':checkValue&&themeColor?themeColor:''}"></span>
          <span class="line-box-two" :style="{'background-color':checkValue&&themeColor?themeColor:''}"></span>
        </div>
        <slot>
          <span class="cube-radio-label"></span>
        </slot>
      </label>
    </div>
</template>
<script>
export default {
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean
    },
    themeColor: {
      type: String
    }
  },
  data () {
    return {
      checkValue: this.value
    }
  },
  watch: {
    value (newVal) {
      this.checkValue = newVal
    },
    checkValue (newVal) {
      this.$emit('input', newVal)
    }
  }
}
</script>
<style lang="scss" scoped>
.cube-radio {
  flex: 1;
  padding: 1rem 0;
}
.square-box {
  width: 1.4rem;
  height: 1.4rem;
  border: 1px solid #e5e5e5;
  border-radius: 2px;
  display: inline-block;
  .line-box {
    position: absolute;
    top: .8rem;
    left: .2rem;
    display: inline-block;
    width: .5rem;
    height:.2rem;
    background-color: #fff;
    line-height: 0;
    font-size:0;
    border-radius: 1px;
    vertical-align: middle;
    transform: rotate(45deg);
  }
  .line-box-two {
    position: absolute;
    top: .6rem;
    left: .5rem;
    display: inline-block;
    width: .8rem;
    height: .2rem;
    background-color: #fff;
    line-height: 0;
    font-size:0;
    vertical-align: middle;
    transform: rotate(-45deg);
  }
  &.square-box-selected {
    border: 1px solid #f00;
    .line-box {
      background-color: #f00;
    }
    .line-box-two {
      background-color: #f00;
    }
  }
}
.cube-radio-label {
  font-size: 1.4rem;
  padding-left: 1rem;
}
.cube-radio-input {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 99
}
</style>
