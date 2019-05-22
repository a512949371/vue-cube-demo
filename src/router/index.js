import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Login from '@/views/login'
import Register from '@/views/register'
import setHeader from '@/views/setHeader'
import getHeader from '@/views/getHeader'
import My from '@/views/my'
import myInfo from '@/views/myInfo'
import Coupon from '@/views/coupon'
import integralList from '@/views/integralList'
import myActive from '@/views/myActive'
import activeDetail from '@/views/activeDetail'
import activeReg from '@/views/activeReg'
import myActiveList from '@/views/myActiveList'
import integralShop from '@/views/integralShop'
import signIn from '@/views/signIn'
import couponDetail from '@/views/couponDetail'
Vue.use(Router)
const routes = [{
  path: '/',
  name: 'Index',
  component: Index,
  meta: {
    keepAlive: true
  }
},
{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    keepAlive: false
  }
},
{
  path: '/register',
  name: 'Register',
  component: Register,
  meta: {
    keepAlive: false
  }
},
{
  path: '/setheader',
  name: 'setHeader',
  component: setHeader,
  meta: {
    keepAlive: false
  }
},
{
  path: '/getheader',
  name: 'getHeader',
  component: getHeader,
  meta: {
    keepAlive: false
  }
},
{
  path: '/my',
  name: 'My',
  component: My,
  meta: {
    keepAlive: false
  }
},
{
  path: '/myinfo',
  name: 'myInfo',
  component: myInfo,
  meta: {
    keepAlive: false
  }
},
{
  path: '/coupon',
  name: 'Coupon',
  component: Coupon,
  meta: {
    keepAlive: false
  }
},
{
  path: '/integrallist',
  name: 'integralList',
  component: integralList,
  meta: {
    keepAlive: false
  }
},
{
  path: '/myactive',
  name: 'myActive',
  component: myActive,
  meta: {
    keepAlive: false
  }
},
{
  path: '/activedetail',
  name: 'activeDetail',
  component: activeDetail,
  meta: {
    keepAlive: false
  }
},
{
  path: '/activereg',
  name: 'activeReg',
  component: activeReg,
  meta: {
    keepAlive: false
  }
},
{
  path: '/myactivelist',
  name: 'myActiveList',
  component: myActiveList,
  meta: {
    keepAlive: false
  }
},
{
  path: '/integralshop',
  name: 'integralShop',
  component: integralShop,
  meta: {
    keepAlive: false
  }
},
{
  path: '/signin',
  name: 'signIn',
  component: signIn,
  meta: {
    keepAlive: false
  }
},
{
  path: '/coupondetail',
  name: 'couponDetail',
  component: couponDetail,
  meta: {
    keepAlive: false
  }
}]
const router = new Router({
  mode: 'hash',
  routes
})
/* 路由发生变化变化前进行操作 */
router.beforeEach((to, from, next) => {
  console.log('to', to)
  next()
})
export default router
