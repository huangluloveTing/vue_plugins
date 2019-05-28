# vue_buck

## vue项目vuex
*vue是模板语法框架*
*有许多指令和*

# 指令
1. v-model其实是一个语法糖
```
    <input v-model='input' />
    <!-- 等价于 -->
    <input :value='value' @input='this.$emit('input', $event.target.value) />
```
--------
# require.context() 自动实现Vuex的注入
```
    import Vuex from 'vuex'
    import Vue from 'vue'
    Vue.use(Vuex)

    let reqiureContext = require.context('./modules' , false , /\.js$/)

    let modules = {}

    reqiureContext.keys().forEach(key => {
        let name = key.slice(2, -3) // 得到 state的名称
        let moduleConfig = reqiureContext(key).default || reqiureContext(key)
        modules[name] = moduleConfig
    })

    export default new Vuex.Store({
        modules:{
            ...modules
        }
    })
```
* 这样写，不用每次更新了新增了store就要写代码，通过 webpack 自动帮我们实现了store 的注入
* 同样的道理，可以通过这个方法，实现一些组件的自动注册


-------

## vue 项目自定义插件
1. dialog 插件源码及分析
>dialog的视图样式层
```
    <!--  -->
    <template>
        <div>
            <div class="alert-container" v-if='modal_show'></div>
            <transition name="alert-transition">
                <div class="alert-content" v-if="show">
                    <!-- alert 标题 -->
                    <div class="title wrapTitle">
                        <slot name='title'><span>{{title}}</span></slot>
                    </div>
                    <!-- alert 提示内容 -->
                    <div class="content wrapTitle">
                        <slot name="content"><span>{{content}}</span></slot>
                    </div> 
                    <!-- 操作按钮 -->
                    <div class="handles">
                        <div class="cancel" @click="handleCancel" v-if="type == 'SHOW_TYPE_CONFRIM'">{{cancelTitle}}</div>
                        <div class="sure" @click="handleSure">{{sureTitle}}</div>
                    </div>
                </div>
            </transition>
        </div>    
    </template>

    <script>

    const ANIMATION_INTERVAL = 300
    const SHOW_TYPE_CONFRIM = "SHOW_TYPE_CONFRIM"
    const SHOW_TYPE_ALERT = "SHOW_TYPE_ALERT"
    const SHOW_TYPE_PROMPT = "SHOW_TYPE_PROMPT"

    export default {
        data () {
        return {
            modal_show:false,
            show:false,
            title:'提示',
            content: '',
            cancelTitle: '取消',
            sureTitle: '确定',
            type: SHOW_TYPE_CONFRIM
        };
        },

        methods: {
            handleCancel() {
                if (this.cb) {
                    this.cb(0)
                }
                this.hiddenAlert()
            },
            handleSure(){
                if (this.cb) {
                    this.cb(1)
                }
                this.hiddenAlert()
                // this.$emit('sure')
            },
            hiddenAlert() {
                console.log('hiidenn')
                this.show = false
                setTimeout(() => {
                    this.modal_show = false
                }, ANIMATION_INTERVAL);
            },
            toShowAlert() {
                this.modal_show = true
                this.show = true
            },
            confirm(title , content , cb){
                this.type = SHOW_TYPE_CONFRIM
                this.toShowAlert()
                this.title = title
                this.content = content
                this.cb = () => {}
                console.log(this.type)
                if (cb) {
                    this.cb = cb;
                }
            },
            alert(title , message ) {
                this.type = SHOW_TYPE_ALERT
                this.toShowAlert()
                this.title = title
                this.content = message
                this.cb = null;
            }
        }
    }
    </script>
    <style lang="scss" scoped>

        $alert_bg : rgba($color: #000000, $alpha: 0.4);
        $c_title: #333333;
        $c_content: #666666;
        $c_cancel: #1BA1E2;
        $c_sure: #FF5B0F;
        $c_seperate: #dddddd;

        $width: 375;

        @function px($px) {
            @return $px / $width * 100vw;
        }

        .alert-container {
            // $bg_color: 
            position: fixed;
            top: 0;left: 0;right: 0;bottom: 0;
            background: $alert_bg;
        }
            // animation: name duration timing-function delay iteration-count direction fill-mode;
        .alert-content {
            background: #fff;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate3d(-50%, -50% ,0);
            border-radius: 6px;
            display: flex;
            flex-flow: column nowrap;
            align-items: stretch;
            width: 75%;
            .title {
                color: $c_title;
                font-size: px(17);
                font-weight: bold;
                margin: 10px 5px;
            }
            .content {
                color: $c_content;
                font-size: px(14);
                margin: 5px 5px 10px;
                max-height: px(200);
                overflow: scroll;
                text-align: center;
            }
            .handles {
                border-top: solid $c_seperate 1px;
                display: flex;
                flex-flow: row nowrap;
                align-items: center;
                font-size: px(17);
                height: px(45);
                line-height: px(45);
                text-align: center;
                .cancel {
                    color: $c_cancel;
                    flex: 1;
                    position: relative;
                    &::after {
                        content: '';
                        position: absolute;
                        top: 0;right: 0;width: 1px;bottom: 0;
                        background: $c_seperate;
                    }
                }
                .sure {
                    color: $c_sure;
                    flex: 1;
                }
            }
        }
        .wrapTitle {
            word-wrap: break-word;
            text-align: center;
        }
        .alert-transition-enter {
            opacity: 0;
            transform: translate3d(-50% , -50% , 0) scale(0.5)
        }
        .alert-transition-enter-active {
            transition: 0.3s ease;
        }
        .alert-transition-leave-to {
            opacity: 0;
            transform: translate3d(-50% , -50% , 0) scale(0.5)
        }

        .alert-transition-leave-active {
            transition: 0.3s ease;
        }
    </style>
```

