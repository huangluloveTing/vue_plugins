// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import MyPlugin from './plugins/myPlugin'
import store from './store'
import './utils/config'
import './assets/iconfont/iconfont.css'
require('./components')
import MyDialog from './plugins/dialog'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Loading from './plugins/loading'
import Toast from './plugins/toast'
import MyDirective from './directive/mymodel'
import request from './api/request'

Vue.config.productionTip = false  
Vue.use(MyDialog)
Vue.use(MintUI)
Vue.use(Loading , {showMask:true})
Vue.use(Toast , {position : 'center' , duration:2000})
Vue.use(MyDirective)

console.log('vue version')
console.log(Vue.version)

Vue.prototype.$api = request
/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  mounted () {
  },
  render: h => h(App)
})
