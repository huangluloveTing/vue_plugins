<!-- customModel.vue  组件-->
<template>
    <div>
        <h1> v-model 自定义 事件</h1>
        <h2> {{value}} </h2>
        <div class="button" @click="change" />
    </div>
</template>

<script>
export default {
    data () {
      return {
      };
    },

    props:['value'],
    model:{
        prop:'value',
        event:'close'
    },
    methods: {
        change() {
            if (this.i == undefined) {
            this.i = 0
            }
            this.i += 100    
            this.$emit('close' , this.i + this.value)
        }
    }
}
</script>
<style lang='scss'>
    .button {
        width: 100px;
        height: 30px;
        background: #103090;
    }
</style>