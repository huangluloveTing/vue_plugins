<template>
    <div class="navi-header">
        <slot name='left'><i class="icon iconfont icon-left left" v-if="showBack" @click="leftBack"></i></slot>
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
        position: fixed;
        top:0;left: 0;right: 0;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
        background: #fff;
        z-index: 999;
        height: r_px(40);
        line-height: r_px(40);
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