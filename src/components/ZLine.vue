<!--  -->
<template>
    <div class="line" :style="{height: height + 'px' , background:bgColor}"></div>
</template>

<script>
export default {
    data () {
      return {
      };
    },
    props:['height' , 'bgColor'],
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
    .line {
        background: $c_primary_bg1;
        height: 1px;
        width: 100%;
    }
</style>