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
            background: $c_primary_bg1;
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
