import Vue from 'vue'
import Vuex from 'vuex'
import requestAjax from '../common/ajaxrequest.js'
import apiUrl from '../common/ajaxurl.js'

Vue.use(Vuex)
const state = {
  testdata: '这里是一条测试数据'
}
const mutations = {

}
const actions = {
  Login: function () {
    let data = {
      requesttoken: '0000',
      requestUrl: apiUrl.login,
      requestType: 'Get'
    }
    let callback = function () {

    }
    return requestAjax.request(data, callback)
  }
}
const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
  }
})
export default store
