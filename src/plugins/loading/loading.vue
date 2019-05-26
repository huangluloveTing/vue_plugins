<template>
    <div class="my-toast" :style="show ? 'display:block' : 'display:none'">
        <div class="toast-mask" v-if="showMask"></div>
        <div class="toast-main">
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
      return {
          showMask:true,
          title:'正在加载...',
          show: true
          };
    },

    components: {
    },

    created () {
    },

    computed: {
    },

    mounted() {
    },

    methods: {
        showLoading(title) {
            this.show = true
            this.title =  title
        },
        hidden() {
            this.show = false
        }
    }
}
</script>
<style lang="scss" scoped>
    $toask-mask: rgba($color: #000000, $alpha: 0.2);
    $width: 375;

    @function px($px) {
        @return $px / $width * 100vw;
    }

    .my-toast {
        display: block;
        .toast-mask {
            position: fixed;
            top: 0;left: 0;right: 0;bottom: 0;
            background: $toask-mask;
        }
        .toast-main {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate3d(-50% , -50% , 0);
            width: px(100);
            height: px(100);
            background: url('../../assets/images/loading.gif') no-repeat center;
            background-color: #fff;
            background-size: 100%;
            border-radius: 5px;
            background-clip: border-box;
            box-shadow: 0px 0px 1px 2px #f5f5f5;
            span {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                text-align: center;
                color: #666666;
                font-size: px(13);
                margin-bottom: 5px;
            }
        }
    }
</style>
