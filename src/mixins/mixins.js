export default {
  name: 'Mixins',
  data () {
    return {
      isIos: false
    }
  },
  created () {
    this.checkPlatform()
  },
  methods: {
    getFocus: function () {
      window.scroll(0, 0)
    },
    pageClick: function (e) {
      let inputdata = document.getElementsByClassName('input')
      if (e.srcElement.className !== 'input' && e.srcElement.className !== 'icon-close') {
        for (let i = 0; i < inputdata.length; i++) {
          console.log(e.srcElement.className)
          inputdata[i].blur()
        }
      }
    },
    // 判断打开机型
    checkPlatform () {
      if (/android/i.test(navigator.userAgent)) {
        // 这是Android平台下浏览器
      }
      if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        this.isIos = true
        // 这是iOS平台下浏览器
      }
      if (/Linux/i.test(navigator.userAgent)) {
        // 这是Linux平台下浏览器
      }
      if (/Linux/i.test(navigator.platform)) {
        // 这是Linux操作系统平台
      }
      if (/MicroMessenger/i.test(navigator.userAgent)) {
        // 这是微信平台下浏览器
      }
    },
    // 消息提示
    magToast: function (data) {
      const toast = this.$createToast({
        time: 1000,
        txt: data
      })
      toast.show()
    },
    // 错误消息提示
    errAlert: function (data) {
      this.$createDialog({
        type: 'alert',
        title: data,
        content: '',
        icon: 'cubeic-alert'
      }).show()
    }
  }
}