>插件的关键用法
```
    // 导入dialog 的组件
    import DialogComponent from './dialog.vue'
    let Dialog = {}

    // 插件
    let install = function (Vue , options) {
        let div = document.createElement('div')
        div.setAttribute('id' , 'alert-root')
        document.body.appendChild(div)
        let DialogConstructor = Vue.extend(DialogComponent)
        const instance = new DialogConstructor()
        console.log(instance)
        instance.$mount('#alert-root')
        
        let dialogHandle = {
            // confirm 
            confirm(title , message , cb) {
                instance.confirm(title , message , cb)
            },
            // alert
            alert(title , message) {
                instance.alert(title , message)
            }
        }
        // 可以直接在vue组件中通过this.$dialog.confirm(title , message) 或者 this.$dialog.alert(title , message) 方式使用
        Vue.prototype.$dialog = dialogHandle
    }

    Dialog.install = install;
    export default Dialog
```
> vue项目中使用，直接就通过use 方法使用插件
2. loading插件

3. 在移动端项目中，一般的页面主要有三部分组成，分别是头部导航栏，中间内容，底部导航栏，所以一般封装了移动端的 页面组件，下面是我的简单封装，page组件的封装
>1. page 组件
```
<!-- page 页面的封装，包含header 和 body -->
<template>
    <div class="page">
        <naviheader v-if="showHeader" :title="title" :showBack='showBack'>
            <div slot="rightitems"><slot name="rightActions"></slot></div>
        </naviheader>
        <div class="center">
            <slot name="body" />
        </div>
        <div class="bottom">
            <slot name="bottom" />
        </div>
        <!-- 左抽屉 -->
        <div :class="{'left-drawer':true,'drawer-left-show':this.leftDrawer}">
            <slot name="leftDrawer" />
        </div>
        <!-- 右抽屉 -->
        <div :class="{'right-drawer':true,'drawer-right-show':this.rightDrawer}">
            <slot name="rightDrawer" />
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
      };
    },

    props:{
        title:{
            type:String,
            default:''
        },
        showHeader:{
            type:Boolean,
            default:false
        },
        showBack:{
            type:Boolean,
            default:false
        },
        leftDrawer:{
            type:Boolean,
            default:false
        },
        rightDrawer:{
            type:Boolean,
            default:false
        }
    },

    components: {
    },

    created () {
        console.log(this.pageTitle)
    },

    computed: {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
<style lang="scss" scoped>
    .page {
        width: 100%;
        height: 100vh;
        display: flex;
        flex-flow: column;
        align-items: stretch;
        justify-content: flex-start;
        .center {
            flex: 1;
            overflow: auto;
        }
        .left-drawer {
            position: fixed;
            top: 0;bottom: 0;right: 100%;
            transition: all 0.3s ease-in-out;
            z-index: 999;
        }
        .drawer-left-show {
            transform: translateX(100%)
        }
        .right-drawer {
            position: fixed;
            top: 0;bottom: 0;left: 100%;
            transition: all 0.3s ease-in-out;
            z-index: 999;
        }
        .drawer-right-show {
            transform: translateX(-100%)
        }
    }
</style>
```
>2. naviheader 组件
```
<template>
    <div class="navi-header">
        <i class="icon iconfont icon-left left" v-if="showBack" @click="leftBack"></i>
        <div class="title"><slot name='title'> <span> {{title}}  </span> </slot></div>
        <slot name='rightitems'></slot>
    </div>
</template>

<script>
export default {
    data () {
      return {
      };
    },

    props:{
        title:{
            type:String,
            default: '标题'
        },
        showBack:{type:Boolean , default: false}
    },
    
    components: {
    },

    created () {
    },

    computed: {
    },

    mounted() {
        console.log(' header ==')
        console.log(this.title)
    },

    methods: {
        leftBack() {
            console.log('back')
            this.$router.back()
        }
    }
}
</script>
<style lang="scss" scoped>
    .navi-header {
        position: relative;
        padding: r_px(10) r_px(8);
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        z-index: 999;
    }
    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50% , -50%,0);
        font-size: r_px(20);
        color: #333333;

    }
    .left {
        font-size: r_px(17)
    }
</style>
```

# 待续
## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
