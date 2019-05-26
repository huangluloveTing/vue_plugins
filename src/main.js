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
import MyAlert from './plugins/alert'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import Loading from './plugins/loading'

Vue.config.productionTip = false  
Vue.use(MyPlugin)
Vue.use(MyAlert)
Vue.use(MintUI)
Vue.use(Loading , {showMask:true})

/* eslint-disable no-new */
new Vue({
  el: '#root',
  router,
  store,
  mounted () {
  },
  render: h => h(App)
})
