# vue_buck

## vue项目vuex
*vue是模板语法框架*
*有许多指令和*

## vue 项目自定义插件
- dialog 插件用法
>>dialog的视图样式层
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

>>插件的关键用法
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
