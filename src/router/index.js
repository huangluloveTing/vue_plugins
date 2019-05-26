import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/Home.vue')
const Detail = () => import('../pages/Detail.vue')
const OrderList = () => import('../pages/OrderList.vue')
const SettingPage = () => import('../pages/setting.vue')
Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path:'/orderList',
      name:'orderlist',
      component: OrderList
    },
    {
      path:'/setting',
      name:'setting',
      component: SettingPage
    },
    {
      path: '/*',
      name: 'home',
      component: Home
    }
  ]
})
