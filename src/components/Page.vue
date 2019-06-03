<!-- page 页面的封装，包含header 和 body -->
<template>
    <div class="page">
        <naviheader v-if="showHeader" :title="title" :showBack='showBack'>
            <div slot="rightitems"><slot name="rightActions"></slot></div>
            <div slot="left"><slot name="header-left"></slot></div>
        </naviheader>
        <div class="center" :class="showHeader ? 'headerShow' : ''">
            <slot name="body" />
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
        .center {
            background: $c_primary_bg1;
            -webkit-overflow-scrolling:touch;
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
        .headerShow {
            margin-top: r_px(40);
        }
    }
</style>
