import ToastComponent from './toast.vue'


function install(Vue , options) {
    let ToastConstructor = Vue.extend(ToastComponent)
    let instance = new ToastConstructor()
    let div = document.createElement('div')
    document.body.appendChild(div)
    instance.$mount(div)

    if (options && options.position) {
        instance.position = options.position
    }
    if (options && options.duration) {
        instance.duration = options.duration
    }

    let toast = {
        success(message , duration) {
            instance.show('success' , message , {duration:duration})
        },
        fail(message , duration) {
            instance.show('fail' , message , {duration:duration})
        },
        warn(message , duration) {
            instance.show('warn' , message , {duration:duration})
        }
    }
    Vue.prototype.$toast = toast;
}


let Toast = {}

Toast.install = install
export default Toast;