<!--  -->
<template>
    <div class="toast-container" :style="visible ? 'display:block' : 'display:none'" :class="toastPostion">
        <div class="toast-content">
            <template v-for="(item , index) in toasts">
                <item :key="index+ ''" :title='item.title + item.key'>
                    <i v-if="item.type == 'success'" class="icon iconfont icon-pxduoxuanxuanzhong icon-right" slot="header-icon"/>
                    <i v-else-if="item.type == 'fail'" class="icon iconfont icon-chaSVG icon-right" slot="header-icon"/>
                    <i v-else-if="item.type == 'warn'" class="icon iconfont icon-gantanhaoSVG icon-right" slot="header-icon"/>
                </item>
            </template>
        </div>
    </div>
</template>

<script>

const TOAST_TYPE_SUCCESS = 'success' // 成功
const TOAST_TYPE_FAILED = 'fail'   // 失败
const TOAST_TYPE_WARN = 'warn'       // 警告
const TOAST_DURATION = 3000;

// 所在位置
const TOAST_POSITION_BOTTOM = 'bottom'   
const TOAST_POSITION_CENTER = 'center'
const TOAST_POSITION_TOP = 'top'

import item from './toastItem'

export default {
    data () {
      return {
          toasts:[],
          visible:true,
          position: TOAST_POSITION_CENTER,
          duration: TOAST_DURATION
      };
    },

    components: {
        item
    },

    created () {
    },

    computed: {
        toastPostion() {
            if (this.position == TOAST_POSITION_BOTTOM) {
                return 'toast-position-bottom'
            }
            if (this.position == TOAST_POSITION_CENTER) {
                return 'toast-position-center'
            }
            if (this.position == TOAST_POSITION_TOP) {
                return 'toast-position-top'
            }
            return 'toast-position-center'
        }
    },

    methods: {
        show(type , title , options) {
            let toast = this.createToastItemConfig(type , title , options)
            let duration = options ? (options.duration || this.duration) : this.duration
            this.toasts.push(toast)
            console.log('show type')
            console.log(duration)
            setTimeout(() => {
                this.removeToastForKey(toast.key)
            }, duration);
        },
        createToastItemConfig(type , title , options) {
            let toast = {}
            toast.type = type
            toast.title = title
            toast.options = options
            toast.key = this.createToastItemKey()
            return toast;
        },
        createToastItemKey() {
            let key = new Date().getTime().toString()
            return key
        },
        removeToastForKey(key) {
            if (key === 'undefined' || key == null) {
                return;
            }
            let newToasts = this.toasts.filter(toast => toast.key != key)
            this.toasts = newToasts;
        }
    }
}
</script>
<style lang="scss" scoped>
    .toast-container {
        position: fixed;
        .toast-content {
            display: flex;
            flex-flow: column-reverse nowrap;
            align-items: center;
        }
    }

    .icon-right {margin-right: 5px;}

    .toast-position-top {
        left: 50%;top: 30px;
        transform: translateX(-50%);
    }
    .toast-position-center {
        left: 50%;top: 50%;
        transform: translate3d(-50% , -50% , 0)
    }
    .toast-position-bottom {
        left: 50%;bottom: 30px;
        transform: translateX(-50%);
    }
    .item-leave-to {
        opacity: 0;
    }
    .item-leave-active {
        transition: all 0.3s ease;
    }

</style>
