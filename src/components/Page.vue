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
        }
    },

    components: {
    },

    created () {
        console.log('=== page ====')
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
    }
</style>
