import AlertComponent from './alert'

let Alert = {}

let myAlert = function (Vue , options) {
    let div = document.createElement('div')
    div.setAttribute('id' , 'alert-root')
    document.body.appendChild(div)
    let AlertConstructor = Vue.extend(AlertComponent)
    const instance = new AlertConstructor()
    console.log(instance)
    instance.$mount('#alert-root')
    
    let alertHandle = {
        confirm(title , message , cb) {
            instance.confirm(title , message , cb)
        },
        alert(title , message) {
            instance.alert(title , message)
        }
    }
    Vue.prototype.$alert = alertHandle
}

Alert.install = myAlert;

export default Alert