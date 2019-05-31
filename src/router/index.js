import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('../pages/Home.vue')
const Detail = () => import('../pages/Detail.vue')
const OrderList = () => import('../pages/OrderList.vue')
const SettingPage = () => import('../pages/setting.vue')
const cart = () => import('../pages/cart.vue')
const terminal = () => import('../pages/TerminalPage.vue')
const shop = () => import('../pages/shop.vue')
const person = () => import('../pages/person.vue')

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    { path: '/', redirect: { name: 'home' }},
    {
      path: '/home',
      name: 'home',
      component: Home,
      children:[
        {
          path: '/cart',
          name: 'cart',
          component: cart
        },{
          path: '/shop',
          name: 'shop',
          component: shop
        },{
          path: '/person',
          name: 'person',
          component: person
        },{
          path: '/terminal',
          name: 'terminal',
          component: terminal
        },
      ]
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
      name: 'other',
      component: Home
    }
  ]
})
