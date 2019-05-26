
import LoadingComponent  from './loading.vue'

let Loading = {}

function install(Vue , options) {
    let LoadingConstructor = Vue.extend(LoadingComponent)
    let loadingInstance = new LoadingConstructor()
    let elment = document.createElement('div')
    document.body.appendChild(elment)
    let loadingElement = loadingInstance.$mount(elment)

    const loading = {
        show(title , options) {
            loadingElement.showLoading(title , options)
        },
        hidden() {
            loadingElement.hidden()
        }
    }
    if (options) {
        console.log('loading options')
        console.log(options)
        loadingElement.showMask = options.showMask
    }
    loading.hidden()
    Vue.prototype.$loading = loading
}

Loading.install = install


export default Loading;