<template>
    <div class="double-container">
        <h1>{{value}}</h1>
        <div class="click" @click="change">change value</div>
    </div>
</template>

<script>
export default {
    data () {
      return {
      };
    },

    props:['value'],
    components: {
    },

    created () {
    },

    computed: {
    },

    mounted() {
    },

    methods: {
        change() {
            if (this.i == undefined || this.i == 0) {
                this.i = 1;
            }
            this.i ++;
            this.$emit('input' , 'currentValue' + this.i)
        }
    }
}
</script>
<style scoped>
    .click {
        height: 50px;
        background: #ff0;
    }
</style>