import DialogComponent from './dialog.vue'

let Dialog = {}

let install = function (Vue , options) {
    let div = document.createElement('div')
    div.setAttribute('id' , 'alert-root')
    document.body.appendChild(div)
    let DialogConstructor = Vue.extend(DialogComponent)
    const instance = new DialogConstructor()
    console.log(instance)
    instance.$mount('#alert-root')
    
    let dialogHandle = {
        confirm(title , message , cb) {
            instance.confirm(title , message , cb)
        },
        alert(title , message) {
            instance.alert(title , message)
        }
    }
    Vue.prototype.$dialog = dialogHandle
}

Dialog.install = install;

export default Dialog