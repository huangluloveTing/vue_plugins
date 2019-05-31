let mymodelDirective = {
    bind : (el , binding , vnode) => {
        console.log('========== bind =========')
        console.log(el)
        console.log(binding)
    },
    update :(el , binding , vode) => {
        console.log('========== update =========')
        console.log(el)
        console.log(binding)
    }
}

function install(Vue , options) {
    Vue.directive('cmodel' , mymodelDirective)
}

export default install