<!-- 每个toast的样式 -->
<template>
    <transition name="toast-item">
        <div class="toast-item">
            <slot name="header-icon"></slot>
            <slot name="toast-title"><span>{{title}}</span></slot>
        </div>
    </transition>
</template>

<script>
export default {
    data () {
      return {
          
      };
    },
    props:['title'],

    components: {
    },

    created () {
    },

    computed: {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
<style lang='scss' scoped>
    $toast_bg : #2c2c2c;
    $toast_text_color: #dddddd;
    .toast-item {
        background: $toast_bg;
        color: $toast_text_color;
        padding: 10px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-flow: row nowrap;
        margin: 8px auto;
        border-radius: 5px;
        line-height: 100%;
        font-size: 20px;
        span {
            // background: #fff;
            display: inline-block;
            vertical-align: middle;
        }
    }
    .toast-item-leave-to {
        opacity: 0;
        transform: translateY(-100%)
    }
    .toast-item-leave-active {
        transition: all 0.3s ease
    }
</style>