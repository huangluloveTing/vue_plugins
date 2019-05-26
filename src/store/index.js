import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)

let reqiureContext = require.context('./modules' , false , /\.js$/)

let modules = {}

reqiureContext.keys().forEach(key => {
    let name = key.slice(2, -3)
    console.log(name)
    let moduleConfig = reqiureContext(key).default
    modules[name] = moduleConfig
})

export default new Vuex.Store({
    modules:{
        ...modules
    }
})