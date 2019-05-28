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
        <div :class="{'drawer':true,'drawer-show':this.showDrawer}">
            <slot name="drawer" />
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
        showDrawer:{
            type:Boolean,
            default:false
        }
    },

    components: {
    },

    created () {
        console.log('=== page ====')
        console.log(this.pageTitle)
    },

    computed: {
        drawerClass() {
            return {
                'drawer':true,
                'drawer-show':this.showDrawer
            }
        }
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
        .drawer {
            position: fixed;
            top: 0;bottom: 0;right: 100%;
            transition: all 0.3s ease-in-out;
            z-index: 999;
        }
        .drawer-show {
            transform: translateX(100%)
        }
    }
</style>
