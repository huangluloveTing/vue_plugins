<!--  -->
<template>
    <div v-cmodel='title'> this is cart page
      <bindc v-model='data' />

      <div>
        v-model data : {{data}}
      </div>

    </div>
</template>

<script>
export default {
    data () {
      return {
        title:'',
        data:'hello'
      };
    },

    components: {
    },

    created () {
      console.log('cart created')
    },

    computed: {
    },

    mounted() {
    },

    methods: {
    }
}
</script>
<style scoped>

</style>