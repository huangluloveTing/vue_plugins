import Vue from 'vue'

let requireComponent = require.context('.' , false , /\.vue$/)

let pages = []

function getComponentName(name = '') {
    // console.log(name.toLowerCase())
    return name.toLowerCase()
}

requireComponent.keys().forEach(key => {
    let config = requireComponent(key)
    console.log(key)
    let componentName = getComponentName(key.replace(/^\.\// , '').replace(/\.\w+$/ , ''))
    Vue.component(componentName , config.default || config)
});
